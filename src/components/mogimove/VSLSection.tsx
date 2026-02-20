import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function VSLSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="video"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, hsl(var(--background)), hsl(224 30% 8%), hsl(var(--background)))" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            Veja como fazemos sua mudança ser{" "}
            <span className="text-orange-gradient">simples e sem estresse</span>
          </h2>
        </motion.div>

        {/* Video embed placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative rounded-3xl overflow-hidden glass-card border border-white/10 cursor-pointer group"
            style={{ paddingTop: "56.25%" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted" />

            {/* Truck icon bg */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl opacity-5 select-none">🚛</span>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={hovered ? { scale: 1.15 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "transparent",
                    boxShadow: hovered
                      ? "0 0 60px hsla(29, 91%, 51%, 0.8), 0 0 120px hsla(29, 91%, 51%, 0.4)"
                      : "0 0 40px hsla(29, 91%, 51%, 0.5)",
                    transition: "box-shadow 0.3s",
                  }}
                />
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full btn-orange flex items-center justify-center relative z-10">
                  <svg
                    className="w-8 h-8 translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Duration label */}
            <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-medium text-muted-foreground border border-white/10">
              2:00 min
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-8 text-base md:text-lg max-w-xl mx-auto"
        >
          Em menos de 2 minutos você entende por que somos a escolha certa para o seu frete.
        </motion.p>
      </div>
    </section>
  );
}
