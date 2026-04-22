import productsData from "@/data/all-products.json";

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number | string;
  img: string;
  rating: number;
  description?: string;
  occasions?: string[];
  recipients?: string[];
  features?: string[];
  specs?: Record<string, string>;
  sku?: string;
  [key: string]: any;
}

/**
 * Hybrid data fetching utility that tries API first, falls back to JSON
 * Returns products either from backend API or from all-products.json
 */
export async function getProductsHybrid(): Promise<Product[]> {
  try {
    // Attempt to fetch from backend API
    // Replace with your actual API endpoint
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Only cache for 60 seconds to allow quick updates
        next: { revalidate: 60 },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return Array.isArray(data) ? data : data.data || [];
    }
  } catch (error) {
    console.warn("API fetch failed, falling back to JSON:", error);
  }

  // Fallback to local JSON data
  return productsData as Product[];
}

/**
 * Get a single product by slug, trying API first then JSON
 */
export async function getProductBySlugHybrid(slug: string): Promise<Product | null> {
  try {
    // Try API first
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/products/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data || null;
    }
  } catch (error) {
    console.warn("API fetch for single product failed, falling back to JSON:", error);
  }

  // Fallback to JSON data
  const products = productsData as Product[];
  return products.find((p) => p.slug === slug) || null;
}

/**
 * Filter products with optional occasion and recipient filters
 */
export async function getProductsFiltered(
  options: {
    occasions?: string[];
    recipients?: string[];
    category?: string;
    limit?: number;
  } = {}
): Promise<Product[]> {
  const products = await getProductsHybrid();

  let filtered = products;

  if (options.category) {
    filtered = filtered.filter(
      (p) => p.category?.toLowerCase() === options.category?.toLowerCase()
    );
  }

  if (options.occasions && options.occasions.length > 0) {
    filtered = filtered.filter((p) =>
      options.occasions!.some((occ) => p.occasions?.includes(occ))
    );
  }

  if (options.recipients && options.recipients.length > 0) {
    filtered = filtered.filter((p) =>
      options.recipients!.some((rec) => p.recipients?.includes(rec))
    );
  }

  if (options.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}
