"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartLine } from "@/context/store-context";
import { useStore } from "@/context/store-context";
import { formatPrice } from "@/lib/utils";

export function CartItem({ line }: { line: CartLine }) {
  const { updateQuantity, removeFromCart } = useStore();
  const { product, quantity } = line;

  return (
    <article className="grid grid-cols-[96px_1fr] gap-4 border-b border-slate-200 py-5 last:border-0 sm:grid-cols-[120px_1fr_auto]">
      <Link
        href={`/product/${product.id}`}
        className="relative aspect-square overflow-hidden rounded-lg bg-slate-50"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="120px"
          className="object-cover"
        />
      </Link>

      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="mt-1 block font-bold leading-6 text-slate-900 hover:text-blue-700"
        >
          {product.title}
        </Link>
        <p className="mt-1 text-xs text-slate-500">Delivery in 2-4 days</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-lg font-black text-slate-950">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-slate-400 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-9 items-center rounded-lg border border-slate-300">
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="flex size-9 items-center justify-center hover:bg-slate-50"
              aria-label="Decrease quantity"
            >
              <Minus size={15} />
            </button>
            <span className="w-8 text-center text-sm font-bold">{quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="flex size-9 items-center justify-center hover:bg-slate-50"
              aria-label="Increase quantity"
            >
              <Plus size={15} />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(product.id)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-red-600"
          >
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>

      <p className="col-span-2 text-right text-sm font-bold text-slate-900 sm:col-span-1">
        {formatPrice(product.price * quantity)}
      </p>
    </article>
  );
}
