'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';

interface SocialLinksSectionProps {
  dict: Dictionary;
}

export function SocialLinksSection({ dict }: SocialLinksSectionProps) {
  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500', glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]' },
    { icon: FaGithub, label: 'GitHub', href: '#', color: 'hover:text-white', glow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]' },
    { icon: FaInstagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500', glow: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: '#', color: 'hover:text-green-500', glow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]' },
    { icon: Mail, label: 'Email', href: '#', color: 'hover:text-red-500', glow: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]' },
  ];

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
    </Section>
  );
}
