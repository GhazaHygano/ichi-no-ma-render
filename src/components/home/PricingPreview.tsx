
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingPreview = () => {
  return (
    <section className="bg-stone-light section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 font-serif">
            料金プラン
          </h2>
          <p className="text-charcoal-light">
            お客様のニーズに合わせた料金プランをご用意しております。
            シンプルな単価設定で、予算に合わせてサービスをご利用いただけます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm fade-up">
            <h3 className="text-xl font-medium text-charcoal mb-4">
              スタンダード
            </h3>
            <p className="text-3xl font-medium text-charcoal mb-6">
              ¥25,000<span className="text-sm text-charcoal-light">/1カット</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">高解像度レンダリング (4K)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">2回までの修正対応</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">標準納期 5営業日</span>
              </li>
            </ul>
            <Button asChild className="w-full bg-beige hover:bg-beige-dark text-charcoal">
              <Link to="/pricing">詳細を見る</Link>
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-beige fade-up delay-200">
            <div className="inline-block bg-beige px-3 py-1 rounded-full text-sm font-medium text-charcoal mb-4">
              人気
            </div>
            <h3 className="text-xl font-medium text-charcoal mb-4">
              プレミアム
            </h3>
            <p className="text-3xl font-medium text-charcoal mb-6">
              ¥35,000<span className="text-sm text-charcoal-light">/1カット</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">超高解像度レンダリング (8K)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">無制限の修正対応</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">優先納期 3営業日</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">素材・家具アドバイス</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link to="/pricing">詳細を見る</Link>
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm fade-up delay-300">
            <h3 className="text-xl font-medium text-charcoal mb-4">
              プロジェクト
            </h3>
            <p className="text-3xl font-medium text-charcoal mb-6">
              お問い合わせ
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">複数カット割引</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">大規模プロジェクト対応</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">カスタム納品形式</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-charcoal-light">プロジェクト専属担当者</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full border-charcoal text-charcoal hover:bg-charcoal/5">
              <Link to="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
