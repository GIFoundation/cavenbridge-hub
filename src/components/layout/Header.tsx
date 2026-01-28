import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Companies", href: "#companies" },
  { name: "Governance", href: "#governance" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center font-display text-lg font-bold transition-colors",
                  isScrolled
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-primary",
                )}
              >
                CB
              </div> */}
              <img
                src="/stratanew.png"
                alt=""
                style={{ width: "35px", height: "35px" }}
              />
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-display text-lg font-semibold tracking-tight transition-colors",
                    isScrolled ? "text-foreground" : "text-white",
                  )}
                >
                  CavenBridge
                </span>
                <span
                  className={cn(
                    "text-xs tracking-widest uppercase transition-colors",
                    isScrolled ? "text-muted-foreground" : "text-white/70",
                  )}
                  style={{ fontSize: "8.5px" }}
                >
                  Group of Companies
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={cn(
                    "text-sm font-medium link-underline transition-colors",
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant={isScrolled ? "default" : "outline"}
                  className={cn(
                    "ml-4 transition-all",
                    !isScrolled &&
                      "border-white/30  hover:bg-white hover:text-primary",
                  )}
                  onClick={() => scrollToSection("#contact")}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10",
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-lg font-medium text-foreground hover:text-primary py-3 border-b border-border transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <Button
                    className="mt-4 w-full"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
