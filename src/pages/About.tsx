
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-beige pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h1 className="text-4xl md:text-5xl font-medium text-charcoal mb-6 font-serif">
              会社概要
            </h1>
            <p className="text-xl text-charcoal-light">
              フォトリアルな3Dインテリアレンダリングで
              空間の可能性を最大限に引き出します
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="text-3xl font-medium text-charcoal mb-6 font-serif">
                私たちの想い
              </h2>
              <p className="text-charcoal-light mb-4">
                一の間レンダリングは、2025年に建築家のanonymと3DCGアーティストのanonym2によって設立されました。日本の伝統的な美意識と最新のCG技術を融合させ、空間デザインの新しい可能性を追求することを目指しています。
              </p>
              <p className="text-charcoal-light mb-4">
                「一の間」という名前には、最上級の空間表現を追求するという私たちの決意が込められています。一つ一つの空間を大切に、細部までこだわり抜いたビジュアルを提供することで、建築家やデザイナーの創造性をサポートし、クライアントとのコミュニケーションを円滑にすることが私たちの使命です。
              </p>
              <p className="text-charcoal-light">
                私たちは常に技術革新を追求し、よりリアルで美しいレンダリングを実現するために日々研鑽を重ねています。
              </p>
            </div>
            <div className="fade-up delay-200">
              <img 
                src="/images/img/abt/1.jpg" 
                alt="一の間 ストーリー" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="bg-stone-light section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 font-serif">
              制作プロセス
            </h2>
            <p className="text-charcoal-light">
              一の間レンダリングでは、厳格な工程管理とクリエイティブな発想で
              高品質なレンダリングを実現しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-100">
              <div className="text-2xl font-medium text-charcoal mb-4">01</div>
              <h3 className="text-xl font-medium text-charcoal mb-4">ヒアリング</h3>
              <p className="text-charcoal-light">
                お客様のビジョンや要望を詳細にヒアリングし、プロジェクトの目的と
                ゴールを明確にします。必要な素材や参考資料をご提供いただきます。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-200">
              <div className="text-2xl font-medium text-charcoal mb-4">02</div>
              <h3 className="text-xl font-medium text-charcoal mb-4">3Dモデリング</h3>
              <p className="text-charcoal-light">
                ご提供いただいた設計データや仕様をもとに、空間の正確な3Dモデルを
                作成します。細部まで忠実に再現し、空間の正確性を確保します。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-300">
              <div className="text-2xl font-medium text-charcoal mb-4">03</div>
              <h3 className="text-xl font-medium text-charcoal mb-4">マテリアル・ライティング</h3>
              <p className="text-charcoal-light">
                素材や質感、光の表現にこだわり、リアルな空間表現を実現します。
                自然光や人工照明の設定により、空間の雰囲気を最適化します。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-400">
              <div className="text-2xl font-medium text-charcoal mb-4">04</div>
              <h3 className="text-xl font-medium text-charcoal mb-4">レンダリング・仕上げ</h3>
              <p className="text-charcoal-light">
                高性能レンダリングエンジンを使用して画像を生成し、ポストプロダクションで
                さらに仕上げを行います。修正対応を経て最終納品いたします。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 font-serif">
              私たちのチーム
            </h2>
            <p className="text-charcoal-light">
              一の間レンダリングは、建築とCGの専門家による
              少数精鋭のチームで構成されています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-up delay-100">
              <div className="mb-6">
                <img 
                  src="/images/img/abt/ghz.jpeg" 
                  alt="anonym - 創業者" 
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-charcoal mb-2">anonym</h3>
              <p className="text-charcoal-light mb-4">創業者 / 建築家</p>
              <p className="text-sm text-charcoal-light max-w-xs mx-auto">
                複数の受賞歴を持つ建築家。空間デザインの専門知識を活かし、
                技術的正確性と美的感覚の両立を追求しています。
              </p>
            </div>
            
            <div className="text-center fade-up delay-200">
              <div className="mb-6">
                <img 
                  src="/images/img/abt/ghz.jpeg" 
                  alt="anonym2 - クリエイティブディレクター" 
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-charcoal mb-2">anonym2</h3>
              <p className="text-charcoal-light mb-4">クリエイティブディレクター</p>
              <p className="text-sm text-charcoal-light max-w-xs mx-auto">
                15年以上のCG制作経験を持つアーティスト。映画業界での経験を活かし、
                写実的かつ芸術的なビジュアル表現を得意としています。
              </p>
            </div>
            
            <div className="text-center fade-up delay-300">
              <div className="mb-6">
                <img 
                  src="/images/img/abt/ghz.jpeg" 
                  alt="anonym3 - テクニカルアーティスト" 
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-charcoal mb-2">anonym3</h3>
              <p className="text-charcoal-light mb-4">テクニカルアーティスト</p>
              <p className="text-sm text-charcoal-light max-w-xs mx-auto">
                先進的なレンダリング技術の専門家。最新のCGテクノロジーを駆使し、
                効率的かつ高品質な制作ワークフローを確立しています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
