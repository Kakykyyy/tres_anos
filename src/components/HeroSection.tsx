import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [daysUntil, setDaysUntil] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-12-23");
    const today = new Date();
    const difference = targetDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    setDaysUntil(days > 0 ? days : 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "var(--gradient-sky)",
        }}
      />
      
      <div className="absolute top-20 left-10 ghibli-float opacity-60">
        <Heart className="w-12 h-12 text-primary" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 right-16 ghibli-float-delayed opacity-60">
        <Heart className="w-8 h-8 text-secondary" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-24 ghibli-float opacity-50">
        <Heart className="w-6 h-6 text-accent" fill="currentColor" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 fade-in-up">
        <h1 className="font-crimson text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Para Thaina
        </h1>
        <p className="font-quicksand text-2xl md:text-3xl text-foreground/80 mb-8">
          Três anos de amor, sonhos e magia
        </p>
        <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
          <p className="font-crimson text-xl">
            {daysUntil > 0 
              ? `Faltam ${daysUntil} dias para 23 de Dezembro` 
              : "Feliz aniversário de 3 anos, meu amor!"
            }
          </p>
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
