"use client";

import { createContext, useContext, useState } from "react";
import type { Product } from "@/lib/products";
import { LoginModal } from "@/components/LoginModal";

export type CartLine = {
  product: Product;
  quantity: number;
};

type StoreContextValue = {
  cart: CartLine[];
  cartCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  loginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [loginOpen, setLoginOpen] = useState(false);

  function addToCart(product: Product, quantity = 1) {
    setCart((current) => {
      const existing = current.find((line) => line.product.id === product.id);

      if (existing) {
        return current.map((line) =>
          line.product.id === product.id
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        );
      }

      return [...current, { product, quantity }];
    });
  }

  function removeFromCart(productId: string) {
    setCart((current) =>
      current.filter((line) => line.product.id !== productId),
    );
  }

  function updateQuantity(productId: string, quantity: number) {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((current) =>
      current.map((line) =>
        line.product.id === productId ? { ...line, quantity } : line,
      ),
    );
  }

  const value = {
    cart,
    cartCount: cart.reduce((total, line) => total + line.quantity, 0),
    addToCart,
    removeFromCart,
    updateQuantity,
    loginOpen,
    openLogin: () => setLoginOpen(true),
    closeLogin: () => setLoginOpen(false),
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
      <LoginModal />
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}
