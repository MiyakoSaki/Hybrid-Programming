export type ClothingCategory = "shirts" | "shorts" | "pants";

export type ClothingProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: ClothingCategory;
  thumbnail: string;
  images: string[];
};

function createPlaceholderImage(title: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
      <title>${title}</title>
      <desc>Stylized clothing product card for ${title}</desc>
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="72" fill="url(#bg)" />
      <circle cx="960" cy="180" r="190" fill="${accent}" opacity="0.18" />
      <circle cx="250" cy="710" r="240" fill="${accent}" opacity="0.14" />
      <text x="80" y="160" fill="#0f172a" font-family="Arial, sans-serif" font-size="64" font-weight="700">${title}</text>
      <text x="80" y="260" fill="#475569" font-family="Arial, sans-serif" font-size="34">Clothing collection</text>
      <rect x="80" y="360" width="1040" height="380" rx="48" fill="#ffffff" opacity="0.7" />
      <path d="M300 410 h140 l58 86 -58 42 v170 h-140 v-170 l-58 -42 z" fill="${accent}" opacity="0.82" />
      <path d="M560 430 h170 v38 h-52 v230 h-66 v-230 h-52 z" fill="#334155" opacity="0.9" />
      <path d="M810 430 h150 v44 h-92 v46 h78 v42 h-78 v98 h92 v44 h-150 z" fill="#0f172a" opacity="0.9" />
      <text x="80" y="820" fill="#0f172a" font-family="Arial, sans-serif" font-size="30" font-weight="600">Static product image</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const CLOTHING_PRODUCTS: ClothingProduct[] = [
  {
    id: 101,
    title: "Mercer Cotton Shirt",
    description:
      "A crisp everyday shirt made for office hours, dinners, and anything in between.",
    price: 58,
    discountPercentage: 12,
    rating: 4.8,
    stock: 26,
    brand: "North Thread",
    category: "shirts",
    thumbnail: createPlaceholderImage("Mercer Cotton Shirt", "#0f766e"),
    images: [createPlaceholderImage("Mercer Cotton Shirt", "#0f766e")],
  },
  {
    id: 102,
    title: "Relaxed Linen Shirt",
    description:
      "Lightweight linen with a relaxed cut that works well for warm-weather layering.",
    price: 64,
    discountPercentage: 8,
    rating: 4.7,
    stock: 18,
    brand: "Harbor Atelier",
    category: "shirts",
    thumbnail: createPlaceholderImage("Relaxed Linen Shirt", "#7c2d12"),
    images: [createPlaceholderImage("Relaxed Linen Shirt", "#7c2d12")],
  },
  {
    id: 201,
    title: "City Utility Shorts",
    description:
      "Structured shorts with roomy pockets and a clean silhouette for daily wear.",
    price: 46,
    discountPercentage: 10,
    rating: 4.6,
    stock: 34,
    brand: "Cinder Supply",
    category: "shorts",
    thumbnail: createPlaceholderImage("City Utility Shorts", "#1d4ed8"),
    images: [createPlaceholderImage("City Utility Shorts", "#1d4ed8")],
  },
  {
    id: 202,
    title: "Weekend Chino Shorts",
    description:
      "Soft chino shorts with a tailored edge for casual weekends and travel days.",
    price: 42,
    discountPercentage: 5,
    rating: 4.5,
    stock: 22,
    brand: "Dock Lane",
    category: "shorts",
    thumbnail: createPlaceholderImage("Weekend Chino Shorts", "#b45309"),
    images: [createPlaceholderImage("Weekend Chino Shorts", "#b45309")],
  },
  {
    id: 301,
    title: "Tailored Stretch Pants",
    description:
      "A polished pant with a little stretch for all-day comfort and a sharper profile.",
    price: 72,
    discountPercentage: 14,
    rating: 4.9,
    stock: 15,
    brand: "Aster Standard",
    category: "pants",
    thumbnail: createPlaceholderImage("Tailored Stretch Pants", "#7c3aed"),
    images: [createPlaceholderImage("Tailored Stretch Pants", "#7c3aed")],
  },
  {
    id: 302,
    title: "Everyday Straight Pants",
    description:
      "Straight-leg pants with a relaxed fit that keep the collection grounded and versatile.",
    price: 68,
    discountPercentage: 9,
    rating: 4.7,
    stock: 20,
    brand: "Field & Frame",
    category: "pants",
    thumbnail: createPlaceholderImage("Everyday Straight Pants", "#0f172a"),
    images: [createPlaceholderImage("Everyday Straight Pants", "#0f172a")],
  },
];

export function getClothingProduct(id: number) {
  return CLOTHING_PRODUCTS.find((product) => product.id === id);
}
