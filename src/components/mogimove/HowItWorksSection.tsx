import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Entre em contato",
    description: "Fale com a gente pelo WhatsApp. Atendimento rápido, sem enrolação.",
    color: "secondary",
  },
  {
    number: "02",
    icon: "📋",
    title: "Receba seu orçamento",
    description: "Rápido, transparente e sem surpresas. Preço justo e combinado.",
    color: "primary",
  },
  {
    number: "03",
    icon: "✅",
    title: "A gente cuida do resto",
    description: "Coleta, transporte e entrega com segurança. Você só relaxa.",
    color: "secondary",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, hsl(var(--background)), hsl(224 30% 7%), hsl(var(--background)))" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Como funciona
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground">
            Simples assim
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="w-full h-full origin-left"
              style={{
                background: "linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--primary)), hsl(var(--secondary)))",
                opacity: 0.4,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number + Icon circle */}
                <div className="relative mb-8">
                  {/* Step number */}
                  <div
                    className="w-32 h-32 rounded-full glass-card border-2 flex items-center justify-center relative z-10"
                    style={{
                      borderColor: i === 1 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                      boxShadow: i === 1
                        ? "0 0 30px hsla(29, 91%, 51%, 0.3)"
                        : "0 0 30px hsla(224, 71%, 33%, 0.3)",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-1">{step.icon}</div>
                      <div
                        className="text-xs font-bold tracking-widest"
                        style={{ color: i === 1 ? "hsl(var(--primary))" : "hsl(var(--secondary))" }}
                      >
                        PASSO {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-20"
                    style={{
                      background: i === 1 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
