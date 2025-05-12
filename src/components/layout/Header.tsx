
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-charcoal font-serif">
          <h1 className="text-xl font-medium">一の間</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link to="/" className="text-charcoal hover:text-charcoal-light transition-colors">
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-charcoal hover:text-charcoal-light transition-colors">
                会社概要
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-charcoal hover:text-charcoal-light transition-colors">
                ギャラリー
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-charcoal hover:text-charcoal-light transition-colors">
                料金案内
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-charcoal hover:text-charcoal-light transition-colors">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-charcoal focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 pt-20 animate-fade-in">
          <nav className="container px-4 py-8">
            <ul className="flex flex-col space-y-8 items-center">
              <li>
                <Link 
                  to="/" 
                  className="text-charcoal text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-charcoal text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-charcoal text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-charcoal text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  料金案内
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-charcoal text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
