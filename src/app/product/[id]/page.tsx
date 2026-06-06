import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { productById, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productById(id);

  return {
    title: product?.title ?? "Product",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = productById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ProductDetail product={product} />
    </div>
  );
}
