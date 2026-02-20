const WHATSAPP_URL = "https://wa.me/5511964464397";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black mb-3">
              <span style={{ color: "hsl(224 71% 60%)" }}>MOGI</span>
              <span className="text-primary">MOVE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transportando com responsabilidade no Alto Tietê
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Regiões Atendidas
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mogi das Cruzes · Suzano · Poá · Itaquaquecetuba · Guararema · Salesópolis · e toda Grande São Paulo
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 btn-orange px-4 py-2 rounded-xl text-sm font-semibold"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2025 MOGIMOVE. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs text-center">
            Frete Mogi das Cruzes · Mudança Alto Tietê · Transportadora Mogi · Frete Suzano
          </p>
        </div>
      </div>
    </footer>
  );
}
