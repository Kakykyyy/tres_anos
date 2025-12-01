import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const GhibliSection = () => {
  const ghibliQuotes = [
    {
      quote: "Sempre acredite em si mesmo. Faça isso e não importa onde você está, você não terá nada a temer.",
      movie: "O Reino dos Gatos",
      relevance: "Como você, que sempre me inspira a ser mais forte."
    },
    {
      quote: "O amor é a força mais poderosa do mundo, e quando está no meio de algo que você não pode entender, sempre faz mais sentido.",
      movie: "O Castelo Animado",
      relevance: "Nosso amor transcende qualquer explicação."
    },
    {
      quote: "Os anos passarão, mas nossas memórias permanecerão.",
      movie: "A Viagem de Chihiro",
      relevance: "Como cada momento ao seu lado permanece gravado em meu coração."
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "var(--gradient-nature)",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-crimson text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Nosso Ghibli
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground">
            Como os filmes que amamos, nossa história é mágica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ghibliQuotes.map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <p className="font-crimson text-lg italic text-foreground/90">
                  "{item.quote}"
                </p>
                <p className="font-quicksand text-sm font-semibold text-primary">
                  — {item.movie}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="font-quicksand text-sm text-muted-foreground">
                  {item.relevance}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GhibliSection;
