import { products } from "@/lib/productData";
import { ProductCard } from "./product-card";

export default function HomeProduct() {
  return (
    <div className="flex flex-col items-center pt-14">
      <p className="w-full text-left text-2xl font-medium">Popular products</p>

      <div className="mt-6 grid w-full grid-cols-2 flex-col items-center gap-6 pb-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button className="rounded border px-12 py-2.5 text-gray-500/70 transition hover:bg-slate-50/90">
        See more
      </button>
    </div>
  );
}
