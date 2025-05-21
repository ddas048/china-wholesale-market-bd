import { assets } from "@/lib/assets";
import Image from "next/image";

export function Banner() {
  return (
    <div className="my-16 flex flex-col items-center justify-between overflow-hidden rounded-xl bg-[#E6E9F2] py-14 md:flex-row md:py-0 md:pl-20">
      <Image
        className="max-w-56"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />

      <div className="flex flex-col items-center justify-center space-y-2 px-4 text-center md:px-0">
        <h2 className="max-w-[290px] text-2xl font-semibold md:text-3xl">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button className="group flex cursor-pointer items-center justify-center gap-1 rounded bg-orange-600 px-12 py-2.5 text-white">
          Buy now
          <Image
            className="transition group-hover:translate-x-1"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>

      <Image
        className="hidden max-w-80 md:block"
        src={assets.md_controller_image}
        alt="md_controller_image"
      />

      <Image
        className="md:hidden"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
}
