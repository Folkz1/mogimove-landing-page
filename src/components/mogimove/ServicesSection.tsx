import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🚛",
    title: "Fretes Locais e Interestaduais",
    description:
      "Transportamos sua carga com segurança até o destino, no prazo combinado. Cobertura completa na Grande São Paulo.",
  },
  {
    icon: "📦",
    title: "Mudanças Residenciais e Comerciais",
    description:
      "Equipe treinada, embalagem profissional e cuidado total com seus pertences. Do apartamento à empresa, sem preocupação.",
  },
  {
    icon: "⚡",
    title: "Coleta Expressa",
    description:
      "Precisa rápido? A gente resolve. Coleta no mesmo dia para a região do Alto Tietê. Ágil, seguro e sem complicação.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground">
            O que a{" "}
            <span className="text-orange-gradient">MOGIMOVE</span>
            <br />
            faz por você
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <div className="glass-card service-card rounded-3xl p-8 h-full border border-white/10 group cursor-default">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl glass-card border border-primary/20 flex items-center justify-center text-3xl mb-6 group-hover:border-primary/60 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Bottom accent */}
                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
