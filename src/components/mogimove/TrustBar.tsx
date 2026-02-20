import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { icon: "🚛", value: "+500", label: "Fretes realizados" },
  { icon: "⭐", value: "4.9/5", label: "Avaliação média" },
  { icon: "📦", value: "+200", label: "Mudanças concluídas" },
  { icon: "📍", value: "10", label: "Cidades atendidas" },
  { icon: "🕐", value: "98%", label: "de pontualidade" },
];

function StatItem({ icon, value, label, delay }: { icon: string; value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2 px-8 py-6 text-center min-w-[160px]"
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-3xl md:text-4xl font-black trust-number">{value}</span>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-gradient-to-r from-card via-background to-card overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center divide-x divide-border/30">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
