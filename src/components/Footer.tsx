import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-text-invert py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4 transition-transform hover:opacity-90">
              <img 
                src="/jeezledevlogobranca.svg" 
                alt="Jeezle Dev" 
                className="h-12 md:h-16 w-auto object-contain scale-[1.2] origin-left"
              />
            </a>
            <p className="text-text-invert/70 text-sm leading-relaxed">
              Transformando ideias em sites que vendem. 
              Seu parceiro digital para crescer na internet.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-text-invert/70">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-accent transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-text-invert/70">
              <li>Sites Institucionais</li>
              <li>Landing Pages</li>
              <li>E-commerce</li>
              <li>Redesign</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-text-invert/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-invert/60">
            © {currentYear} JeezleDev. Todos os direitos reservados.
          </p>
          <p className="text-sm text-text-invert/60 flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;