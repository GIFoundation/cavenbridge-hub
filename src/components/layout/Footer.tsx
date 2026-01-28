import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

const companies = [
  { name: 'CavenBridge Advocates', href: '#' },
  { name: 'CavenBridge Strata', href: '#' },
  { name: 'CavenBridge Capital', href: '#' },
  { name: 'CavenBridge LLP', href: '#' },
  { name: 'The Grove', href: '#' },
];

const quickLinks = [
  { name: 'About the Group', href: '#home' },
  { name: 'Our Companies', href: '#companies' },
  { name: 'Governance', href: '#governance' },
  { name: 'Contact', href: '#contact' },
];

const locations = ['Kampala', 'Nairobi', 'Kigali', 'Juba'];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white text-primary flex items-center justify-center font-display text-lg font-bold">
                CB
              </div>
              <div>
                <span className="font-display text-lg font-semibold">CavenBridge</span>
                <span className="block text-xs tracking-widest uppercase text-white/60">Group</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Building the future of institutions. A multi-disciplinary platform operating across law, work, capital, consulting, and long-term ventures.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Mail size={16} />
              <a href="mailto:info@cavenbridge.com" className="hover:text-white transition-colors">
                info@cavenbridge.com
              </a>
            </div>
          </motion.div>

          {/* Companies Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Our Companies</h4>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {company.name}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin size={14} className="text-accent" />
                  {location}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} CavenBridge Group. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
