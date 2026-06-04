'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Dictionary, Language } from '@/i18n/dictionaries';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  dict: Dictionary;
  lang: Language;
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { id: 'hero', label: dict.navbar.home },
    { id: 'about', label: dict.navbar.about },
    { id: 'experience', label: dict.navbar.experience },
    { id: 'education', label: dict.navbar.education },
    { id: 'skills', label: dict.navbar.skills },
    { id: 'certifications', label: dict.navbar.certifications },
    { id: 'projects', label: dict.navbar.projects },
    { id: 'contact', label: dict.navbar.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const toggleLanguage = () => {
    if (lang === 'en') {
      router.push('/pt');
    } else {
      router.push('/');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div 
          className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          FF.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-white',
                activeSection === link.id ? 'text-white' : 'text-gray-400'
              )}
            >
              {link.label}
            </button>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded-full border border-gray-600 text-xs font-bold hover:bg-white hover:text-black transition-colors"
          >
            {lang === 'en' ? 'EN' : 'PT'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    'text-left text-sm font-medium transition-colors',
                    activeSection === link.id ? 'text-white' : 'text-gray-400'
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={toggleLanguage}
                className="self-start px-4 py-2 mt-2 rounded border border-gray-600 text-sm font-bold"
              >
                {lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
