import { assets } from "@/lib/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
  },
];

export function FeaturedProduct() {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="mt-2 h-0.5 w-28 bg-orange-600"></div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:px-14 lg:grid-cols-3 lg:gap-14">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="group relative">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="h-auto w-full object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute bottom-8 left-8 space-y-2 text-white transition duration-300 group-hover:-translate-y-4">
              <p className="text-xl font-medium lg:text-2xl">{title}</p>
              <p className="max-w-60 text-sm leading-5 lg:text-base">
                {description}
              </p>
              <button className="flex items-center gap-1.5 rounded bg-orange-600 px-4 py-2">
                Buy now{" "}
                <Image
                  className="h-3 w-3"
                  src="/assets/redirect_icon.svg"
                  alt="Redirect Icon"
                  width={500}
                  height={500}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
