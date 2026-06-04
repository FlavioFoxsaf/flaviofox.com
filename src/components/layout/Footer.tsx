'use client';

import { Dictionary } from '@/i18n/dictionaries';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <span className="text-xl font-bold text-white tracking-tighter">FF.</span>
          <span className="text-gray-500 text-sm">{dict.footer.copyright}</span>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0 text-gray-400">
          <a href="#" className="hover:text-white transition-colors"><FaGithub className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><FaLinkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><FaTwitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
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
    </footer>
  );
}
