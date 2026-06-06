import type { Metadata } from "next";
import { ProductListing } from "@/components/ProductListing";
import { categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Products",
  description: "Browse and filter products across all Nivara categories.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string; q?: string; sort?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const initialCategory = categories.includes(
    params.category as (typeof categories)[number],
  )
    ? params.category
    : "All";
  const initialSort = [
    "featured",
    "price-low",
    "price-high",
    "rating",
    "discount",
  ].includes(params.sort ?? "")
    ? params.sort
    : "featured";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ProductListing
        key={`${initialCategory}-${params.q ?? ""}-${initialSort}`}
        initialCategory={initialCategory}
        initialQuery={params.q}
        initialSort={initialSort}
      />
    </div>
  );
}
