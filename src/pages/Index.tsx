import HeroSection from "@/components/HeroSection";
import GhibliSection from "@/components/GhibliSection";
import PoemsSection from "@/components/PoemsSection";
import PhotoGallery from "@/components/PhotoGallery";
import DreamHomeSection from "@/components/DreamHomeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GhibliSection />
      <PoemsSection />
      <PhotoGallery />
      <DreamHomeSection />
      <Footer />
    </div>
  );
};

export default Index;
