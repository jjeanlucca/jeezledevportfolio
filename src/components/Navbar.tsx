import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta scroll para mudar estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "Diferenciais", href: "#benefits" },
    { label: "Contato", href: "#contact" },
  ];

  const whatsappLink = "https://wa.me/5511951852202?text=Olá! Gostaria de saber mais sobre seus serviços.";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/jeezledevlogo.svg" 
              alt="Jeezle Dev" 
              // Aumentamos a altura base e usamos 'scale' para ignorar as bordas invisíveis do Canva
              className="h-16 md:h-20 w-auto object-contain scale-[1.0] md:scale-[1.1] origin-left"
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-main transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="hero"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-main" />
            ) : (
              <Menu className="w-6 h-6 text-text-main" />
            )}
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-muted hover:text-text-main transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="hero"
                className="mt-2"
                onClick={() => {
                  window.open(whatsappLink, "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                Orçamento Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;