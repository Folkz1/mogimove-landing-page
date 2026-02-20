import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5511964464397";

export function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

      {/* Animated route lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px opacity-20"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(90deg, transparent, hsl(29 91% 51%), transparent)"
                : "linear-gradient(90deg, transparent, hsl(224 71% 60%), transparent)",
              top: `${15 + i * 18}%`,
              left: "-100%",
              right: "-100%",
            }}
            animate={{ x: ["0%", "100%"] }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Alto Tietê · Grande São Paulo
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6"
        >
          <span className="text-3xl md:text-4xl font-black tracking-tight">
            <span style={{ color: "hsl(224 71% 60%)" }}>MOGI</span>
            <span className="text-primary">MOVE</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 text-foreground"
        >
          Seu frete.{" "}
          <span className="text-orange-gradient">Sua mudança.</span>
          <br />
          Na hora certa.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transportamos o que importa para você com segurança, agilidade e preço justo no{" "}
          <span className="text-foreground font-medium">Alto Tietê e Grande São Paulo.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold w-full sm:w-auto justify-center"
          >
            💬 Solicitar orçamento agora
          </a>
          <button
            onClick={scrollToServices}
            className="btn-blue-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base w-full sm:w-auto justify-center"
          >
            Conheça nossos serviços
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
