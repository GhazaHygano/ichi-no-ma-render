
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Featured gallery items showcasing Japanese interior gardens
const featuredItems = [
  {
    id: 10,
    title: "和モダン - 室内坪庭",
    description: "伝統的な日本の美学と現代的なデザインが融合した室内坪庭。",
    image: "/images/japanese-interior-garden-1.jpg",
  },
  {
    id: 11,
    title: "禅スタイル リビング",
    description: "禅の美学を取り入れたミニマルなリビング空間。小さな枯山水が室内に静寂をもたらします。",
    image: "/images/japanese-interior-garden-2.jpg",
  },
  {
    id: 13,
    title: "茶室インスピレーション",
    description: "現代的な解釈の茶室空間。伝統的な要素とミニ庭園を取り入れた落ち着きのある和モダン設計。",
    image: "/images/japanese-interior-garden-4.jpg",
  },
  {
    id: 14,
    title: "和風ベッドルーム - 水景",
    description: "小さな水景を取り入れた和風ベッドルーム。水の音と緑が心地よい睡眠環境を創出します。",
    image: "/images/japanese-interior-garden-5.jpg",
  },
];

const FeaturedGallery = () => {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-12 fade-up">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-6 font-serif">
          特集：和のインテリアガーデン
        </h2>
        <p className="text-charcoal-light">
          日本の伝統美と現代デザインが融合した、室内ミニ庭園のレンダリング作品をご紹介します。
          空間に調和と癒しをもたらす和のエッセンスを表現しています。
        </p>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto px-4"
      >
        <CarouselContent>
          {featuredItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Link to="/gallery">
                <Card className="border-none">
                  <CardContent className="p-0">
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
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedGallery;
