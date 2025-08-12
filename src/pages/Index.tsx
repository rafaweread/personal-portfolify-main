import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import dashboard1 from "@/assets/dashboard-1.jpg";
import dashboard2 from "@/assets/dashboard-2.jpg";
import dashboard3 from "@/assets/dashboard-3.jpg";

interface PortfolioData {
  name: string;
  title: string;
  description: string;
  yearsExperience: number;
  about: string;
  skills: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    image: string;
    link?: string;
    vimeoId?: string;
  }>;
  contactInfo: {
    email: string;
    linkedin?: string;
    github?: string;
    location: string;
  };
}

const defaultData: PortfolioData = {
  name: "Rafael Penha Lemos",
  title: "Especialista em Análise de Dados | Tech Lead | Power BI",
  description: "Desenvolvo dashboards interativos e automatizados para diferentes áreas de negócio, transformando dados em insights estratégicos.",
  yearsExperience: 7,
  about: "Seja muito bem-vindo(a) ao meu portfólio. Tenho anos de experiência profissional em Análise de Dados, transformando dados brutos em insights estratégicos que impulsionam decisões de negócio. Especialista em Power BI, com expertise em desenvolvimento de dashboards interativos, automação de relatórios e visualização de dados complexos. Minha paixão está em tornar os dados acessíveis e compreensíveis, criando soluções que empoderam equipes e organizações a tomar decisões mais informadas e estratégicas.",
  skills: [
    {
      title: "Visualização & Análise de Dados",
      description: "Transformo dados complexos em insights visuais claros e inteligentes, utilizando as melhores práticas de storytelling com dados.",
      icon: "BarChart3"
    },
    {
      title: "Transformação de Dados e ETL",
      description: "Especialista em processos de ETL, garantindo que os dados sejam limpos, transformados e prontos para análise. Utilizando Python, SQL e ferramentas de integração de dados.",
      icon: "Settings"
    },
    {
      title: "Design de Dashboards",
      description: "Criação de dashboards intuitivos e responsivos que facilitam a tomada de decisão com UX/UI otimizada para diferentes perfis de usuários.",
      icon: "TrendingUp"
    },
    {
      title: "Gestão de Projetos",
      description: "Coordenação end-to-end de projetos de BI, desde levantamento de requisitos até implementação e treinamento de usuários finais.",
      icon: "Users"
    }
  ],
  projects: [
    {
      title: "Performance Comercial",
      description: "Sistema de monitoramento de performance comercial com métricas de vendas, faturamento por região, análise de produtos e acompanhamento de metas. ",
      image: "https://i.imgur.com/UaBUuB4.png",
      /*vimeoId: "249808097",*/
      link: "https://github.com/rafaweread/analise-de-desempenho-vendas-lojas"
    },
    {
      title: "Fluxo de Caixa",
      description: "Dashboard abrangente para análise financeira com KPIs de receitas, despesas, fluxo de caixa e projeções. Inclui visualizações de tendências temporais e comparativos orçamentários.",
      image: "https://i.imgur.com/yZb9zUK.jpeg",
      link: "https://github.com/rafaweread/08---Fluxo-de-Caixa"
    },
    {
      title: "DRE",
      description: "Este dashboard possibilita uma análise financeira completa e dinâmica que vai muito além dos relatórios tradicionais. Com ele, é possível realizar uma análise estrutural instantânea, utilizando a Análise Vertical para entender o peso de cada despesa sobre a receita e a Análise Horizontal para medir a performance e crescimento em relação a outros períodos.",
      image: "https://i.imgur.com/z9zJq2Z.png",
      link: "https://github.com/rafaweread/dre-grupo-contas"
    },
    {
      title: "Pentaho PDI: Atualização de Dados incremental",
      description: "Este projeto demonstra como realizar uma atualização incremental de dados utilizando o Pentaho PDI, garantindo eficiência e precisão na integração de dados.",
      image: "https://i.imgur.com/EOzhF60.png",
      link: "https://github.com/rafaweread/Integra-o-de-Dados-com-Pentaho-PDI"
    }
  ],
  contactInfo: {
    email: "rafael.penhalemos@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafael-penha-lemos-33119187/",
    github: "https://github.com/rafaweread",
    location: "Cuiabá, MT - Brasil"
  }
};

const Index = () => {
  const [data, setData] = useState<PortfolioData>(defaultData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        name={data.name}
        title={data.title}
        description={data.description}
        yearsExperience={data.yearsExperience}
      />
      
      <AboutSection
        about={data.about}
        skills={data.skills}
      />
      
      <ProjectsSection
        projects={data.projects}
      />
      
      <ContactSection
        contactInfo={data.contactInfo}
      />
    </div>
  );
};

export default Index;
