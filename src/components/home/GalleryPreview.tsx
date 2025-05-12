
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 font-serif">
            作品ギャラリー
          </h2>
          <p className="text-charcoal-light">
            私たちの代表的なレンダリング作品をご覧ください。
            細部まで緻密にこだわり、リアルな質感と光の表現を実現しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="fade-up delay-100">
            <Link to="/gallery" className="block overflow-hidden rounded-md shadow-sm">
              <img 
                src="/images/gallery-1.jpg" 
                alt="リビングルーム レンダリング" 
                className="w-full h-auto image-hover"
              />
            </Link>
          </div>
          <div className="fade-up delay-200">
            <Link to="/gallery" className="block overflow-hidden rounded-md shadow-sm">
              <img 
                src="/images/gallery-2.jpg" 
                alt="キッチン レンダリング" 
                className="w-full h-auto image-hover"
              />
            </Link>
          </div>
          <div className="fade-up delay-300">
            <Link to="/gallery" className="block overflow-hidden rounded-md shadow-sm">
              <img 
                src="/images/japanese-interior-garden-3.jpg" 
                alt="モダン和風 - 光庭" 
                className="w-full h-auto image-hover"
              />
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12 fade-up">
          <Button asChild variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal/5">
            <Link to="/gallery">すべての作品を見る</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
