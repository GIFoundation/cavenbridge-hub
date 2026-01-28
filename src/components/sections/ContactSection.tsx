import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, hsl(var(--foreground)) 45%, hsl(var(--foreground)) 55%, transparent 55%)`,
            backgroundSize: '30px 30px',
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
              Get in Touch
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start a Conversation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Engagements with CavenBridge Group and its companies begin with structured conversations.
            We work selectively and prefer clarity from the outset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* General Enquiries */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    General Enquiries
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Group-level discussions
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:info@cavenbridge.com"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span>info@cavenbridge.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>Kampala • Nairobi • Kigali • Juba</span>
                </div>
              </div>
            </div>

            {/* Company-Specific */}
            <div className="bg-muted/50 rounded-2xl p-8 border border-border/30">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Company-Specific Enquiries
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                For enquiries relating to a specific company, please visit the relevant company page 
                or indicate the entity in your message.
              </p>
              <a
                href="#companies"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#companies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View our companies
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Closing Note */}
            <div className="pt-4">
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                CavenBridge Group is building for the long term. 
                We welcome conversations aligned with that horizon.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-background border-border/50 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-background border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company / Organisation
                </label>
                <Input
                  id="company"
                  placeholder="Your organisation"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="bg-background border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your enquiry..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-background border-border/50 focus:border-accent resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
