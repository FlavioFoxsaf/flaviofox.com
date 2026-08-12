'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FFIcon = ({ className }: { className?: string }) => (
  <span className={`font-bold tracking-tighter flex items-center justify-center ${className || ''}`} style={{ fontSize: '1.2em', lineHeight: 1 }}>
    FF.
  </span>
);

function SpotlightCard({ 
  link, 
  index, 
  onEmailClick 
}: { 
  link: any; 
  index: number; 
  onEmailClick?: (e: React.MouseEvent) => void 
}) {
  const Icon = link.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const content = (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`w-full py-3 px-4 rounded-xl flex items-center border transition-all duration-300 group hover:-translate-y-1 active:-translate-y-1 backdrop-blur-md min-h-[64px] overflow-hidden relative ${link.color}`}
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 group-active:bg-white/10 transition-colors shrink-0 z-10 relative ${link.iconColor}`}>
        <Icon className="w-5 h-5 group-hover:scale-110 group-active:scale-110 transition-transform" />
      </div>
      <div className="flex-1 flex justify-center overflow-hidden z-10 relative">
        <span className="font-semibold text-gray-200 group-hover:text-white group-active:text-white transition-colors tracking-wide text-[13px] sm:text-sm whitespace-nowrap px-2">
          {link.name}
        </span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 + index * 0.1, duration: 0.4, type: "spring" }}
    >
      {link.isInternal ? (
        <Link href={link.url} className="w-full block focus:outline-none">
          {content}
        </Link>
      ) : link.isEmail ? (
        <button 
          onClick={onEmailClick}
          className="w-full block focus:outline-none text-left"
        >
          {content}
        </button>
      ) : (
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block focus:outline-none"
        >
          {content}
        </a>
      )}
    </motion.div>
  );
}

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
      url: 'https://flaviofox.com',
      icon: FFIcon,
      color: 'border-white/10 bg-white/5 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] active:border-white/50 active:bg-white/10 active:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
      iconColor: 'text-white group-hover:text-white group-active:text-white',
      isInternal: false
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/flaviofox/',
      icon: FaLinkedin,
      color: 'border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] active:border-blue-500/50 active:bg-blue-500/10 active:shadow-[0_0_15px_rgba(59,130,246,0.15)]',
      iconColor: 'text-blue-500 group-hover:text-blue-400 group-active:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/foxflavio/',
      icon: FaInstagram,
      color: 'border-white/10 bg-white/5 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] active:border-pink-500/50 active:bg-pink-500/10 active:shadow-[0_0_15px_rgba(236,72,153,0.15)]',
      iconColor: 'text-pink-500 group-hover:text-pink-400 group-active:text-pink-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5571987107553',
      icon: FaWhatsapp,
      color: 'border-white/10 bg-white/5 hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] active:border-green-500/50 active:bg-green-500/10 active:shadow-[0_0_15px_rgba(34,197,94,0.15)]',
      iconColor: 'text-green-500 group-hover:text-green-400 group-active:text-green-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/FlavioFoxsaf',
      icon: FaGithub,
      color: 'border-white/10 bg-white/5 hover:border-gray-400/50 hover:bg-gray-400/10 hover:shadow-[0_0_15px_rgba(156,163,175,0.15)] active:border-gray-400/50 active:bg-gray-400/10 active:shadow-[0_0_15px_rgba(156,163,175,0.15)]',
      iconColor: 'text-gray-300 group-hover:text-white group-active:text-white'
    },
    {
      name: 'E-mail (contato@flaviofox.com)',
      url: 'mailto:contato@flaviofox.com',
      icon: Mail,
      color: 'border-white/10 bg-white/5 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] active:border-red-500/50 active:bg-red-500/10 active:shadow-[0_0_15px_rgba(239,68,68,0.15)]',
      iconColor: 'text-red-500 group-hover:text-red-400 group-active:text-red-400',
      isEmail: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-x-hidden bg-[#050505]">
      
      {/* Tech Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-20 pointer-events-none" />
      
      {/* Dynamic Glow Orbs Background */}
      <motion.div 
        animate={{ 
          x: [-50, 100, -50], 
          y: [-50, 100, -50], 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [50, -100, 50], 
          y: [50, -100, 50], 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [100, -50, 100], 
          y: [-100, 50, -100], 
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/2 left-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-cyan-600/15 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2" 
      />

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
            className="px-3 py-1.5 rounded-full border border-gray-600/50 bg-black/40 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)]"
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
            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full mb-10 flex items-center justify-center"
          >
            {/* Tech Rings (Radar effect) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] rounded-full border border-purple-500/20 border-dotted"
            />
            
            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] z-10 bg-[#050505]">
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Flavio Fox
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] sm:text-xs md:text-sm whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-center font-medium"
          >
            Software Engineering | Data Science & AI | Cloud Computing
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-gray-400 text-xs md:text-sm text-center leading-relaxed"
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
        <div className="flex flex-col gap-3 w-full mb-8 relative z-20">
          {links.map((link, index) => (
            <SpotlightCard 
              key={index} 
              link={link} 
              index={index} 
              onEmailClick={link.isEmail ? handleEmailClick : undefined} 
            />
          ))}
        </div>

        {/* Footer Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
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
          <p className="text-xs text-gray-600 font-mono flex items-center justify-center gap-1">
            <span>© 2026 Flavio Fox. {lang === 'PT' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</span>
            <span className="text-gray-700">|</span>
            <a href="https://flaviofox.com" className="cursor-pointer text-gray-600 hover:text-gray-400 transition-colors font-semibold">by FF.</a>
          </p>
        </motion.div>
      </motion.div>

      {/* Email Copied Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full border border-green-500/30 bg-black/80 backdrop-blur-md text-white text-sm font-medium shadow-[0_0_20px_rgba(34,197,94,0.2)] flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-green-400" />
            {lang === 'PT' ? 'E-mail copiado para a área de transferência!' : 'Email copied to clipboard!'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
