'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface ExperienceSectionProps {
  dict: Dictionary;
}

export function ExperienceSection({ dict }: ExperienceSectionProps) {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = dict.experience.items || [];

  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          {dict.experience.title}
        </h2>
        <div className="w-20 h-1 bg-blue-500 mt-4 rounded-full" />
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[41px] top-1 w-5 h-5 rounded-full bg-[#0a0a0c] border-2 border-blue-500 hidden md:block" />
            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 md:hidden" />

            <SpotlightCard className="glass p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => setSelectedExp(exp.id)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-gray-300 font-medium mt-1 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                    {exp.company}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 flex flex-col md:items-end text-sm text-gray-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {exp.shortDesc}
              </p>

              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedExp(exp.id); }}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 text-sm transition-colors"
              >
                {dict.experience.viewMore}
                <ExternalLink className="w-4 h-4" />
              </button>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={selectedExp !== null} onClose={() => setSelectedExp(null)}>
        {selectedExp !== null && (() => {
          const exp = experiences.find(e => e.id === selectedExp);
          if (!exp) return null;
          return (
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
              <div className="text-lg text-blue-400 mb-6">{exp.company}</div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-3">{dict.experience.roleDescLabel || 'Role Description'}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">{dict.experience.skillsLabel || 'Technologies & Skills'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </Modal>
    </Section>
  );
}
