import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Dynamic text color based on state
  const getTextColor = () => {
    if (isMobileOpen) return 'text-cream-50';
    const transparentHeaderPages = ['/', '/suites'];
    if (isScrolled || !transparentHeaderPages.includes(location.pathname)) return 'text-forest-800';
    return 'text-white';
  };

  const textColor = getTextColor();
  const borderColor = isScrolled && !isMobileOpen ? 'border-forest-800/10' : 'border-white/10';
  const bgColor = isScrolled && !isMobileOpen ? 'bg-cream-50/90 backdrop-blur-md' : 'bg-transparent';

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Suites', path: '/suites' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor} border-b ${borderColor}`}>
        <div className="container mx-auto px-6 md:px-12 py-5 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className={`relative z-50 flex flex-col items-center group ${textColor} transition-colors duration-300`}>
            <span className="text-2xl font-display font-black tracking-tighter leading-none">
              L'ÉTOILE
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-medium mt-1 group-hover:text-terra-500 transition-colors">
              Royale
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-10 ${textColor}`}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xs uppercase tracking-widest font-bold hover:text-terra-500 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-terra-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* CTA - Desktop */}
          <div className="hidden md:block">
            <button className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${isScrolled || location.pathname !== '/'
              ? 'border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-forest-800'
              }`}>
              Book Your Stay
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden focus:outline-none z-50 flex items-center gap-3 ${textColor} transition-colors duration-300`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">
              {isMobileOpen ? 'Close' : 'Menu'}
            </span>
            <div className="relative w-6 h-6">
              <motion.div
                initial={false}
                animate={{ rotate: isMobileOpen ? 90 : 0, opacity: isMobileOpen ? 0 : 1 }}
                className="absolute inset-0"
              >
                <Menu size={24} strokeWidth={1.5} />
              </motion.div>
              <motion.div
                initial={false}
                animate={{ rotate: isMobileOpen ? 0 : -90, opacity: isMobileOpen ? 1 : 0 }}
                className="absolute inset-0"
              >
                <X size={24} strokeWidth={1.5} />
              </motion.div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-forest-900 z-40 flex flex-col pt-32 px-6 pb-8 overflow-y-auto"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
              <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] rounded-full bg-terra-500 blur-[120px]"></div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-8 relative z-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.path}
                    className="block text-4xl md:text-5xl font-display text-cream-100 hover:text-terra-500 hover:italic transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="w-full max-w-sm mx-auto border-t border-white/10 pt-8 mt-8 relative z-10"
            >
              <button className="w-full bg-terra-500 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-forest-900 transition-colors mb-8">
                Book Your Stay
              </button>

              <div className="grid grid-cols-2 gap-4 text-cream-200/50 text-xs font-sans">
                <div>
                  <span className="block text-terra-500 uppercase tracking-widest mb-2">Contact</span>
                  <p className="mb-1">+33 1 49 52 70 00</p>
                  <p>contact@letoileroyale.com</p>
                </div>
                <div className="text-right">
                  <span className="block text-terra-500 uppercase tracking-widest mb-2">Location</span>
                  <p className="mb-1">123 Avenue Montaigne</p>
                  <p>75008 Paris, France</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
