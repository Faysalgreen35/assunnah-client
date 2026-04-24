interface Product {
  name: string;
  category: string;
  [key: string]: any;
}

// Common color and material keywords to extract as attributes
const COLOR_KEYWORDS = [
  'royal blue',
  'pastel pink',
  'wine',
  'blue',
  'pink',
  'red',
  'green',
  'gold',
  'silver',
  'black',
  'white',
  'cream',
  'beige',
  'burgundy',
  'emerald',
];

const MATERIAL_KEYWORDS = [
  'velvet',
  'silk',
  'resin',
  'leather',
  'cotton',
  'linen',
];

/**
 * Generate SEO-friendly slug from product data
 * Pattern: category/subcategory/product-name-attributes
 */
export function generateSlug(product: Product): string {
  const { name, category } = product;

  // Transform category to lowercase with hyphens
  // "Quran Gift Sets" → "quran/gift-sets"
  const categoryParts = category
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const categorySlug = categoryParts.join('/');

  // Extract attributes (colors and materials) from product name
  const nameWords = name.toLowerCase();
  let attributes: string[] = [];

  // Check for color attributes
  for (const color of COLOR_KEYWORDS) {
    if (nameWords.includes(color)) {
      attributes.push(color.replace(/\s+/g, '-'));
    }
  }

  // Check for material attributes
  for (const material of MATERIAL_KEYWORDS) {
    if (nameWords.includes(material)) {
      attributes.push(material);
    }
  }

  // Create product slug from name
  let productSlug = name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '') // Remove special chars except word chars, spaces, hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

  // Remove number suffixes like -1, -2
  productSlug = productSlug.replace(/-\d+$/, '');

  // Remove color and material words from product slug to avoid duplication
  const attributesToRemove = new Set([
    ...COLOR_KEYWORDS.map(c => c.replace(/\s+/g, '-')),
    ...MATERIAL_KEYWORDS,
  ]);

  const productWords = productSlug.split('-').filter(word => !attributesToRemove.has(word));
  productSlug = productWords.join('-');

  // Build final slug: category/product-name-attributes
  const slugParts = [categorySlug, productSlug, ...attributes].filter(Boolean);
  return slugParts.join('/');
}
