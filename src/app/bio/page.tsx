'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FFIcon = ({ className }: { className?: string }) => (
  <span className={`font-bold tracking-tighter flex items-center justify-center ${className || ''}`} style={{ fontSize: '1.2em', lineHeight: 1 }}>
    FF.
  </span>
);

export default function BioPage() {
  const [lang, setLang] = useState<'PT' | 'EN'>('PT');
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('contato@flaviofox.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const links = [
    {
      name: 'flaviofox.com',
      url: '/',
      icon: FFIcon,
      color: 'hover:border-white/50 hover:bg-white/10',
      iconColor: 'text-white group-hover:text-white',
      isInternal: true
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/flaviofox/',
      icon: FaLinkedin,
      color: 'hover:border-blue-600/50 hover:bg-blue-600/10',
      iconColor: 'text-blue-500 group-hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/foxflavio/',
      icon: FaInstagram,
      color: 'hover:border-pink-500/50 hover:bg-pink-500/10',
      iconColor: 'text-pink-500 group-hover:text-pink-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5571987107553',
      icon: FaWhatsapp,
      color: 'hover:border-green-500/50 hover:bg-green-500/10',
      iconColor: 'text-green-500 group-hover:text-green-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/FlavioFoxsaf',
      icon: FaGithub,
      color: 'hover:border-white/50 hover:bg-white/10',
      iconColor: 'text-gray-300 group-hover:text-white'
    },
    {
      name: 'E-mail (contato@flaviofox.com)',
      url: 'mailto:contato@flaviofox.com',
      icon: Mail,
      color: 'hover:border-red-500/50 hover:bg-red-500/10',
      iconColor: 'text-red-500 group-hover:text-red-400',
      isEmail: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-x-hidden bg-[#0a0a0c]">
      {/* Background Effects */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md z-10 pt-2 pb-10"
      >
        
        {/* Language Toggle (In Flow) */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setLang(lang === 'PT' ? 'EN' : 'PT')}
            className="px-3 py-1.5 rounded-full border border-gray-600 flex items-center gap-2 text-xs font-bold text-white hover:bg-white hover:text-black transition-colors"
          >
            {lang === 'EN' ? (
              <>
                <span>EN</span>
                <Image src="/flags/us.svg" alt="USA" width={18} height={14} className="rounded-[2px] object-cover" />
              </>
            ) : (
              <>
                <span>PT</span>
                <Image src="/flags/br.svg" alt="Brazil" width={18} height={14} className="rounded-[2px] object-cover" />
              </>
            )}
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 p-1 glass border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/fotoff.jpg"
                alt="Flavio Fox"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Flavio Fox
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-[11px] sm:text-xs md:text-sm whitespace-nowrap text-center"
          >
            Software Engineering | Data Science & AI | Cloud Computing
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-gray-300 text-xs md:text-sm text-center leading-relaxed"
          >
            {lang === 'PT' ? (
              <>
                <p className="mb-3">Entusiasta de tecnologia, sempre fui movido pela curiosidade de entender como os processos funcionam e pela vontade de fazer acontecer.</p>
                <p className="mb-3">Uno capacidade de liderança, visão de negócios e comunicação fluida à bagagem técnica, cursando Ciência de Dados e Inteligência Artificial no SENAI CIMATEC, Engenharia de Software e Análise e Desenvolvimento de Sistemas.</p>
                <p>Focado em Computação em Nuvem (AWS), traduzo cenários complexos em soluções ágeis e eficientes, atuando como ponte entre os desafios tecnológicos e as necessidades reais do negócio.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Technology enthusiast, always driven by the curiosity to understand how processes work and the desire to make things happen.</p>
                <p className="mb-3">I combine leadership skills, business vision, and fluent communication with my technical background, currently studying Data Science and Artificial Intelligence at SENAI CIMATEC, Software Engineering, and Systems Analysis and Development.</p>
                <p>Focused on Cloud Computing (AWS), I translate complex scenarios into agile and efficient solutions, acting as a bridge between technological challenges and real business needs.</p>
              </>
            )}
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 w-full mb-12">
          {links.map((link, index) => {
            const Icon = link.icon;
            
            const LinkContent = (
              <div className={`glass w-full p-4 rounded-xl flex items-center justify-center border border-white/5 transition-all duration-300 group ${link.color} hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] relative min-h-[64px]`}>
                <div className={`absolute left-4 p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${link.iconColor}`}>
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors px-14 text-center">
                  {link.name}
                </span>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                {link.isInternal ? (
                  <Link href={link.url} className="w-full block focus:outline-none">
                    {LinkContent}
                  </Link>
                ) : link.isEmail ? (
                  <button 
                    onClick={handleEmailClick}
                    className="w-full block focus:outline-none text-left"
                  >
                    {LinkContent}
                  </button>
                ) : (
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block focus:outline-none"
                  >
                    {LinkContent}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            {links.filter(l => !l.isInternal).map((link, i) => {
              const Icon = link.icon;
              if (link.isEmail) return null;
              return (
                <a 
                  key={i} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 hover:text-white transition-all hover:scale-125 p-2`}
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
          <p className="text-xs text-gray-600 font-mono">
            © 2026 Flavio Fox. {lang === 'PT' ? 'Todos os direitos reservados.' : 'All rights reserved.'} <a href="https://flaviofox.com" className="cursor-pointer text-gray-600 hover:text-gray-600">| by FF.</a>
          </p>
        </motion.div>
      </motion.div>

      {/* Email Copied Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full glass-strong border border-white/10 text-white text-sm font-medium shadow-lg flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-green-400" />
            {lang === 'PT' ? 'E-mail copiado para a área de transferência!' : 'Email copied to clipboard!'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
