"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";

import { assets } from "@/lib/assets";
import { products } from "@/lib/productData";

type Product = {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: string;
  imgSrc: StaticImageData;
  image: StaticImageData[]; // Array of imported images
  offerPrice: string; // Formatted price as a string
  category: string;
};

export default function ProductPage() {
  const { id } = useParams();

  const [mainImage, setMainImage] = useState<StaticImageData | null>(null);
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const product = JSON.parse(JSON.stringify(products[0]));
    setProductData(product);
  }, []);

  console.log(productData);

  return productData ? (
    <>
      <Navbar />
      <div className="space-y-10 px-6 pt-14 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="mb-4 overflow-hidden rounded-lg bg-gray-500/10">
              <Image
                src={mainImage || productData.image[0]}
                alt="alt"
                className="h-auto w-full object-cover mix-blend-multiply"
                width={1280}
                height={720}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`cursor-pointer overflow-hidden rounded-lg bg-gray-500/10 ${
                    mainImage === image ? "border-1 border-orange-300" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt="alt"
                    className="h-auto w-full object-cover mix-blend-multiply"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="mb-4 text-3xl font-medium text-gray-800/90">
              {productData.name}
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />

                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />

                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />

                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />

                <Image
                  className="h-4 w-4"
                  src={assets.star_dull_icon}
                  alt="star_dull_icon"
                />
              </div>
              <p>(4.5)</p>
            </div>
            <p className="mt-3 text-gray-600">{productData.description}</p>

            <p className="mt-6 text-3xl font-medium">
              ${productData.offerPrice}
              <span className="ml-2 text-base font-normal text-gray-800/60 line-through">
                ${productData.price}
              </span>
            </p>

            <hr className="my-6 bg-gray-600" />

            <div className="overflow-x-auto">
              <table className="w-full max-w-72 table-auto border-collapse">
                <tbody>
                  <tr>
                    <td className="font-medium text-gray-600">Brand</td>
                    <td className="text-gray-800/50">Generic</td>
                  </tr>

                  <tr>
                    <td className="font-medium text-gray-600">Color</td>
                    <td className="text-gray-800/50">Multi</td>
                  </tr>

                  <tr>
                    <td className="font-medium text-gray-600">Category</td>
                    <td className="text-gray-800/50 capitalize">
                      {productData.category}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                // onClick={() => addToCart(productData._id)}
                className="w-full bg-gray-100 py-3.5 text-gray-800/80 transition hover:bg-gray-200"
              >
                Add to Cart
              </button>

              <button
                // onClick={() => {
                //   addToCart(productData._id);
                //   router.push("/cart");
                // }}
                className="w-full bg-orange-500 py-3.5 text-white transition hover:bg-orange-600"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-16 mb-4 flex flex-col items-center">
            <p className="text-3xl font-medium">
              Featured{" "}
              <span className="font-medium text-orange-600">Products</span>
            </p>

            <div className="mt-2 h-0.5 w-28 bg-orange-600"></div>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 gap-6 pb-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.slice(0, 5).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <button className="mb-16 rounded border px-8 py-2 text-gray-500/70 transition hover:bg-slate-50/90">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <p>Loading...</p>
  );
}
