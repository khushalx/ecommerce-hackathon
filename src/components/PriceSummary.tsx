"use client";

import { ShieldCheck } from "lucide-react";
import { useStore } from "@/context/store-context";
import { formatPrice } from "@/lib/utils";

export function PriceSummary() {
  const { cart } = useStore();
  const subtotal = cart.reduce(
    (total, line) => total + line.product.price * line.quantity,
    0,
  );
  const savings = cart.reduce(
    (total, line) =>
      total +
      (line.product.originalPrice - line.product.price) * line.quantity,
    0,
  );
  const delivery = subtotal >= 499 ? 0 : 49;
  const platformFee = cart.length > 0 ? 9 : 0;
  const total = subtotal + delivery + platformFee;

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h2 className="text-lg font-black text-slate-950">Price details</h2>
      <dl className="mt-5 space-y-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-slate-600">Subtotal</dt>
          <dd className="font-semibold text-slate-900">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-600">Delivery</dt>
          <dd className={delivery === 0 ? "font-semibold text-emerald-700" : ""}>
            {delivery === 0 ? "FREE" : formatPrice(delivery)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-600">Platform fee</dt>
          <dd className="font-semibold text-slate-900">
            {formatPrice(platformFee)}
          </dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-4 text-base">
          <dt className="font-black text-slate-950">Total amount</dt>
          <dd className="font-black text-slate-950">{formatPrice(total)}</dd>
        </div>
      </dl>

      {savings > 0 && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2.5 text-sm font-bold text-emerald-700">
          You save {formatPrice(savings)} on this order
        </p>
      )}

      <button
        type="button"
        className="mt-5 h-12 w-full rounded-lg bg-blue-600 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        disabled={cart.length === 0}
      >
        Proceed to checkout
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
        <ShieldCheck size={16} className="text-emerald-700" />
        Safe and secure payments
      </p>
    </aside>
  );
}
