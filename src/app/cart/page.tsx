"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { CartItem } from "@/components/CartItem";
import { PriceSummary } from "@/components/PriceSummary";
import { useStore } from "@/context/store-context";

export default function CartPage() {
  const { cart, cartCount } = useStore();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-semibold text-blue-700">Your basket</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
          Shopping cart
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-700">
            <ShoppingBag size={30} />
          </span>
          <h2 className="mt-5 text-2xl font-black text-slate-950">
            Your cart is empty
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">
            Add a few useful finds and they&apos;ll show up here, ready for
            checkout.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-2xl border border-slate-200 bg-white px-4 sm:px-6">
            {cart.map((line) => (
              <CartItem key={line.product.id} line={line} />
            ))}
          </section>
          <div className="lg:sticky lg:top-24">
            <PriceSummary />
          </div>
        </div>
      )}
    </div>
  );
}
