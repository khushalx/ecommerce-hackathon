"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { FilterSidebar, type Filters } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/lib/products";

type ProductListingProps = {
  initialCategory?: string;
  initialQuery?: string;
  initialSort?: string;
};

export function ProductListing({
  initialCategory = "All",
  initialQuery = "",
  initialSort = "featured",
}: ProductListingProps) {
  const [sort, setSort] = useState(initialSort);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    category: initialCategory,
    brands: [],
    price: "all",
    rating: 0,
  });

  const visibleProducts = useMemo(() => {
    const query = initialQuery.toLowerCase().trim();
    const filtered = products.filter((product) => {
      const matchesQuery =
        !query ||
        [product.title, product.brand, product.category].some((value) =>
          value.toLowerCase().includes(query),
        );
      const matchesCategory =
        filters.category === "All" || product.category === filters.category;
      const matchesBrand =
        filters.brands.length === 0 || filters.brands.includes(product.brand);
      const matchesRating = product.rating >= filters.rating;
      const matchesPrice =
        filters.price === "all" ||
        (filters.price === "under-1000" && product.price < 1000) ||
        (filters.price === "1000-2500" &&
          product.price >= 1000 &&
          product.price <= 2500) ||
        (filters.price === "2500-10000" &&
          product.price > 2500 &&
          product.price <= 10000) ||
        (filters.price === "above-10000" && product.price > 10000);

      return (
        matchesQuery &&
        matchesCategory &&
        matchesBrand &&
        matchesRating &&
        matchesPrice
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "discount") {
        const aDiscount = (a.originalPrice - a.price) / a.originalPrice;
        const bDiscount = (b.originalPrice - b.price) / b.originalPrice;
        return bDiscount - aDiscount;
      }
      return b.reviews - a.reviews;
    });
  }, [filters, initialQuery, sort]);

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-700">Nivara marketplace</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
            {initialQuery
              ? `Results for “${initialQuery}”`
              : filters.category === "All"
                ? "All products"
                : filters.category}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {visibleProducts.length} practical picks, ready to ship
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShowFilters(true)}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 lg:hidden"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
          <label className="flex h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-600">
            Sort:
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="bg-transparent font-semibold text-slate-900 outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </div>
        <ProductGrid products={visibleProducts} priorityCount={4} />
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 bg-slate-950/35 lg:hidden">
          <div className="ml-auto h-full w-[88%] max-w-sm overflow-y-auto bg-slate-50 p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-950">
                Refine products
              </h2>
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebar filters={filters} onChange={setFilters} />
            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="mt-4 h-11 w-full rounded-lg bg-blue-600 font-bold text-white"
            >
              Show {visibleProducts.length} products
            </button>
          </div>
        </div>
      )}
    </>
  );
}
