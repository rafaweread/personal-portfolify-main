import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, X } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  vimeoId?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoPlay = (index: number) => {
    setPlayingVideo(index);
  };

  const handleVideoClose = () => {
    setPlayingVideo(null);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              | Explore alguns projetos que já desenvolvi:
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              >
                <div className="aspect-video overflow-hidden relative">
                  {project.vimeoId && playingVideo === index ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&color=008AFB&title=0&byline=0&portrait=0`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={`Vídeo: ${project.title}`}
                      ></iframe>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleVideoClose}
                        className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {project.vimeoId && project.vimeoId.trim() && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="lg"
                            onClick={() => handleVideoPlay(index)}
                            className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4"
                          >
                            <Play className="w-8 h-8 ml-1" />
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                
                {/* Button outside card */}
                <div className="p-6 pt-0">
                  {project.link ? (
                    <Button 
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-glow"
                      size="lg"
                    >
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Veja mais
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      className="w-full opacity-50 cursor-not-allowed"
                      size="lg"
                    >
                      Em breve
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;