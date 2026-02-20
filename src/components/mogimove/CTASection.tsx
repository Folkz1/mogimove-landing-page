import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_URL = "https://wa.me/5511964464397";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contato"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, hsla(29, 91%, 51%, 0.15) 0%, transparent 70%), linear-gradient(180deg, hsl(var(--background)), hsl(224 30% 8%), hsl(var(--background)))",
        }}
      />

      {/* Decorative orange glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-6 block">
              Solicite agora
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Pronto para um frete{" "}
              <span className="text-orange-gradient">sem complicação?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Solicite seu orçamento agora pelo WhatsApp.{" "}
              <span className="text-foreground font-medium">
                Resposta em minutos, sem enrolação.
              </span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold"
              style={{
                animation: "waPulse 2.5s ease-in-out infinite",
              }}
            >
              💬 Falar com a MOGIMOVE agora
            </a>
          </motion.div>

          {/* Trust micro-copy */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="text-primary">✅</span> Sem compromisso
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✅</span> Orçamento gratuito
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✅</span> Resposta imediata
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative orange glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
        }}
      />
    </section>
  );
}
