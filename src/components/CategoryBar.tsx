import Link from "next/link";
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
  return (
    <nav className="border-b border-slate-200 bg-white" aria-label="Categories">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 overflow-x-auto px-4 py-3 sm:px-6 lg:justify-center lg:gap-14 lg:px-8">
        {categoryLinks.map(({ name, icon: Icon }) => (
          <Link
            key={name}
            href={`/products?category=${encodeURIComponent(name)}`}
            className="flex shrink-0 items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <Icon size={16} />
            </span>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
