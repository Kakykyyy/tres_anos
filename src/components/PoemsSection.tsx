import { Heart, BookHeart } from "lucide-react";
import { Card } from "@/components/ui/card";

const PoemsSection = () => {
  const poems = [
    {
      title: "Três Anos de Nós",
      verses: [
        "Três anos se passaram como um sopro suave,",
        "Cada dia ao seu lado é uma dádiva, uma chave",
        "Que abre as portas do meu coração sem fim,",
        "Thaina, você é tudo que sempre quis para mim.",
        "",
        "Como as flores que dançam ao vento de verão,",
        "Nosso amor floresce com pura devoção,",
        "Em cada sorriso seu, encontro meu lar,",
        "Em cada abraço, a certeza de que vou te amar."
      ]
    },
    {
      title: "Sonhos Compartilhados",
      verses: [
        "Sonho com o dia em que teremos nosso jardim,",
        "Dois ipês na entrada, amarelo e roxo assim,",
        "Carpas nadando no riacho cristalino,",
        "Uma ponte levando a nosso destino.",
        "",
        "Cada detalhe desse sonho tem você,",
        "Cada manhã imaginada ao amanhecer,",
        "Com você, meu amor, tudo faz sentido,",
        "Você é meu presente, passado e futuro querido."
      ]
    },
    {
      title: "Para Sempre Thaina",
      verses: [
        "Se o amor fosse medido em estrelas no céu,",
        "Ainda seria pouco para expressar o que sinto, Thaina, é fiel",
        "Este sentimento que cresce a cada dia mais,",
        "Como as ondas do mar que nunca voltam atrás.",
        "",
        "Você é minha lua que ilumina a escuridão,",
        "Meu sol que aquece meu coração,",
        "Hoje celebramos três anos de pura magia,",
        "E eu prometo amar você todos os dias da minha vida."
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "var(--gradient-romantic)",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <BookHeart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-crimson text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Versos do Coração
          </h2>
          <p className="font-quicksand text-xl text-muted-foreground">
            Palavras que tentam expressar o inexprimível
          </p>
        </div>

        <div className="space-y-12">
          {poems.map((poem, index) => (
            <Card 
              key={index}
              className="p-10 bg-card/90 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                <h3 className="font-crimson text-3xl font-bold text-foreground">
                  {poem.title}
                </h3>
              </div>
              <div className="space-y-2 font-quicksand text-lg leading-relaxed text-foreground/90">
                {poem.verses.map((verse, vIndex) => (
                  <p key={vIndex} className={verse === "" ? "h-4" : ""}>
                    {verse}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoemsSection;
