'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const [showToast, setShowToast] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('flaviofoxsaf@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tighter">FF.</span>
          <span className="text-gray-500 text-sm">{dict.footer.copyright}</span>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0 text-gray-400">
          <a href="https://github.com/FlavioFoxsaf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/flaviofox/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin className="w-5 h-5" /></a>
          <a href="https://www.instagram.com/flavio_fox/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaInstagram className="w-5 h-5" /></a>
          <a href="https://wa.me/5571987107553" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaWhatsapp className="w-5 h-5" /></a>
          <a href="mailto:flaviofoxsaf@gmail.com" onClick={handleEmailClick} className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span>{dict.footer.backToTop}</span>
          <div className="p-2 rounded-full bg-white/5">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>

      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full glass-strong border border-white/10 text-white font-medium shadow-lg flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-green-400" />
            {dict.contact.emailCopied}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
