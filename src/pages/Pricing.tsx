
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-beige pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h1 className="text-4xl md:text-5xl font-medium text-charcoal mb-6 font-serif">
              料金案内
            </h1>
            <p className="text-xl text-charcoal-light">
              透明性のある明確な料金プランで
              お客様のニーズに合わせたサービスをご提供します
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-stone fade-up delay-100">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                スタンダード
              </h2>
              <p className="text-4xl font-medium text-charcoal mb-2">
                ¥25,000
              </p>
              <p className="text-charcoal-light mb-6">1カットあたり</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">高解像度レンダリング (4K)</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">2回までの修正対応</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">標準納期 5営業日</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">JPEGおよびPNG形式での納品</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">メールサポート</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-beige hover:bg-beige-dark text-charcoal">
                <Link to="/contact">お問い合わせ</Link>
              </Button>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-beige-dark relative fade-up delay-200">
              <div className="absolute top-0 right-0 bg-beige-dark text-charcoal py-1 px-4 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                おすすめ
              </div>
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                プレミアム
              </h2>
              <p className="text-4xl font-medium text-charcoal mb-2">
                ¥35,000
              </p>
              <p className="text-charcoal-light mb-6">1カットあたり</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">超高解像度レンダリング (8K)</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">無制限の修正対応</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">優先納期 3営業日</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">素材・家具アドバイス</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">複数フォーマット (JPEG、PNG、TIFF)</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">電話サポート</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/contact">お問い合わせ</Link>
              </Button>
            </div>
            
            {/* Custom Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-stone fade-up delay-300">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                プロジェクト
              </h2>
              <p className="text-4xl font-medium text-charcoal mb-2">
                要相談
              </p>
              <p className="text-charcoal-light mb-6">プロジェクト単位</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">複数カット割引</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">大規模プロジェクト対応</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">カスタム納品形式</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">プロジェクト専属担当者</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">オンライン進捗共有</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-charcoal-light">優先サポート</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-charcoal text-charcoal hover:bg-charcoal/5">
                <Link to="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="bg-stone-light section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
            <h2 className="text-3xl font-medium text-charcoal mb-6 font-serif">
              オプションサービス
            </h2>
            <p className="text-charcoal-light">
              基本プランに追加できるオプションサービスをご用意しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-100">
              <h3 className="text-xl font-medium text-charcoal mb-4">
                バリエーション作成
              </h3>
              <p className="text-charcoal-light mb-2">
                同一アングルで異なるスタイルや時間帯の表現を追加できます。
              </p>
              <p className="text-lg font-medium text-charcoal">
                ¥10,000 / バリエーション
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-150">
              <h3 className="text-xl font-medium text-charcoal mb-4">
                急ぎ対応
              </h3>
              <p className="text-charcoal-light mb-2">
                通常納期よりも短縮した特急対応が可能です。
              </p>
              <p className="text-lg font-medium text-charcoal">
                +50% (48時間以内納品)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-200">
              <h3 className="text-xl font-medium text-charcoal mb-4">
                360°パノラマ
              </h3>
              <p className="text-charcoal-light mb-2">
                空間を360°見渡せるインタラクティブなパノラマ画像を作成します。
              </p>
              <p className="text-lg font-medium text-charcoal">
                ¥40,000 / 1シーン
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm fade-up delay-250">
              <h3 className="text-xl font-medium text-charcoal mb-4">
                家具・素材選定
              </h3>
              <p className="text-charcoal-light mb-2">
                空間に最適な家具や素材の選定をプロが提案します。
              </p>
              <p className="text-lg font-medium text-charcoal">
                ¥15,000 / プロジェクト
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
            <h2 className="text-3xl font-medium text-charcoal mb-6 font-serif">
              よくあるご質問
            </h2>
            <p className="text-charcoal-light">
              お客様からよく寄せられるご質問とその回答をまとめました
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="fade-up delay-100">
              <h3 className="text-lg font-medium text-charcoal mb-3">
                納品までにどのくらいの時間がかかりますか？
              </h3>
              <p className="text-charcoal-light">
                スタンダードプランは5営業日、プレミアムプランは3営業日での納品が標準です。
                急ぎ対応オプションを追加いただくと、最短48時間での納品も可能です。
              </p>
            </div>
            
            <div className="fade-up delay-150">
              <h3 className="text-lg font-medium text-charcoal mb-3">
                修正は何回まで対応していただけますか？
              </h3>
              <p className="text-charcoal-light">
                スタンダードプランでは2回まで、プレミアムプランでは回数無制限で修正対応が含まれています。
                プロジェクトプランも無制限の修正に対応しています。
              </p>
            </div>
            
            <div className="fade-up delay-200">
              <h3 className="text-lg font-medium text-charcoal mb-3">
                納品形式はどのようなものになりますか？
              </h3>
              <p className="text-charcoal-light">
                標準ではJPEGおよびPNG形式での納品となります。プレミアムプランではTIFF形式も含まれます。
                その他の形式が必要な場合は、お問い合わせください。
              </p>
            </div>
            
            <div className="fade-up delay-250">
              <h3 className="text-lg font-medium text-charcoal mb-3">
                必要な資料は何ですか？
              </h3>
              <p className="text-charcoal-light">
                基本的には平面図、立面図、素材情報が必要です。3Dモデルがある場合はご提供いただくと
                より正確な再現が可能です。詳細は個別にご案内いたします。
              </p>
            </div>
            
            <div className="fade-up delay-300">
              <h3 className="text-lg font-medium text-charcoal mb-3">
                複数カットの割引はありますか？
              </h3>
              <p className="text-charcoal-light">
                はい、5カット以上のご注文で10%割引、10カット以上で15%割引をご提供しています。
                大規模プロジェクトの場合は、個別にお見積りいたします。
              </p>
            </div>
            
            <div className="fade-up delay-350">
              <h3 className="text-lg font-medium text-charcoal mb-3">
                お支払い方法を教えてください。
              </h3>
              <p className="text-charcoal-light">
                銀行振込または各種クレジットカードでのお支払いに対応しています。
                プロジェクトの規模によっては、着手時50%・納品時50%の分割払いも可能です。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-beige section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto fade-up">
            <h2 className="text-3xl font-medium text-charcoal mb-6 font-serif">
              お問い合わせ
            </h2>
            <p className="text-charcoal-light mb-8">
              料金やサービスについてのご質問がございましたら、
              お気軽にお問い合わせください。
              プロジェクトに最適なプランをご提案いたします。
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/contact">お問い合わせフォームへ</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
