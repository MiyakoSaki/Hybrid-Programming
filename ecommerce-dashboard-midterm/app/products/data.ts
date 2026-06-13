export type ClothingCategory = "mens-shirts" | "mens-shoes";

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

type DummyJsonProduct = ClothingProduct & {
  category: string;
};

type CategoryResponse = {
  products: DummyJsonProduct[];
};

const CLOTHING_CATEGORIES: ClothingCategory[] = ["mens-shirts", "mens-shoes"];

function isClothingCategory(category: string): category is ClothingCategory {
  return CLOTHING_CATEGORIES.includes(category as ClothingCategory);
}

async function fetchCategory(category: ClothingCategory) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to load ${category} products.`);
  }

  const data = (await res.json()) as CategoryResponse;

  return data.products.filter((product): product is ClothingProduct =>
    isClothingCategory(product.category),
  );
}

export async function getClothingProducts() {
  const groupedProducts = await Promise.all(
    CLOTHING_CATEGORIES.map((category) => fetchCategory(category)),
  );

  return groupedProducts.flat();
}

export async function getClothingProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    return null;
  }

  const product = (await res.json()) as DummyJsonProduct;

  if (!isClothingCategory(product.category)) {
    return null;
  }

  return product;
}
