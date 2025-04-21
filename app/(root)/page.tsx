import { Navbar } from "@/components/navbar";
import { HeaderSlider } from "@/components/home-components/header-slider";
import { HomeProduct } from "@/components/home-components/home-product";
import { FeaturedProduct } from "@/components/featured-product";
import { Banner } from "@/components/home-components/banner";
import { NewsLetter } from "@/components/news-letter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProduct />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>

      <Footer />
    </>
  );
}
