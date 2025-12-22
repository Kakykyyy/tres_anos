import { ImagePlus, Heart, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import img1 from "@/assets/Primeiro encontro.jpeg";
import img2 from "@/assets/Ibiuna2.jpeg";
import img3 from "@/assets/1.jpeg";
import img4 from "@/assets/Casamento.jpeg";
import img5 from "@/assets/outbeque.jpeg";
import img6 from "@/assets/primeiro_natal.jpeg";
import { useState } from "react";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  // Placeholder for photos - user can add their own photos later
  const photoSlots = [
    { id: 1, caption: "Nosso primeiro encontro", src: img1 },
    { id: 2, caption: "Aquele dia especial", src: img4 },
    { id: 3, caption: "Momentos de alegria" , src: img3 },
    { id: 4, caption: "Aventuras juntos" , src: img2 },
    { id: 5, caption: "Sorrisos compartilhados", src: img6 },
    { id: 6, caption: "Memórias eternas", src: img5 }
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
              className="group relative overflow-hidden bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 aspect-square cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => slot.src && setSelectedPhoto(slot.id)}
            >
              {slot.src ? (
                <>
                  <img src={slot.src} alt={slot.caption} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent text-white text-center">
                    <p className="font-quicksand font-medium">{slot.caption}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-quicksand text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Clique para ampliar</span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-light-purple/20 to-soft-yellow/20">
                  <ImagePlus className="w-16 h-16 text-primary/40 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-quicksand text-center text-foreground/70 font-medium">
                    {slot.caption}
                  </p>
                  <p className="font-quicksand text-xs text-muted-foreground mt-2 text-center">
                    Clique para adicionar sua foto
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative bg-card rounded-lg overflow-hidden max-w-4xl max-h-[90vh] w-full animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {photoSlots.find(p => p.id === selectedPhoto)?.src && (
                <img 
                  src={photoSlots.find(p => p.id === selectedPhoto)?.src}
                  alt={photoSlots.find(p => p.id === selectedPhoto)?.caption}
                  className="w-full h-full object-contain"
                />
              )}
              
              <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 cursor-pointer hover:bg-black/70 transition-colors" onClick={() => setSelectedPhoto(null)}>
                <X className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-crimson text-2xl font-bold">{photoSlots.find(p => p.id === selectedPhoto)?.caption}</p>
              </div>
            </div>
          </div>
        )}

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
