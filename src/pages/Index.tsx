
import Layout from "../components/layout/Layout";
import FeaturedGallery from "../components/FeaturedGallery";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import PricingPreview from "../components/home/PricingPreview";
import CtaSection from "../components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* New Featured Japanese Garden Interior Section */}
      <section className="bg-beige section-padding">
        <div className="container mx-auto">
          <FeaturedGallery />
        </div>
      </section>

      {/* About Section Preview */}
      <AboutPreview />

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* Pricing Preview */}
      <PricingPreview />

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default Index;
