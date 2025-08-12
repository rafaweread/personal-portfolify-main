import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Settings } from "lucide-react";

interface AboutSectionProps {
  about: string;
  skills: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const iconMap = {
  BarChart3,
  TrendingUp,
  Users,
  Settings,
};

const AboutSection = ({ about, skills }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* About Content */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              | Sobre mim:
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about}
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Principais Habilidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || BarChart3;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
                  >
                    <CardContent className="p-10 text-center space-y-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        {skill.title}
                      </h4>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;