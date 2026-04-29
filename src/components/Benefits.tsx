import { Check, Clock, HeadphonesIcon, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Seu site pronto em até 7 dias úteis. Sem enrolação, direto ao ponto.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Humanizado",
    description: "Falo sua língua. Nada de termos técnicos complicados, apenas soluções claras.",
  },
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Se não ficar satisfeito, ajusto até você aprovar. Seu investimento está seguro.",
  },
  {
    icon: Check,
    title: "Tudo Incluso",
    description: "Hospedagem, domínio e manutenção por 1 ano. Zero surpresas ou custos extras.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Por que nos escolher?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-main mt-3 mb-6">
              Não é sobre código.{" "}
              <span className="text-primary">É sobre seu sucesso.</span>
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Entendemos que você não quer saber de programação. Você quer um site 
              bonito, rápido e que traga clientes. É exatamente isso que entregamos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-surface border border-border shadow-soft">
                <span className="text-3xl md:text-4xl font-bold text-primary">25+</span>
                <p className="text-sm text-text-muted mt-1">Projetos entregues</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-surface border border-border shadow-soft">
                <span className="text-3xl md:text-4xl font-bold text-primary">98%</span>
                <p className="text-sm text-text-muted mt-1">Clientes satisfeitos</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-surface border border-border shadow-soft">
                <span className="text-3xl md:text-4xl font-bold text-primary">3</span>
                <p className="text-sm text-text-muted mt-1">Anos de experiência</p>
              </div>
            </div>
          </div>

          {/* Right column - Benefits cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-primary hover:shadow-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-text-main mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;