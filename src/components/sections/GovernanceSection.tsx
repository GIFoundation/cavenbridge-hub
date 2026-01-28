import { motion } from 'framer-motion';
import { Shield, Eye, Clock, CheckCircle2 } from 'lucide-react';
import officeImage from '@/assets/office-modern.jpg';

const principles = [
  {
    icon: Shield,
    title: 'Separation of Authority',
    description: 'Legal, risk, operational, and commercial authority are deliberately separated. Governance functions retain veto power where necessary.',
  },
  {
    icon: Eye,
    title: 'Risk & Accountability',
    description: 'We design governance frameworks that anticipate regulatory discretion, enforcement risk, and reputational exposure rather than reacting to them.',
  },
  {
    icon: Clock,
    title: 'Long-Term Orientation',
    description: 'Built for durability over visibility, institutional trust over rapid scale, and disciplined expansion over opportunistic growth.',
  },
];

const coreBeliefs = [
  'Governance precedes growth',
  'Authority is separated from commercial pressure',
  'Risk is structured, not ignored',
  'Scale follows evidence, not ambition',
];

export function GovernanceSection() {
  return (
    <section id="governance" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${officeImage})` }}
      />
      <div className="absolute inset-0 bg-background/95" />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Our Foundation
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Governance-Led by Design
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe institutions endure only when authority, accountability, and risk are clearly structured.
            The Group exists to build institutions that last.
          </p>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 relative">
            <div className="absolute -top-4 left-8 lg:left-12">
              <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center">
                <span className="font-display text-2xl">"</span>
              </div>
            </div>
            <blockquote className="text-xl lg:text-2xl font-display text-foreground leading-relaxed text-center">
              We do not optimise for speed or visibility.
              <br />
              <span className="text-primary font-semibold">We optimise for credibility, durability, and institutional fit.</span>
            </blockquote>
          </div>
        </motion.div>

        {/* Core Beliefs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {coreBeliefs.map((belief, index) => (
            <motion.div
              key={belief}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 group hover:shadow-md hover:border-accent/20 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-accent mb-3" />
              <p className="text-foreground font-medium">{belief}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 h-full shadow-card border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Operating across East Africa and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kampala', 'Nairobi', 'Kigali', 'Juba'].map((city) => (
              <span
                key={city}
                className="px-5 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border/50 shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
