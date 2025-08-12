import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';

interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  location: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: contactInfo.email,
        reply_to: formData.email
      };

      // Enviar e-mail usando EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente por e-mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              | Entre em contato:
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interessado em trabalhar juntos? Envie uma mensagem e vamos conversar sobre seus projetos de dados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>

                  {contactInfo.linkedin && (
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">LinkedIn</p>
                        <p className="text-muted-foreground">{contactInfo.linkedin}</p>
                      </div>
                    </div>
                  )}

                  {contactInfo.github && (
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Github className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">GitHub</p>
                        <p className="text-muted-foreground">{contactInfo.github}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Localização</p>
                      <p className="text-muted-foreground">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-6">
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:shadow-lg"
                    size="lg"
                  >
                    <a 
                      href="https://wa.me/5565993450837?text=Olá! Gostaria de conversar sobre projetos de análise de dados."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-elegant bg-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Envie uma mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;