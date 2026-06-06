"use client";

import { useState } from "react";
import { Check, Eye, EyeOff, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/context/store-context";

export function LoginModal() {
  const { loginOpen, closeLogin } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [submitted, setSubmitted] = useState(false);

  if (!loginOpen) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    closeLogin();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close login dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <Check size={28} />
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              You&apos;re all set
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This demo account is ready. Continue exploring the store.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 h-11 w-full rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <ShoppingBag size={22} />
            </span>
            <p className="text-sm font-semibold text-blue-700">Welcome to Nivara</p>
            <h2 id="login-title" className="mt-1 text-2xl font-bold text-slate-900">
              {mode === "login" ? "Login to your account" : "Create an account"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {mode === "login"
                ? "Track orders, save items, and checkout faster."
                : "Join for a quicker, more personal shopping experience."}
            </p>

            <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              )}
              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 px-3 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Password
                <span className="relative mt-2 block">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    placeholder="Minimum 6 characters"
                    className="h-11 w-full rounded-lg border border-slate-300 px-3 pr-11 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute right-0 top-0 flex size-11 items-center justify-center text-slate-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </span>
              </label>

              <button
                type="submit"
                className="h-11 w-full rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
              >
                {mode === "login" ? "Login" : "Create account"}
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-600">
              {mode === "login" ? "New to Nivara?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() =>
                  setMode((current) =>
                    current === "login" ? "signup" : "login",
                  )
                }
                className="font-semibold text-blue-700 hover:text-blue-800"
              >
                {mode === "login" ? "Create account" : "Login"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
