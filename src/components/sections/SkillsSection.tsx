'use client';

import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SpotlightButton } from '@/components/ui/SpotlightButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface SkillsSectionProps {
  dict: Dictionary;
}

export function SkillsSection({ dict }: SkillsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const getCategoryStyles = (index: number) => {
    const styles = [
      { color: 'from-blue-500/20 to-blue-500/5', borderColor: 'border-blue-500/20 hover:border-blue-500/50' }, // Tech
      { color: 'from-purple-500/20 to-purple-500/5', borderColor: 'border-purple-500/20 hover:border-purple-500/50' }, // Cloud
      { color: 'from-green-500/20 to-green-500/5', borderColor: 'border-green-500/20 hover:border-green-500/50' }, // Interpersonal
      { color: 'from-orange-500/20 to-orange-500/5', borderColor: 'border-orange-500/20 hover:border-orange-500/50' }, // Tools
      { color: 'from-yellow-500/20 to-yellow-500/5', borderColor: 'border-yellow-500/20 hover:border-yellow-500/50' }, // Financial
    ];
    return styles[index % styles.length];
  };

  return (
    <Section id="skills" className="overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {dict.skills.title}
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full" />
        </div>
        
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
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pb-8" style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}>
        {dict.skills.categories?.map((category, idx) => {
          const style = getCategoryStyles(idx);
          return (
          <div
            key={category.title}
            className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_28%] min-w-0"
          >
            <SpotlightCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`glass p-8 rounded-3xl border ${style.borderColor} transition-colors relative overflow-hidden group h-full flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.2) + (skillIdx * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </SpotlightCard>
          </div>
          );
        })}
        </div>
      </div>
    </Section>
  );
}
