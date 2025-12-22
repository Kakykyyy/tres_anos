import { Music, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const SpotifyPlayer = () => {
  const tracks = [
    {
      id: "1Y3LN4zO1Edc2EluIoSPJN",
      title: "Nossa Trilha Sonora",
      description: "A música que toca ao nosso lado"
    },
    {
      id: "7B1MfhjvOCzCDIJIDX8anW",
      title: "Momentos Inesquecíveis",
      description: "Cada nota é um lembrar de você"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-green-500/10 via-purple-500/10 to-pink-500/10">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Seção Spotify */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in-up">
            <Music className="w-12 h-12 text-green-500 mx-auto mb-4 animate-bounce" fill="currentColor" />
            <h2 className="font-crimson text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Trilha Sonora do Nosso Amor
            </h2>
            <p className="font-quicksand text-xl text-muted-foreground">
              Músicas que narram nossa história
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <Card key={track.id} className="p-6 bg-card/80 backdrop-blur-sm border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">
                  <h3 className="font-crimson text-2xl font-bold text-foreground mb-2">{track.title}</h3>
                  <p className="font-quicksand text-muted-foreground">{track.description}</p>
                </div>
                <div className="flex justify-center rounded-lg overflow-hidden bg-black/20">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Seção Chamadas */}
        <div className="mt-20">
          <div className="text-center mb-16 fade-in-up">
            <Phone className="w-12 h-12 text-purple-500 mx-auto mb-4 animate-bounce" fill="currentColor" />
            <h2 className="font-crimson text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Nossas Chamadas
            </h2>
            <p className="font-quicksand text-xl text-muted-foreground mb-8">
              Os momentos que mais me fazem feliz
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl">
            <p className="font-quicksand text-lg text-foreground leading-relaxed mb-6">
              Cada chamada que fazemos me traz uma felicidade indescritível. Ouvir sua voz, ver seu rosto, compartilhar o dia — são esses momentos que me fazem ter certeza de que escolhi certo em te ter em minha vida.
            </p>
            <p className="font-quicksand text-lg text-foreground leading-relaxed mb-6">
              Mesmo quando o dia é cansativo, saber que posso contar com você ali, do outro lado, conversando sobre qualquer coisa... isso muda tudo. Você é minha fonte de paz e alegria.
            </p>
            <p className="font-crimson text-xl text-foreground italic">
              "Obrigado por estar sempre lá, em cada chamada, em cada momento. Você me faz o homem mais feliz do mundo."
            </p>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="inline-block p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/30">
            <p className="font-crimson text-lg text-foreground/80 italic">
              "Você é a razão pela qual cada dia é especial"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpotifyPlayer;
