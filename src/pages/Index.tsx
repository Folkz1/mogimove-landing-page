import { HeroSection } from "@/components/mogimove/HeroSection";
import { TrustBar } from "@/components/mogimove/TrustBar";
import { VSLSection } from "@/components/mogimove/VSLSection";
import { ServicesSection } from "@/components/mogimove/ServicesSection";
import { HowItWorksSection } from "@/components/mogimove/HowItWorksSection";
import { TestimonialsSection } from "@/components/mogimove/TestimonialsSection";
import { CTASection } from "@/components/mogimove/CTASection";
import { Footer } from "@/components/mogimove/Footer";
import { WhatsAppButton } from "@/components/mogimove/WhatsAppButton";
import { Navbar } from "@/components/mogimove/Navbar";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MOGIMOVE – Frete e Mudanças em Mogi das Cruzes e Alto Tietê</title>
        <meta
          name="description"
          content="MOGIMOVE: transportadora especializada em fretes e mudanças residenciais e comerciais em Mogi das Cruzes, Suzano, Poá, Itaquaquecetuba e toda Grande São Paulo. Orçamento grátis!"
        />
        <meta
          name="keywords"
          content="frete mogi das cruzes, mudança alto tietê, transportadora mogi, frete suzano, mudança suzano, frete poá, mudança itaquaquecetuba"
        />
        <meta property="og:title" content="MOGIMOVE – Frete e Mudanças no Alto Tietê" />
        <meta property="og:description" content="Transportamos o que importa para você com segurança, agilidade e preço justo no Alto Tietê e Grande São Paulo." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mogimove.com.br" />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <TrustBar />
        <VSLSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
