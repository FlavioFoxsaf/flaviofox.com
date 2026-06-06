'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { id: 'hero', label: dict.navbar.home },
    { id: 'about', label: dict.navbar.about },
    { id: 'education', label: dict.navbar.education },
    { id: 'experience', label: dict.navbar.experience },
    { id: 'skills', label: dict.navbar.skills },
    { id: 'certifications', label: dict.navbar.certifications },
    { id: 'projects', label: dict.navbar.projects },
    { id: 'contact', label: dict.navbar.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
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
    // Add small delay to allow menu closing animation before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const toggleLanguage = () => {
    if (lang === 'en') {
      router.push('/pt', { scroll: false });
    } else {
      router.push('/', { scroll: false });
    }
  };

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50, 300],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.4)', 'rgba(5, 5, 5, 0.85)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 50, 300],
    ['blur(0px)', 'blur(6px)', 'blur(16px)']
  );

  const borderBottomColor = useTransform(
    scrollY,
    [0, 50, 300],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.02)', 'rgba(255, 255, 255, 0.05)']
  );

  const paddingY = useTransform(
    scrollY,
    [0, 50],
    ['1.5rem', '1rem']
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottomColor,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        paddingTop: paddingY,
        paddingBottom: paddingY
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`absolute inset-0 bg-[#050505]/95 backdrop-blur-xl md:hidden -z-10 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
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

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-gray-600 text-xs font-bold text-white hover:bg-white hover:text-black transition-colors"
          >
            {lang === 'en' ? 'EN' : 'PT'}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-t border-b border-white/10 overflow-hidden shadow-2xl"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
