'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';

interface SocialLinksSectionProps {
  dict: Dictionary;
}

export function SocialLinksSection({ dict }: SocialLinksSectionProps) {
  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/flaviofox/', color: 'hover:text-blue-500', glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/FlavioFoxsaf', color: 'hover:text-white', glow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/flavio_fox/', color: 'hover:text-pink-500', glow: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/5571987107553', color: 'hover:text-green-500', glow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]' },
    { icon: Mail, label: 'Email', href: 'mailto:flaviofoxsaf@gmail.com', color: 'hover:text-red-500', glow: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]' },
  ];

  const [showToast, setShowToast] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('mailto:')) {
      e.preventDefault();
      const email = href.replace('mailto:', '');
      navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <Section id="social" className="py-12 bg-white/[0.02] border-y border-white/5">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleLinkClick(e, link.href)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative p-4 rounded-full glass transition-all duration-300 ${link.color}`}
              aria-label={link.label}
            >
              <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${link.glow}`} />
              <Icon className="w-6 h-6 md:w-8 md:h-8 relative z-10 text-gray-400 group-hover:text-inherit transition-colors" />
            </motion.a>
          );
        })}
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
    </Section>
  );
}
