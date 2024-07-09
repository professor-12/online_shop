import HeroSection from "@/components/hero-section";
import SalesAdvert from "@/components/sales-advert";
import ShopSection from "@/components/ShopSection";
import SlideShow from "@/components/slide-show";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <main className="max-lg:hidden">
                <SalesAdvert />
            </main>
            <SlideShow  />
            <ShopSection />
        </main>
    );
}
