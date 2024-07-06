import HeroSection from "@/components/hero-section";
import SalesAdvert from "@/components/sales-advert";
import ShopSection from "@/components/ShopSection";
import SlideShow from "@/components/slide-show";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <SalesAdvert />
            <SlideShow />
            <ShopSection />
        </main>
    );
}
