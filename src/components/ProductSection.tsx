import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";

type ProductSectionProps = {
  title: string;
  subtitle: string;
  products: Product[];
  href?: string;
  priorityCount?: number;
};

export function ProductSection({
  title,
  subtitle,
  products,
  href = "/products",
  priorityCount = 0,
}: ProductSectionProps) {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </div>
        <Link
          href={href}
          className="hidden items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-800 sm:flex"
        >
          View all
          <ArrowRight size={16} />
        </Link>
      </div>
      <ProductGrid products={products} priorityCount={priorityCount} />
    </section>
  );
}
