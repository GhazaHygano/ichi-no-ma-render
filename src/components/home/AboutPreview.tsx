
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 font-serif">
              一の間について
            </h2>
            <p className="text-charcoal-light mb-6">
              一の間レンダリングは、建築およびインテリアデザイン業界向けに
              フォトリアルな3DCGレンダリングを提供している専門スタジオです。
              私たちは最先端のレンダリング技術を活用し、日本の美意識と
              現代的なデザインを融合させた高品質なビジュアルを実現します。
            </p>
            <Button asChild variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal/5">
              <Link to="/about">詳しく見る</Link>
            </Button>
          </div>
          <div className="fade-up delay-300">
            <img 
              src="/images/about-preview.jpg" 
              alt="一の間 スタジオ" 
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
