import { motion } from "framer-motion";
import {
  ArrowRight,
  Scale,
  Users,
  TrendingUp,
  Compass,
  TreePine,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  comingSoon: boolean;
  gradient: string;
}

const companies: Company[] = [
  {
    name: "CavenBridge Advocates",
    tagline: "The Future of Law",
    description:
      "A law firm focused on legal practice at the institutional level. We operate beyond transactional advice, supporting clients on legal structure, governance, risk, and long-term positioning.",
    icon: Scale,
    comingSoon: false,
    gradient: "from-emerald-800 to-emerald-950",
    link: "https://advocates.cavenbridge.com/",
  },
  {
    name: "CavenBridge Strata",
    tagline: "The Future of Work",
    description:
      "An employer-of-record and employment-risk infrastructure firm. We operate the employer layer for organisations in high-friction labour markets, converting uncertainty into governed, predictable cost.",
    icon: Users,
    comingSoon: false,
    gradient: "from-zinc-700 to-zinc-900",
    link: "https://strata.cavenbridge.com/",
  },
  {
    name: "CavenBridge Analytqa",
    tagline: "The Future of Consulting",
    description:
      "A strategy and advisory firm focused on direction, governance, and institutional design. Advising organisations navigating complexity shaped by regulation, politics, and capital.",
    icon: Compass,
    comingSoon: false,
    gradient: "from-neutral-700 to-neutral-900",
    link: "https://analytqa.com/",
  },
  {
    name: "CavenBridge Capital",
    tagline: "The Future of Capital",
    description:
      "Capital formation, market access, and investment structuring across emerging and frontier contexts. Disciplined exposure grounded in governance and long-term value creation.",
    icon: TrendingUp,
    comingSoon: true,
    gradient: "from-stone-700 to-stone-900",
  },
  {
    name: "The Grove by CavenBridge",
    tagline: "A Nile Retreat, by Design",
    description:
      "A long-horizon hospitality and place-based venture located on the River Nile in Jinja. A quiet, design-led retreat reflecting our belief that place-making requires the same discipline as law or capital.",
    icon: TreePine,
    comingSoon: true,
    gradient: "from-emerald-800 to-emerald-950",
  },
  {
    name: "CavenBridge Ventures",
    tagline: "Long-Horizon Innovation",
    description:
      "Exploring new frontiers in institutional development. Building tomorrow's ventures with the same principled approach that defines our established companies.",
    icon: Lightbulb,
    comingSoon: true,
    gradient: "from-amber-800 to-amber-950",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function CompaniesSection() {
  return (
    <section id="companies" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
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
              Our Portfolio
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Companies
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each CavenBridge company is distinct in function and mandate, yet
            aligned in philosophy. Together, they represent a coherent approach
            to the future of institutional practice.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {companies.map((company, index) => (
            <CompanyCard key={company.name} company={company} index={index} />
          ))}
        </motion.div>

        {/* Philosophy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            "CavenBridge Group is not a holding company for unrelated
            businesses. Each entity is purpose-built to address a specific
            institutional domain, using disciplined governance and long-term
            thinking."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyCard({ company, index }: { company: Company; index: number }) {
  const Icon = company.icon;

  return (
    <motion.div variants={cardVariants} className="group relative">
      <a href={company?.link} target="_blank" rel="noopener noreferrer">
        <div
          className={cn(
            "relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2",
            "bg-gradient-to-br",
            company.gradient,
            "shadow-card group-hover:shadow-card-hover",
          )}
        >
          {/* Coming Soon Badge */}
          {company.comingSoon && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="badge-coming-soon">Coming Soon</Badge>
            </div>
          )}

          {/* Card Content */}
          <div className="p-8 h-full flex flex-col">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <p className="text-white/60 text-sm font-medium tracking-wide uppercase mb-2">
                {company.tagline}
              </p>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-4">
                {company.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {company.description}
              </p>
            </div>

            {/* CTA */}
            {!company.comingSoon && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href={company?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group/link"
                >
                  Explore Cavenbridge {company.name.split(" ")[1]}
                  <ArrowRight
                    size={16}
                    className="transform group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            )}

            {company.comingSoon && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-white/50 text-sm">
                  More details coming soon
                </span>
              </div>
            )}
          </div>

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      </a>
    </motion.div>
  );
}
