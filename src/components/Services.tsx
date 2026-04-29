import { Globe, Smartphone, TrendingUp, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Apresente sua empresa de forma profissional e conquiste a confiança dos seus clientes antes mesmo do primeiro contato.",
    highlight: "A partir de R$ 1.500",
  },
  {
    icon: TrendingUp,
    title: "Landing Pages",
    description: "Páginas focadas em conversão que transformam visitantes em clientes. Perfeitas para campanhas e lançamentos.",
    highlight: "A partir de R$ 800",
  },
  {
    icon: Smartphone,
    title: "Sites Responsivos",
    description: "Seu site funcionando perfeitamente em qualquer dispositivo. 70% dos acessos hoje vêm do celular.",
    highlight: "Incluso em todos",
  },
  {
    icon: Palette,
    title: "Redesign",
    description: "Seu site atual não traz resultados? Faço uma reformulação completa para modernizar e converter mais.",
    highlight: "Análise gratuita",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mt-3 mb-6">
            Soluções para cada necessidade
          </h2>
          <p className="text-lg text-text-muted">
            Não importa o tamanho do seu negócio, tenho a solução certa para você 
            começar a vender mais pela internet.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-surface"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-text-main">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-muted mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <span className="text-primary font-semibold text-sm">
                  {service.highlight}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;