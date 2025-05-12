
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="bg-beige rounded-lg p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto fade-up">
          <h2 className="text-2xl md:text-3xl font-medium text-charcoal mb-6 font-serif">
            あなたのプロジェクトを一緒に実現しませんか？
          </h2>
          <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
            一の間レンダリングでは、お客様のビジョンを最高品質のビジュアルで表現いたします。
            詳細について、お気軽にお問い合わせください。
          </p>
          <Button asChild className="px-8 py-6 text-lg">
            <Link to="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
