import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const AnniversaryCounter = () => {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date("2022-12-23T00:00:00");
      const now = new Date();

      // Calcula o tempo total em milissegundos
      const totalMs = now.getTime() - startDate.getTime();

      // Calcula segundos, minutos e horas
      const totalSeconds = Math.floor(totalMs / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;

      // Calcula dias
      const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
      
      // Calcula anos, meses e dias precisamente
      let years = 0;
      let months = 0;
      let days = totalDays;
      
      // Contar anos
      const startYear = startDate.getFullYear();
      const endYear = now.getFullYear();
      years = endYear - startYear;
      
      // Ajusta para data exata considerando mês e dia
      let tempDate = new Date(startDate);
      tempDate.setFullYear(tempDate.getFullYear() + years);
      
      if (tempDate > now) {
        years--;
        tempDate.setFullYear(tempDate.getFullYear() - 1);
      }

      // Contar meses
      months = 0;
      while (true) {
        const nextMonth = new Date(tempDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        if (nextMonth > now) break;
        months++;
        tempDate = nextMonth;
      }

      // Contar dias restantes
      days = 0;
      while (true) {
        const nextDay = new Date(tempDate);
        nextDay.setDate(nextDay.getDate() + 1);
        if (nextDay > now) break;
        days++;
        tempDate = nextDay;
      }

      setTimeData({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-red-500/10">
      <div className="max-w-6xl mx-auto relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center w-full">
          <Heart className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse" fill="currentColor" />
          
          <h1 className="font-crimson text-6xl md:text-7xl font-bold mb-6 text-foreground">
            Nossos Três Anos
          </h1>
          
          <p className="font-quicksand text-xl text-muted-foreground mb-12">
            Desde que você se tornou meu amor
          </p>

          <Card className="inline-block p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl mb-8 w-full max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center p-4">
                <p className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-2">
                  {timeData.years}
                </p>
                <p className="font-quicksand text-sm md:text-lg text-foreground/70">
                  {timeData.years === 1 ? "ano" : "anos"}
                </p>
              </div>
              
              <div className="text-center p-4">
                <p className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-2">
                  {timeData.months}
                </p>
                <p className="font-quicksand text-sm md:text-lg text-foreground/70">
                  {timeData.months === 1 ? "mês" : "meses"}
                </p>
              </div>
              
              <div className="text-center p-4">
                <p className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-2">
                  {timeData.days}
                </p>
                <p className="font-quicksand text-sm md:text-lg text-foreground/70">
                  {timeData.days === 1 ? "dia" : "dias"}
                </p>
              </div>

              <div className="text-center p-4">
                <p className="font-crimson text-4xl md:text-5xl font-bold text-purple-500 mb-2">
                  {String(timeData.hours).padStart(2, "0")}
                </p>
                <p className="font-quicksand text-sm md:text-lg text-foreground/70">
                  horas
                </p>
              </div>

              <div className="text-center p-4">
                <p className="font-crimson text-4xl md:text-5xl font-bold text-purple-500 mb-2">
                  {String(timeData.minutes).padStart(2, "0")}
                </p>
                <p className="font-quicksand text-sm md:text-lg text-foreground/70">
                  minutos
                </p>
              </div>

              <div className="text-center p-4">
                <p className="font-crimson text-4xl md:text-5xl font-bold text-red-500 mb-2">
                  {String(timeData.seconds).padStart(2, "0")}
                </p>
                <p className="font-quicksand text-sm md:text-lg text-foreground/70">
                  segundos
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mb-8">
            <p className="font-quicksand text-xl md:text-2xl text-foreground mb-2">
              Total: <span className="font-bold text-primary">{timeData.totalDays} dias</span>
            </p>
            <p className="font-quicksand text-muted-foreground text-lg">
              De puro amor, risadas e momentos inesquecíveis
            </p>
          </div>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-secondary/30 inline-block max-w-2xl">
            <p className="font-crimson text-xl text-foreground/80 italic">
              "Desde 23 de dezembro de 2022, cada segundo ao seu lado é uma bênção que guardo com todo meu coração"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnniversaryCounter;
