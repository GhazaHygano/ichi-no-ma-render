
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-black/50 to-transparent absolute z-10"></div>
          <img 
            src="/img/lp/1.jpg" 
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

      {/* About Section Preview */}
      <section className="bg-beige section-padding">
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
                src="/img/lp/1.jpg" 
                alt="一の間 スタジオ" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
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
                  src="/images/gallery-3.jpg" 
                  alt="ベッドルーム レンダリング" 
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

      {/* Pricing Preview */}
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

      {/* CTA Section */}
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
    </Layout>
  );
};

export default Index;
