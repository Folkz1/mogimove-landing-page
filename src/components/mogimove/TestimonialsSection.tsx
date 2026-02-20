import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Carlos M.",
    city: "Mogi das Cruzes",
    initials: "CM",
    text: "Contratei a MOGIMOVE para minha mudança em Mogi das Cruzes e fui surpreendido! Equipe pontual, cuidadosa e preço justo. Super recomendo!",
    stars: 5,
    colorClass: "bg-secondary",
  },
  {
    name: "Ana Paula R.",
    city: "Suzano",
    initials: "AP",
    text: "Precisei de um frete urgente para Suzano e eles resolveram no mesmo dia. Profissionalismo do início ao fim.",
    stars: 5,
    colorClass: "bg-primary",
  },
  {
    name: "Ricardo T.",
    city: "Poá",
    initials: "RT",
    text: "Mudei minha loja comercial com a MOGIMOVE. Zero dor de cabeça, tudo chegou perfeito. Já indiquei para 3 amigos!",
    stars: 5,
    colorClass: "bg-secondary",
  },
  {
    name: "Fernanda L.",
    city: "Itaquaquecetuba",
    initials: "FL",
    text: "Melhor transportadora da região! Já usei 2 vezes e sempre entrega no prazo. Atendimento pelo WhatsApp é excelente.",
    stars: 5,
    colorClass: "bg-primary",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="glass-card rounded-3xl p-8 h-full border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
                {/* Stars */}
                <StarRating count={t.stars} />

                {/* Review text */}
                <p className="text-foreground leading-relaxed my-5 text-base">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-foreground font-bold text-sm flex-shrink-0 ${t.colorClass}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs flex items-center gap-1">
                      <span>📍</span>
                      {t.city}
                    </div>
                  </div>
                  {/* Verified badge */}
                  <div className="ml-auto glass-card px-3 py-1 rounded-full text-xs text-muted-foreground border border-white/10">
                    ✓ Verificado
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
