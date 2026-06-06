import { HeroBanner } from "@/components/HeroBanner";
import { ProductSection } from "@/components/ProductSection";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <HeroBanner />
      <ProductSection
        title="Best deals"
        subtitle="Big value on products people actually use"
        products={products.slice(0, 4)}
        priorityCount={4}
      />
      <ProductSection
        title="Trending products"
        subtitle="Popular picks across the marketplace this week"
        products={products.slice(4, 8)}
        href="/products?sort=rating"
      />
      <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Nivara everyday
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">
            Small upgrades, sensible prices.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Fresh recommendations based on what shoppers are loving.
          </p>
        </div>
        <div className="mt-5 rounded-xl bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm sm:mt-0">
          New deals added every Friday
        </div>
      </div>
      <ProductSection
        title="Recommended for you"
        subtitle="A balanced mix of useful finds"
        products={products.slice(8, 12)}
      />
    </div>
  );
}
