import HeroSection from "@/components/hero-section";
import SalesAdvert from "@/components/sales-advert";
import ShopSection from "@/components/ShopSection";
import SlideShow from "@/components/slide-show";
import SustainableSection from "@/components/section";
import Products from "./sales/Products";
import PaginationButton from "@/components/PaginationButton";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <main className="max-lg:hidden">
                <SalesAdvert />
            </main>
            <SlideShow />
            <ShopSection />
        </main>
    );
}
