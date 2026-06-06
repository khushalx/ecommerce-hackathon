import { brands, categories } from "@/lib/products";

export type Filters = {
  category: string;
  brands: string[];
  price: string;
  rating: number;
};

type FilterSidebarProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

const priceOptions = [
  { label: "All prices", value: "all" },
  { label: "Under ₹1,000", value: "under-1000" },
  { label: "₹1,000 - ₹2,500", value: "1000-2500" },
  { label: "₹2,500 - ₹10,000", value: "2500-10000" },
  { label: "Above ₹10,000", value: "above-10000" },
];

export function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  function toggleBrand(brand: string) {
    const selected = filters.brands.includes(brand)
      ? filters.brands.filter((item) => item !== brand)
      : [...filters.brands, brand];
    onChange({ ...filters, brands: selected });
  }

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-slate-950">Filters</h2>
        <button
          type="button"
          onClick={() =>
            onChange({ category: "All", brands: [], price: "all", rating: 0 })
          }
          className="text-xs font-bold text-blue-700 hover:text-blue-800"
        >
          Clear all
        </button>
      </div>

      <fieldset className="mt-6 border-t border-slate-200 pt-5">
        <legend className="mb-3 text-sm font-bold text-slate-900">Category</legend>
        <div className="space-y-2.5">
          {["All", ...categories].map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700"
            >
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => onChange({ ...filters, category })}
                className="size-4 accent-blue-600"
              />
              {category}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6 border-t border-slate-200 pt-5">
        <legend className="mb-3 text-sm font-bold text-slate-900">Price</legend>
        <div className="space-y-2.5">
          {priceOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700"
            >
              <input
                type="radio"
                name="price"
                checked={filters.price === option.value}
                onChange={() =>
                  onChange({ ...filters, price: option.value })
                }
                className="size-4 accent-blue-600"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6 border-t border-slate-200 pt-5">
        <legend className="mb-3 text-sm font-bold text-slate-900">Rating</legend>
        <div className="space-y-2.5">
          {[4, 3, 0].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700"
            >
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => onChange({ ...filters, rating })}
                className="size-4 accent-blue-600"
              />
              {rating === 0 ? "All ratings" : `${rating}★ & above`}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6 border-t border-slate-200 pt-5">
        <legend className="mb-3 text-sm font-bold text-slate-900">Brand</legend>
        <div className="max-h-48 space-y-2.5 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="size-4 rounded accent-blue-600"
              />
              {brand}
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
