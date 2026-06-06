"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Plus, Star } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/context/store-context";
import type { Product } from "@/lib/products";
import { discountPercent, formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addToCart } = useStore();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-slate-50"
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-slate-800 shadow-sm">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="mt-1 line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-900 hover:text-blue-700"
        >
          {product.title}
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-emerald-700 px-1.5 py-0.5 text-xs font-bold text-white">
            {product.rating}
            <Star size={11} fill="currentColor" />
          </span>
          <span className="text-xs text-slate-500">
            ({product.reviews.toLocaleString("en-IN")})
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
          <span className="text-lg font-bold text-slate-950">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-slate-400 line-through">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="text-xs font-bold text-emerald-700">
            {discountPercent(product.price, product.originalPrice)}% off
          </span>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border text-sm font-bold ${
            added
              ? "border-emerald-600 bg-emerald-50 text-emerald-700"
              : "border-blue-600 text-blue-700 hover:bg-blue-50"
          }`}
        >
          {added ? <Check size={17} /> : <Plus size={17} />}
          {added ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}
