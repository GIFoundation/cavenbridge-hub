import { motion } from "framer-motion";
import { ArrowDown, Building2, Scale, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "50px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(35 40% 50% / 0.3) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(0 0% 100% / 0.1) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Multi-Disciplinary Institutional Platform
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Building the Future
            <br />
            <span className="text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
              of Institutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            CavenBridge Group is a multi-disciplinary institutional platform
            operating across law, work, capital, consulting, and long-term
            ventures. We build, govern, and scale organisations at the
            intersection of markets, regulation, and state authority.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium px-8"
              onClick={() => scrollToSection("#companies")}
            >
              Explore Our Companies
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/10 font-medium px-8"
              onClick={() => scrollToSection("#governance")}
            >
              Governance & Philosophy
            </Button>
          </motion.div>

          {/* Stats/Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-6 mt-9 pt-4 border-t border-white/10 max-w-xl"
          >
            <div className="text-center">
              <Scale className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/70">Legal Practice</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/70">Capital Formation</p>
            </div>
            <div className="text-center">
              <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-sm text-white/70">Institution Building</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#companies")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
