
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-xl font-medium font-serif text-charcoal">一の間</h2>
            </Link>
            <p className="text-sm text-charcoal-light mb-4">
              高品質な3Dインテリアレンダリングサービスを提供しております。
              お客様の理想の空間を美しいビジュアルで表現します。
            </p>
            <p className="text-sm text-charcoal-light">
              〒106-0032<br />
              東京都港区六本木1-1-1<br />
              デザインビル 5階
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-charcoal">メニュー</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-charcoal-light hover:text-charcoal transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-charcoal-light hover:text-charcoal transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-charcoal-light hover:text-charcoal transition-colors">
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-charcoal-light hover:text-charcoal transition-colors">
                  料金案内
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-light hover:text-charcoal transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-charcoal">お問い合わせ</h3>
            <p className="text-sm text-charcoal-light mb-4">
              お問い合わせやご相談は、以下の連絡先までお気軽にご連絡ください。
            </p>
            <p className="text-sm text-charcoal-light mb-2">
              <span className="font-medium">メール:</span> info@ichinoma-render.jp
            </p>
            <p className="text-sm text-charcoal-light">
              <span className="font-medium">電話:</span> 03-1234-5678
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-dark text-center">
          <p className="text-sm text-charcoal-light">
            &copy; {new Date().getFullYear()} 一の間 レンダリング. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
