"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { ClothingProduct } from "../products/data";

export type CartItem = Pick<
  ClothingProduct,
  "id" | "title" | "price" | "thumbnail" | "category"
> & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (
    product: Pick<
      ClothingProduct,
      "id" | "title" | "price" | "thumbnail" | "category"
    >,
  ) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
};

const STORAGE_KEY = "shopdash-cart";

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (
      product: Pick<
        ClothingProduct,
        "id" | "title" | "price" | "thumbnail" | "category"
      >,
    ) => {
      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) => item.id === product.id,
        );

        if (existingItem) {
          return currentItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }

        return [...currentItems, { ...product, quantity: 1 }];
      });
    };

    const removeItem = (id: number) => {
      setItems((currentItems) =>
        currentItems.filter((currentItem) => currentItem.id !== id),
      );
    };

    const clearCart = () => setItems([]);

    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return {
      items,
      addItem,
      removeItem,
      clearCart,
      itemCount,
      totalPrice,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}
