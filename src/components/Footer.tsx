import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative overflow-hidden bg-muted/50">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "var(--gradient-romantic)",
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
          <p className="font-crimson text-3xl font-bold text-foreground">
            23 de Dezembro de 2022
          </p>
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
        </div>
        
        <p className="font-quicksand text-xl text-foreground/80 mb-4">
          3 anos de amor, risos, sonhos e cumplicidade
        </p>
        
        <p className="font-crimson text-2xl text-primary italic">
          Te amo, Thaina ❤️
        </p>
        
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <p className="font-quicksand text-sm text-muted-foreground mt-6">
          Feito com todo amor do mundo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
