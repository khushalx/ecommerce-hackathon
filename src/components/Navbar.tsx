"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { useStore } from "@/context/store-context";

export function Navbar() {
  const router = useRouter();
  const { cartCount, openLogin } = useStore();
  const [query, setQuery] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    router.push(
      trimmedQuery
        ? `/products?q=${encodeURIComponent(trimmedQuery)}`
        : "/products",
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-5 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-black tracking-tight text-blue-700">
          nivara<span className="text-amber-500">.</span>
        </Link>

        <form
          className="mx-auto hidden h-11 w-full max-w-2xl items-center rounded-lg bg-slate-100 px-3 sm:flex"
          onSubmit={handleSearch}
          role="search"
        >
          <button
            type="submit"
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-slate-500 hover:bg-slate-200 hover:text-blue-700"
            aria-label="Submit search"
          >
            <Search size={19} />
          </button>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products, brands and more"
            aria-label="Search products"
            className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-500"
          />
        </form>

        <button
          type="button"
          onClick={openLogin}
          className="hidden h-10 items-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-800 hover:border-blue-600 hover:text-blue-700 sm:flex"
        >
          <UserRound size={18} />
          Login
        </button>

        <button
          type="button"
          onClick={openLogin}
          className="ml-auto flex size-10 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 sm:hidden"
          aria-label="Login"
        >
          <UserRound size={21} />
        </button>

        <Link
          href="/cart"
          className="relative flex size-10 shrink-0 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100"
          aria-label={`Cart with ${cartCount} items`}
        >
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute right-0 top-0 flex min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] font-bold leading-5 text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
      <div className="px-4 pb-3 sm:hidden">
        <form
          className="flex h-11 items-center rounded-lg bg-slate-100 px-3"
          onSubmit={handleSearch}
          role="search"
        >
          <button
            type="submit"
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-slate-500 hover:bg-slate-200 hover:text-blue-700"
            aria-label="Submit mobile search"
          >
            <Search size={19} />
          </button>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products"
            aria-label="Search products on mobile"
            className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
          />
        </form>
      </div>
    </header>
  );
}
