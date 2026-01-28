import { motion } from 'framer-motion';
import { Scale, Users, Wallet, Compass, MapPin } from 'lucide-react';

const focusAreas = [
  { icon: Scale, text: 'Law and legal practice' },
  { icon: Users, text: 'Employment and workforce structures' },
  { icon: Wallet, text: 'Capital formation and investment access' },
  { icon: Compass, text: 'Strategy, direction, and governance advisory' },
  { icon: MapPin, text: 'Place-based, long-horizon ventures' },
];

export function WhatWeBuildSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, hsl(var(--accent)) 10%, transparent 20%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Our Purpose
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What We Build
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              CavenBridge Group is not a holding company for unrelated businesses. 
              Each entity is purpose-built to address a specific institutional domain, 
              using disciplined governance and long-term thinking.
            </p>
            <div className="space-y-4">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                      {area.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10">
              <h3 className="font-display text-2xl font-semibold mb-6">Our Approach</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                We do not optimise for speed or visibility. We optimise for 
                <span className="text-accent font-medium"> credibility</span>, 
                <span className="text-accent font-medium"> durability</span>, and 
                <span className="text-accent font-medium"> institutional fit</span>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Governance precedes growth',
                  'Authority separated from pressure',
                  'Risk is structured',
                  'Scale follows evidence',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <p className="text-sm text-primary-foreground/80">{item}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-primary-foreground/60 text-sm mt-8 italic">
                This allows our companies to operate confidently in high-friction, 
                highly regulated environments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
