'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { ChevronDown } from 'lucide-react';
import { SpotlightButton } from '@/components/ui/SpotlightButton';

interface HeroSectionProps {
  dict: Dictionary;
}

export function HeroSection({ dict }: HeroSectionProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-fox.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/60 via-[#0a0a0c]/80 to-[#0a0a0c] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-[15vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Flavio Fox
          </h1>
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-lg md:text-xl font-medium text-gray-200 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-2 lg:gap-y-0">
              {dict.hero.title.split('|').map((part, index, array) => (
                <span key={index} className="flex items-center">
                  <span className="text-center lg:whitespace-nowrap">{part.trim()}</span>
                  {index < array.length - 1 && (
                    <span className="hidden lg:inline-block text-orange-500/50 mx-3">|</span>
                  )}
                </span>
              ))}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              {dict.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SpotlightButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              {dict.hero.primaryCta}
            </SpotlightButton>
            <SpotlightButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass text-white font-semibold rounded-full border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-50 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 w-full sm:w-auto"
            >
              {dict.hero.secondaryCta}
            </SpotlightButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-50 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
