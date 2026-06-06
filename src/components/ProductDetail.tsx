"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BadgeCheck,
  MapPin,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { useStore } from "@/context/store-context";
import type { Product } from "@/lib/products";
import { discountPercent, formatPrice } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const gallery = [product.image, product.image, product.image];

  function buyNow() {
    addToCart(product, quantity);
    router.push("/cart");
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="grid gap-3 sm:grid-cols-[72px_1fr]">
          <div className="order-2 flex gap-2 sm:order-1 sm:flex-col">
            {gallery.map((image, index) => (
              <button
                key={`${product.id}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square w-16 overflow-hidden rounded-lg border-2 bg-slate-50 ${
                  selectedImage === index
                    ? "border-blue-600"
                    : "border-slate-200"
                }`}
                aria-label={`View product image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="64px"
                  className={`object-cover ${
                    index === 1
                      ? "scale-110"
                      : index === 2
                        ? "scale-125"
                        : ""
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="relative order-1 aspect-square overflow-hidden rounded-xl bg-slate-50 sm:order-2">
            <Image
              src={gallery[selectedImage]}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={`object-cover ${
                selectedImage === 1
                  ? "scale-110"
                  : selectedImage === 2
                    ? "scale-125"
                    : ""
              }`}
            />
          </div>
        </div>

        <div className="lg:pl-4">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            {product.brand}
          </p>
          <h1 className="mt-2 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
            {product.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-700 px-2 py-1 text-sm font-bold text-white">
              {product.rating}
              <Star size={13} fill="currentColor" />
            </span>
            <span className="text-sm text-slate-600">
              {product.reviews.toLocaleString("en-IN")} verified ratings
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
              <BadgeCheck size={16} />
              Nivara checked
            </span>
          </div>

          <div className="mt-6 border-y border-slate-200 py-5">
            <p className="text-sm font-semibold text-emerald-700">
              Special price
            </p>
            <div className="mt-1 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-black text-slate-950">
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="font-bold text-emerald-700">
                {discountPercent(product.price, product.originalPrice)}% off
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Inclusive of all taxes
            </p>
          </div>

          <div className="mt-5">
            <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
              <MapPin className="mt-0.5 shrink-0 text-blue-700" size={19} />
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Delivery in 2-4 days
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Enter your PIN code at checkout for an exact date.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-700">Quantity</span>
            <div className="flex h-10 items-center rounded-lg border border-slate-300">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="flex size-10 items-center justify-center hover:bg-slate-50"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="w-9 text-center text-sm font-bold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="flex size-10 items-center justify-center hover:bg-slate-50"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addToCart(product, quantity)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-blue-600 font-bold text-blue-700 hover:bg-blue-50"
            >
              <ShoppingCart size={20} />
              Add to cart
            </button>
            <button
              type="button"
              onClick={buyNow}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 font-bold text-white hover:bg-blue-700"
            >
              <Zap size={20} fill="currentColor" />
              Buy now
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5 text-center text-xs font-semibold text-slate-600">
            <span className="flex flex-col items-center gap-2">
              <Truck size={20} className="text-blue-700" />
              Fast delivery
            </span>
            <span className="flex flex-col items-center gap-2">
              <RotateCcw size={20} className="text-blue-700" />
              7-day returns
            </span>
            <span className="flex flex-col items-center gap-2">
              <ShieldCheck size={20} className="text-blue-700" />
              Secure payment
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-black text-slate-950">
            Product description
          </h2>
          <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
          <h3 className="mt-6 font-bold text-slate-900">Highlights</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {product.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-slate-700"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-600" />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-black text-slate-950">Specifications</h2>
          <dl className="mt-4 divide-y divide-slate-200">
            {Object.entries(product.specifications).map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[140px_1fr] gap-4 py-3 text-sm"
              >
                <dt className="text-slate-500">
                  {label.replace(/([A-Z])/g, " $1").trim()}
                </dt>
                <dd className="font-medium text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
