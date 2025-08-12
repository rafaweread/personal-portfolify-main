import { Button } from "@/components/ui/button";
import heroImage from "@/assets/profile-hero.jpg";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  yearsExperience: number;
}

const HeroSection = ({ 
  name, 
  title, 
  description, 
  yearsExperience
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
        style={{
          backgroundImage: `url('/lovable-uploads/d9d2801d-22a6-413c-8346-654e94c40fcf.png')`,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/90"></div>
      
      {/* Additional accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground">
                {name}
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 font-medium">
                {title}
              </p>
              <p className="text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-4 bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{yearsExperience}+</div>
                <div className="text-sm text-primary-foreground/70">anos de experiência</div>
              </div>
              <div className="w-px h-12 bg-primary/30"></div>
              <div className="text-primary-foreground/80">
                em Análise de Dados e Business Intelligence
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary-foreground hover:bg-primary/10 px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative w-full max-w-lg h-96 mx-auto">
              <img 
                src={heroImage} 
                alt={name}
                className="w-full h-full rounded-3xl shadow-elegant object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-accent/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;