'use client';

import { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useInView } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { GraduationCap, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SpotlightButton } from '@/components/ui/SpotlightButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface EducationSectionProps {
  dict: Dictionary;
}

export function EducationSection({ dict }: EducationSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: 'start',
      dragFree: true,
      containScroll: 'trimSnaps'
    },
    [AutoScroll({ playOnInit: false, speed: 0.5, stopOnInteraction: false })]
  );
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const rewindTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isRewindingRef = useRef(false);
  const isInteractingRef = useRef(false);

  const resetTimer = (delay: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (emblaApi) {
        const autoScroll = emblaApi.plugins().autoScroll;
        if (autoScroll) autoScroll.play();
      }
    }, delay);
  };

  const stopAutoScroll = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (emblaApi) {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll) autoScroll.stop();
    }
  };

  const handleManualInteraction = () => {
    if (rewindTimerRef.current) clearTimeout(rewindTimerRef.current);
    isRewindingRef.current = false;
    isInteractingRef.current = true;
    stopAutoScroll();
    
    setTimeout(() => {
      isInteractingRef.current = false;
      if (isInView && !isModalOpen) {
        resetTimer(6000);
      }
    }, 100);
  };

  useEffect(() => {
    if (!emblaApi) return;

    if (isInView && !isModalOpen) {
      if (rewindTimerRef.current) clearTimeout(rewindTimerRef.current);
      isRewindingRef.current = false;
      stopAutoScroll();
      resetTimer(6000);
    } else {
      if (rewindTimerRef.current) clearTimeout(rewindTimerRef.current);
      isRewindingRef.current = false;
      stopAutoScroll();
    }

    const onPointerDown = () => {
      isInteractingRef.current = true;
      if (rewindTimerRef.current) clearTimeout(rewindTimerRef.current);
      isRewindingRef.current = false;
      stopAutoScroll();
    };

    const onPointerUp = () => {
      isInteractingRef.current = false;
      if (isInView && !isModalOpen) resetTimer(6000);
    };

    const checkEnd = (isSettled: boolean = false) => {
      if (!emblaApi || isRewindingRef.current || isInteractingRef.current) return;
      
      const progress = emblaApi.scrollProgress();
      
      // If it's still scrolling, only trigger at the absolute boundary (0.999) to avoid stopping early.
      // If it has already settled (stopped), we can safely trigger if it's at the last snap point.
      const isAtEnd = isSettled 
        ? (!emblaApi.canScrollNext() || progress >= 0.99)
        : (progress >= 0.999);

      if (isAtEnd) {
        isRewindingRef.current = true;
        stopAutoScroll();
        
        // Wait 7 seconds so the user can fully read the last card
        rewindTimerRef.current = setTimeout(() => {
          if (!emblaApi) return;
          emblaApi.scrollTo(0);
          
          // Wait for the scroll back animation to finish
          rewindTimerRef.current = setTimeout(() => {
            isRewindingRef.current = false;
            if (isInView && !isModalOpen) resetTimer(1000);
          }, 1500);
        }, 7000);
      }
    };

    const onScroll = () => {
      if (!isRewindingRef.current && !isInteractingRef.current) checkEnd(false);
    };

    const onSettle = () => {
      if (!isRewindingRef.current && !isInteractingRef.current) checkEnd(true);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('settle', onSettle);

    return () => {
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
      emblaApi.off('scroll', onScroll);
      emblaApi.off('settle', onSettle);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rewindTimerRef.current) clearTimeout(rewindTimerRef.current);
    };
  }, [emblaApi, isInView, isModalOpen]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      handleManualInteraction();
    }
  };
  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      handleManualInteraction();
    }
  };

  return (
    <Section id="education">
      <div ref={sectionRef}>
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {dict.education.title}
          </h2>
          <div className="w-20 h-1 bg-purple-500 mt-4 rounded-full" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <SpotlightButton 
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </SpotlightButton>
            <SpotlightButton 
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </SpotlightButton>
          </div>
          <SpotlightButton 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors text-sm flex items-center gap-2"
          >
            {dict.education.viewFull}
            <ExternalLink className="w-4 h-4" />
          </SpotlightButton>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pb-8 after:content-[''] after:pr-6 md:after:pr-12" style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}>
          {dict.education.items?.map((edu) => (
            <div 
              key={edu.id}
              className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_40%] min-w-0"
            >
              <SpotlightCard className="glass p-8 rounded-2xl border-t border-purple-500/20 hover:border-purple-500/50 transition-colors h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {edu.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <div className="text-purple-400 font-medium mb-4">
                  {edu.institution}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {edu.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-white/5 mt-auto">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={dict.education.title}>
        <div className="space-y-8">
          {dict.education.items?.map((edu) => (
            <div key={edu.id} className="relative pl-6 border-l border-white/10 pb-8 last:pb-0">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500" />
              <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
              <div className="text-purple-400 mt-1 mb-2">{edu.institution}</div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
              <p className="text-gray-300 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </Modal>
      </div>
    </Section>
  );
}
