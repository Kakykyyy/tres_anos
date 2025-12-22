import HeroSection from "@/components/HeroSection";
import AnniversaryCounter from "@/components/AnniversaryCounter";
import GhibliSection from "@/components/GhibliSection";
import PoemsSection from "@/components/PoemsSection";
import PhotoGallery from "@/components/PhotoGallery";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import DreamHomeSection from "@/components/DreamHomeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AnniversaryCounter />
      <GhibliSection />
      <PoemsSection />
      <PhotoGallery />
      <SpotifyPlayer />
      <DreamHomeSection />
      <Footer />
    </div>
  );
};

export default Index;
