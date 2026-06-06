import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({
  products,
  priorityCount = 0,
}: {
  products: Product[];
  priorityCount?: number;
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h3 className="text-lg font-bold text-slate-900">No products found</h3>
        <p className="mt-2 text-sm text-slate-600">
          Try removing a filter or searching for something broader.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 items-start gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
