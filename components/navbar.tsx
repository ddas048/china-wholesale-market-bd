import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 px-6 py-3 text-gray-700 md:px-16 lg:px-32">
      <Image
        className="w-28 cursor-pointer md:w-32"
        // onClick={() => router.push("/")}
        src="/next.svg"
        width={500}
        height={500}
        alt="logo"
      />
      <div className="flex items-center gap-4 max-md:hidden lg:gap-8">
        <Link href="/" className="transition hover:text-gray-900">
          Home
        </Link>
        <Link href="/all-products" className="transition hover:text-gray-900">
          Shop
        </Link>
        <Link href="/" className="transition hover:text-gray-900">
          About Us
        </Link>
        <Link href="/" className="transition hover:text-gray-900">
          Contact
        </Link>

        {/* {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="rounded-full border px-4 py-1.5 text-xs"
          >
            Seller Dashboard
          </button>
        )} */}
      </div>

      <ul className="hidden items-center gap-4 md:flex">
        <Image
          className="h-4 w-4"
          src="/next.svg"
          width={500}
          height={500}
          alt="search icon"
        />
        <button className="flex items-center gap-2 transition hover:text-gray-900">
          <Image src="/next.svg" width={500} height={500} alt="user icon" />
          Account
        </button>
      </ul>

      <div className="flex items-center gap-3 md:hidden">
        {/* {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="rounded-full border px-4 py-1.5 text-xs"
          >
            Seller Dashboard
          </button>
        )} */}
        <button className="flex items-center gap-2 transition hover:text-gray-900">
          <Image src="/next.svg" width={500} height={500} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
}
