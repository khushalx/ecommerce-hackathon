import Link from "next/link";
import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  { title: "Free delivery", text: "On orders over ₹499", icon: Truck },
  { title: "Easy returns", text: "7-day return policy", icon: RotateCcw },
  { title: "Secure checkout", text: "Protected payments", icon: ShieldCheck },
  { title: "Need help?", text: "Support from 9am-8pm", icon: Headphones },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 border-b border-slate-200 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {benefits.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <Icon size={19} />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">{title}</p>
              <p className="mt-0.5 text-xs text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-xl font-black tracking-tight text-blue-700">
            nivara<span className="text-amber-500">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
            Useful products, fair prices, and a shopping experience that stays
            pleasantly simple.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">Shop</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <Link className="block hover:text-blue-700" href="/products">
              All products
            </Link>
            <Link
              className="block hover:text-blue-700"
              href="/products?category=Electronics"
            >
              Electronics
            </Link>
            <Link
              className="block hover:text-blue-700"
              href="/products?category=Fashion"
            >
              Fashion
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">Help</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <span className="block">Track order</span>
            <span className="block">Returns</span>
            <span className="block">Contact support</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">About</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <span className="block">About Nivara</span>
            <span className="block">Careers</span>
            <span className="block">Privacy</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © 2026 Nivara Marketplace. Built for a hackathon demo.
      </div>
    </footer>
  );
}
