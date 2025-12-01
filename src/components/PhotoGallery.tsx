import { ImagePlus, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  // Placeholder for photos - user can add their own photos later
  const photoSlots = [
    { id: 1, caption: "Nosso primeiro encontro", src: "/src/assets/1.jpeg" },
    { id: 2, caption: "Aquele dia especial", src: "/src/assets/2.jpeg" },
    { id: 3, caption: "Momentos de alegria" , src: "/src/assets/3.jpeg" },
    { id: 4, caption: "Aventuras juntos" },
    { id: 5, caption: "Sorrisos compartilhados" },
    { id: 6, caption: "Memórias eternas" }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-muted/30">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" fill="currentColor" />
          <h2 className="font-crimson text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Nossas Memórias
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground mb-4">
            Cada foto conta uma história do nosso amor
          </p>
          <p className="font-quicksand text-sm text-muted-foreground italic">
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {photoSlots.map((slot, index) => (
            <Card 
              key={slot.id}
              className="group relative overflow-hidden bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-light-purple/20 to-soft-yellow/20">
                <ImagePlus className="w-16 h-16 text-primary/40 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-quicksand text-center text-foreground/70 font-medium">
                  {slot.caption}
                </p>
                <p className="font-quicksand text-xs text-muted-foreground mt-2 text-center">
                  Clique para adicionar sua foto
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card/80 backdrop-blur-sm border-2 border-secondary/30">
            <p className="font-crimson text-lg text-foreground/80 italic">
              "Cada momento ao seu lado é uma fotografia que guardo no coração"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
