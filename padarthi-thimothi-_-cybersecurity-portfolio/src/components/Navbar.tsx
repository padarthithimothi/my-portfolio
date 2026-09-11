import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = new Map();
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchingLink = navLinks.find(link => link.href === `#${sectionId}`);
          if (matchingLink) {
            setActiveSection(matchingLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className={cn(
        "pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full border border-white/10 overflow-hidden shadow-2xl",
        scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-black/40 backdrop-blur-md"
      )}>
        
        {/* Left Side Branding */}
        <div className="hidden xl:flex items-center px-6 py-4 border-r border-white/5">
          <span className="text-white text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
            PADARTHI THIMOTHI <span className="text-red-600 mx-3">/</span> <span className="text-gray-400">CYBERSECURITY STUDENT</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center px-3 py-2 space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={cn(
                  "block px-5 py-2 text-[9px] uppercase tracking-widest font-bold rounded-full transition-all duration-300",
                  activeSection === link.name 
                    ? "bg-[#cc0000] text-white shadow-[0_0_15px_rgba(204,0,0,0.4)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center justify-between w-full px-6 py-4 min-w-[300px]">
          <span className="text-white text-[10px] font-bold uppercase tracking-widest">
            THIMOTHI <span className="text-red-600">.</span>
          </span>
          <button
            className="text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="absolute top-full mt-4 left-4 right-4 pointer-events-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 lg:hidden shadow-2xl"
        >
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "block px-6 py-4 text-[10px] uppercase tracking-widest font-bold rounded-2xl transition-all duration-300 text-center",
                    activeSection === link.name 
                      ? "bg-[#cc0000] text-white" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
