import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Truck } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="overflow-hidden rounded-2xl bg-blue-700 text-white">
      <div className="grid min-h-[330px] items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
            Weekend price drop
          </p>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Everyday essentials.
            <br />
            Better prices.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-blue-100 sm:text-lg">
            Thoughtful picks across electronics, home, fashion, and more. No
            noise, just useful deals.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-blue-700 hover:bg-blue-50"
            >
              Shop all deals
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/products?category=Electronics"
              className="inline-flex h-11 items-center rounded-lg border border-blue-400 px-5 text-sm font-bold text-white hover:bg-blue-800"
            >
              Explore electronics
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <Truck size={17} />
              Free delivery over ₹499
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={17} />
              Quality checked picks
            </span>
          </div>
        </div>

        <div className="relative hidden h-[260px] lg:block">
          <div className="absolute left-4 top-6 h-52 w-44 rotate-[-6deg] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=90"
              alt="Red running shoe"
              fill
              priority
              sizes="176px"
              className="object-cover"
            />
          </div>
          <div className="absolute right-8 top-0 h-60 w-48 rotate-[5deg] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=90"
              alt="Smartphone"
              fill
              priority
              sizes="192px"
              className="object-cover"
            />
          </div>
          <span className="absolute bottom-3 right-1 rounded-xl bg-amber-400 px-4 py-3 text-center text-sm font-black text-slate-950 shadow-lg">
            Deals up to
            <strong className="block text-2xl">60% off</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
