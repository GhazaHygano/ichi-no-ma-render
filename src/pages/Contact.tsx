
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "お問い合わせありがとうございます",
        description: "担当者から2営業日以内にご連絡いたします。",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-beige pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h1 className="text-4xl md:text-5xl font-medium text-charcoal mb-6 font-serif">
              お問い合わせ
            </h1>
            <p className="text-xl text-charcoal-light">
              プロジェクトについてのご相談やお見積りのご依頼など、
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="fade-up">
              <h2 className="text-2xl font-medium text-charcoal mb-6 font-serif">
                メッセージを送る
              </h2>
              <p className="text-charcoal-light mb-8">
                以下のフォームに必要事項をご入力の上、送信してください。
                担当者より2営業日以内にご連絡いたします。
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-stone-light border-stone focus:border-charcoal"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-stone-light border-stone focus:border-charcoal"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      電話番号
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-stone-light border-stone focus:border-charcoal"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                      会社名
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-stone-light border-stone focus:border-charcoal"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-stone-light border-stone focus:border-charcoal"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-32 bg-stone-light border-stone focus:border-charcoal"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-6"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </Button>
              </form>
            </div>
            
            <div className="fade-up delay-200">
              <div className="bg-beige p-8 rounded-lg">
                <h2 className="text-2xl font-medium text-charcoal mb-6 font-serif">
                  お問い合わせ先
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">住所</h3>
                    <p className="text-charcoal-light">
                      〒106-0032<br />
                      東京都港区六本木1-1-1<br />
                      デザインビル 5階
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">電話番号</h3>
                    <p className="text-charcoal-light">
                      03-1234-5678<br />
                      （平日 10:00～18:00）
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">メールアドレス</h3>
                    <p className="text-charcoal-light">
                      info@ichinoma-render.jp
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-charcoal mb-4">アクセス</h3>
                  <div className="rounded-md overflow-hidden h-64 shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7268631!3d35.6663996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z5YWt5pys5pyo!5e0!3m2!1sja!2sjp!4v1651234567890!5m2!1sja!2sjp" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ CTA */}
      <section className="bg-stone-light section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto fade-up">
            <h2 className="text-2xl font-medium text-charcoal mb-6 font-serif">
              よくあるご質問
            </h2>
            <p className="text-charcoal-light mb-8">
              サービスや料金についてのよくある質問は、
              料金ページのFAQセクションをご確認ください。
            </p>
            <Button asChild variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal/5">
              <Link to="/pricing#faq">FAQを見る</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
