import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappLink = "https://wa.me/5511951852202?text=Olá! Gostaria de saber mais sobre seus serviços.";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - CTA */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Vamos conversar?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-text-main mt-3 mb-6">
                Pronto para ter um{" "}
                <span className="text-primary">site profissional?</span>
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Nos conte sobre seu projeto no WhatsApp. Respondemos em até 2 horas durante 
                horário comercial. Consultoria inicial gratuita!
              </p>

              {/* Main CTA */}
              <Button 
                size="xl" 
                variant="hero"
                onClick={() => window.open(whatsappLink, "_blank")}
                className="group mb-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </Button>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-text-muted">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>(11) 95185-2202</span>
                </div>
                <div className="flex items-center gap-4 text-text-muted">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>jeezledev@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-text-muted">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>São Paulo, SP - Atendemos todo Brasil</span>
                </div>
              </div>
            </div>

            {/* Right - Visual card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl p-8 lg:p-12">
                <div className="bg-surface rounded-2xl p-8 shadow-hover border border-border">
                  <h3 className="text-2xl font-bold text-text-main mb-4">
                    Orçamento sem compromisso
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Análise do seu negócio",
                      "Sugestão de estratégia digital",
                      "Proposta personalizada",
                      "Prazo e valores claros",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-text-main">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-text-muted text-sm">
                    Resposta garantida em até 2 horas úteis.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;