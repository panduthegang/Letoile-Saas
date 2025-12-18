import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  // Initialize state based on current scroll position to avoid flash on reload
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Dynamic text color based on scroll and page
  const isHome = location.pathname === '/';
  const textColor = isScrolled || !isHome ? 'text-forest-800' : 'text-white';
  const borderColor = isScrolled ? 'border-forest-800/10' : 'border-white/20';
  const bgColor = isScrolled ? 'bg-cream-50/90 backdrop-blur-md' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor} border-b ${borderColor}`}>
      <div className="container mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className={`relative z-50 flex flex-col items-center group ${textColor}`}>
          <span className="text-2xl font-display font-black tracking-tighter leading-none">
            L'ÉTOILE
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-medium mt-1">
            Royale
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-10 ${textColor}`}>
          {['Home', 'About', 'Suites', 'Experiences', 'Dining'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest font-bold hover:text-terra-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-terra-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
           <button className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
             isScrolled || !isHome 
              ? 'border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-forest-800'
           }`}>
             Book Your Stay
           </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden focus:outline-none z-50 ${textColor}`} 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} className="text-forest-800" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-cream-50 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {['Home', 'About', 'Suites', 'Experiences', 'Dining'].map((item) => (
           <Link 
             key={item} 
             to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
             className="text-3xl font-display text-forest-800 hover:text-terra-500 hover:italic transition-all"
           >
             {item}
           </Link>
        ))}
      </div>
    </nav>
  );
};