import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
        404
      </p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">
        We couldn&apos;t find that product
      </h1>
      <p className="mt-3 text-slate-600">
        It may have moved, sold out, or never made it onto the shelf.
      </p>
      <Link
        href="/products"
        className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-bold text-white"
      >
        <ArrowLeft size={17} />
        Browse products
      </Link>
    </div>
  );
}
