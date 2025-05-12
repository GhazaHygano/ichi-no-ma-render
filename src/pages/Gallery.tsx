
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery categories and images
const categories = [
  { id: "all", name: "すべて" },
  { id: "living", name: "リビング" },
  { id: "kitchen", name: "キッチン" },
  { id: "bedroom", name: "ベッドルーム" },
  { id: "bathroom", name: "バスルーム" },
  { id: "office", name: "オフィス" },
  { id: "garden", name: "和庭" }, // Added Japanese garden category
];

const galleryItems = [
  {
    id: 1,
    title: "モダンリビング - 自然光",
    description: "自然光を活かした開放的なリビングルームのレンダリング。大きな窓からの光が空間全体を明るく照らしています。",
    category: "living",
    image: "/images/img/gal/1.jpg",
  },
  {
    id: 2,
    title: "コンテンポラリーキッチン",
    description: "洗練されたデザインのアイランドキッチン。高級感のある素材と最新の設備を備えています。",
    category: "kitchen",
    image: "/images/img/gal/2.jpg",
  },
  {
    id: 3,
    title: "和モダン ベッドルーム",
    description: "日本の伝統的な美学と現代的な快適さを融合させたベッドルーム空間です。",
    category: "bedroom",
    image: "/images/img/gal/3.jpg",
  },
  {
    id: 4,
    title: "ラグジュアリーバスルーム",
    description: "高級ホテルのようなリラックス感あふれるバスルーム。大理石の質感と間接照明がエレガントな雰囲気を演出しています。",
    category: "bathroom",
    image: "/images/img/gal/4.jpg",
  },
  {
    id: 5,
    title: "北欧スタイル リビング",
    description: "シンプルで温かみのある北欧デザインのリビングルーム。木材の質感と自然素材が調和した空間です。",
    category: "living",
    image: "/images/img/gal/5.jpg",
  },
  {
    id: 6,
    title: "ミニマルオフィススペース",
    description: "無駄を省いた機能的なホームオフィス空間。集中力を高める洗練されたデザインになっています。",
    category: "office",
    image: "/images/img/gal/6.jpg",
  },
  {
    id: 7,
    title: "アイランドキッチン - 夜間照明",
    description: "夜間の照明設定で撮影されたオープンプランのキッチン空間。温かみのある照明が料理空間を演出しています。",
    category: "kitchen",
    image: "/images/img/gal/7.jpg",
  },
  {
    id: 8,
    title: "コンテンポラリーベッドルーム",
    description: "現代的なデザインと落ち着いた色調のベッドルーム。快適な睡眠環境を追求した空間設計です。",
    category: "bedroom",
    image: "/images/img/gal/8.jpg",
  },
  {
    id: 9,
    title: "クリエイティブオフィス",
    description: "創造性を刺激するオープンなオフィス空間。チームワークとコミュニケーションを促進するデザインです。",
    category: "office",
    image: "/images/img/gal/9.jpg",
  },
  // Adding new Japanese garden-themed interior images
  {
    id: 10,
    title: "和モダン - 室内坪庭",
    description: "伝統的な日本の美学と現代的なデザインが融合した室内坪庭。石、苔、水の要素が調和した癒しの空間です。",
    category: "garden",
    image: "/images/img/gal/10.jpg",
  },
  {
    id: 11,
    title: "禅スタイル リビング",
    description: "禅の美学を取り入れたミニマルなリビング空間。小さな枯山水が室内に静寂と落ち着きをもたらします。",
    category: "garden",
    image: "/images/img/gal/11.jpg",
  },
  {
    id: 12,
    title: "モダン和風 - 光庭",
    description: "現代的な和のデザインに光庭を取り入れたリビング。自然光と植栽が調和した開放的な空間になっています。",
    category: "living",
    image: "/images/img/gal/12.jpg",
  },
  {
    id: 13,
    title: "茶室インスピレーション",
    description: "現代的な解釈の茶室空間。伝統的な要素とミニ庭園を取り入れた落ち着きのある和モダン設計です。",
    category: "garden",
    image: "/images/img/gal/13.jpg",
  },
  {
    id: 14,
    title: "和風ベッドルーム - 水景",
    description: "小さな水景を取り入れた和風ベッドルーム。水の音と緑が心地よい睡眠環境を創出します。",
    category: "bedroom",
    image: "/images/img/gal/14.jpg",
  },
  {
    id: 15,
    title: "モダンオフィス - 苔庭",
    description: "集中力を高める苔庭を取り入れたモダンなオフィス空間。自然との調和がクリエイティブな思考を促進します。",
    category: "office",
    image: "/images/img/gal/15.jpg",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-beige pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h1 className="text-4xl md:text-5xl font-medium text-charcoal mb-6 font-serif">
              ギャラリー
            </h1>
            <p className="text-xl text-charcoal-light">
              私たちが手がけた高品質3Dレンダリング作品をご覧ください
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Filter */}
      <section className="py-8 border-b border-stone">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex space-x-6 min-w-max px-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`py-2 px-4 font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? "text-charcoal border-b-2 border-charcoal" 
                      : "text-charcoal-light hover:text-charcoal"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="fade-up cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="overflow-hidden rounded-md shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover image-hover"
                  />
                </div>
                <h3 className="text-lg font-medium text-charcoal mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl bg-white p-0 border-none">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-stone-light">
              <img 
                src={selectedImage?.image} 
                alt={selectedImage?.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                {selectedImage?.title}
              </h2>
              <p className="text-charcoal-light mb-6">
                {selectedImage?.description}
              </p>
              <div className="mt-auto">
                <div className="text-sm text-charcoal-light">
                  <span className="font-medium">カテゴリー:</span> {
                    categories.find(cat => cat.id === selectedImage?.category)?.name
                  }
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
