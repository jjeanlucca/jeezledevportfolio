import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados atualizados com as imagens da pasta public e links reais
const projects = [
  {
    id: 1,
    title: "Clínica Vittah Saúde e Estética",
    category: "Site Institucional",
    description: "Aplicativo PWA e Site Web completo para clínica estética com agendamento online. Aumento de 40% nas consultas.",
    image: "/vittahlogo.png", 
    result: "+40% consultas",
    link: "https://db-vittah-clinic.web.app/",
  },
  {
    id: 2,
    title: "Aurora Lingeries",
    category: "E-commerce",
    description: "Loja virtual completa com integração de pagamento. Faturamento dobrou em 3 meses.",
    image: "/auroralogo.svg",
    result: "2x faturamento",
    link: "https://auroralingeries.vercel.app/",
  },
  {
    id: 3,
    title: "Jeezle Finanças",
    category: "SaaS / Web App",
    description: "Plataforma de gestão financeira em nuvem com instalação mobile (PWA). Design moderno e responsivo.",
    image: "/jeezlelogopreta.png",
    result: "Lançamento",
    link: "https://jeezlewebfinancas.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mt-3 mb-6">
            Resultados que falam por si
          </h2>
          <p className="text-lg text-text-muted">
            Cada projeto é uma parceria. Veja como ajudamos outros negócios a 
            crescerem com presença digital profissional.
          </p>
        </div>

        {/* Projects grid - renderizado via map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project image container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-50 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  // Aumentamos o padding (p-12) para as logos respirarem melhor
                  className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Result badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-soft z-10">
                  {project.result}
                </div>

                {/* Overlay on hover - Efeito Vidro Fumê com Blur */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="gap-2">
                      Ver detalhes <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-text-main mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;