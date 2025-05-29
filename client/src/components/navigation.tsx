import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import hpLogo from "@assets/hplogo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#events", label: "Events" },
    { href: "#resources", label: "Resources" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="relative z-50 bg-background border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src={hpLogo} 
              alt="Georgia LGBTQ History Project Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black">
                Georgia LGBTQ History Project
              </h1>
              <p className="text-sm text-black/80 hidden sm:block">
                Preserving Georgia's LGBTQ History
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-black hover:text-purple-600 transition-colors duration-200 px-3 py-2 text-sm font-medium focus-outline"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#donate")}
                className="bg-white text-purple-600 hover:bg-purple-100 px-6 py-2 rounded-full font-semibold"
              >
                Donate
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-purple-600 focus-outline"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-black hover:text-purple-600 block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 focus-outline"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#donate")}
                className="bg-white text-purple-600 hover:bg-purple-100 w-full mt-2 mx-3 rounded-lg font-semibold"
              >
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
