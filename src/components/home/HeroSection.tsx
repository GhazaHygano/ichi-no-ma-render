
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-black/50 to-transparent absolute z-10"></div>
        <img 
          src="/images/hero.jpg" 
          alt="高品質3Dインテリアレンダリング" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl fade-up delay-200">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 font-serif">
            一の間<span className="font-light text-2xl md:text-3xl lg:text-4xl ml-3">レンダリング</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            美しい空間を、写真のようなリアルさで表現する
            高品質なCGレンダリングサービス
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-white hover:bg-white/90 text-charcoal text-lg px-8 py-6">
              <Link to="/gallery">作品を見る</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link to="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
