"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  House,
  Laptop,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Sparkles,
} from "lucide-react";

const categoryLinks = [
  { name: "Mobiles", icon: Smartphone },
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Laptop },
  { name: "Home", icon: House },
  { name: "Beauty", icon: Sparkles },
  { name: "Grocery", icon: ShoppingBasket },
];

export function CategoryBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory =
    pathname === "/products" ? searchParams.get("category") : null;

  return (
    <nav className="border-b border-slate-200 bg-white" aria-label="Categories">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 overflow-x-auto px-4 py-3 sm:px-6 lg:justify-center lg:gap-14 lg:px-8">
        {categoryLinks.map(({ name, icon: Icon }) => {
          const isActive = selectedCategory === name;

          return (
            <Link
              key={name}
              href={`/products?category=${encodeURIComponent(name)}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
              }`}
            >
              <span
                className={`flex size-8 items-center justify-center rounded-full ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                <Icon size={16} />
              </span>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
