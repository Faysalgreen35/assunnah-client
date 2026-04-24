import productsData from "@/data/all-products.json";
import { API_BASE_URL } from "@/constants";

export interface Product {
  _id?: string;
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
  [key: string]: unknown;
}

type HybridQueryResult<T> = {
  data?: T | { data?: T } | null;
  isError?: boolean;
};

function unwrapHybridData<T>(value: T | { data?: T } | null | undefined): T | undefined {
  if (!value) return undefined;

  if (typeof value === "object" && "data" in value) {
    return (value as { data?: T }).data;
  }

  return value as T;
}

export function useHybrid<T>(query: HybridQueryResult<T>, fallback: T): T {
  const data = unwrapHybridData(query.data);
  return query.isError || data === undefined || data === null ? fallback : data;
}

/**
 * Hybrid data fetching utility that tries API first, falls back to JSON
 * Returns products either from backend API or from all-products.json
 */
export async function getProductsHybrid(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/product`,
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
      return Array.isArray(data) ? data : data.data?.result || data.data || [];
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
    const response = await fetch(
      `${API_BASE_URL}/product/${slug}`,
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
      return data.data || data || null;
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
