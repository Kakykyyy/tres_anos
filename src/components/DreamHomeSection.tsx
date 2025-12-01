import { Home, Trees, Waves, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import dreamHomeImage from "@/assets/dream-home.jpg";

const DreamHomeSection = () => {
  const features = [
    {
      icon: Trees,
      title: "Dois Ipês na Entrada",
      description: "Um ipê amarelo e um branco dando as boas-vindas ao nosso lar",
      color: "text-golden-yellow"
    },
    {
      icon: Home,
      title: "Dois Jardins Encantadores",
      description: "Espaços verdes para cultivarmos flores e memórias",
      color: "text-primary"
    },
    {
      icon: Waves,
      title: "Riacho com Carpas",
      description: "Um riacho sereno com carpas coloridas fluindo pela entrada",
      color: "text-lavender"
    },
    {
      icon: ArrowRight,
      title: "Ponte para a Porta",
      description: "Uma charmosa ponte de madeira que nos leva para casa",
      color: "text-secondary"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: "var(--gradient-nature)",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Home className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-crimson text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Nosso Futuro Juntos
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground">
            A casa dos nossos sonhos onde construiremos nossa vida
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
          <img 
            src={dreamHomeImage}
            alt="Nossa casa dos sonhos"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/90 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-background ${feature.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-crimson text-2xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-quicksand text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-2 border-primary/30">
            <p className="font-crimson text-2xl text-foreground mb-4">
              Cada detalhe deste sonho tem você
            </p>
            <p className="font-quicksand text-lg text-muted-foreground">
              Mal posso esperar para construirmos juntos este pedacinho de paraíso,
              onde cada manhã começará com seu sorriso e cada noite terminará em seus braços.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DreamHomeSection;
