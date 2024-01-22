import NavBar from "@/pages/components/nav/index";
import Slider from "@/pages/components/slider/index";
import Vitrin from "@/pages/components/vitrin/index";
import Link from "@/pages/components/link/index";
import Products from "@/pages/components/products/index";
import Brand from "@/pages/components/brand/index";
import Footer from "@/pages/components/footer/index";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-4">
      <NavBar />
      <Slider />
      <Vitrin />
      <Link />
      <Products />
      <Brand />
      <Footer />
    </main>
  );
}
