import Banner from "@/components/banner";
import FeaturedProduct from "@/components/featured-product";
import Footer from "@/components/footer";
import { HeaderSlider } from "@/components/header-slider";
import HomeProduct from "@/components/home-product";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/news-letter";

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
