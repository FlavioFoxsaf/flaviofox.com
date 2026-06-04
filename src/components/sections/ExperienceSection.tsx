'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceSectionProps {
  dict: Dictionary;
}

export function ExperienceSection({ dict }: ExperienceSectionProps) {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  // Placeholder experiences
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      period: '2023 - Present',
      location: 'Remote',
      shortDesc: 'Leading the development of highly scalable web applications using Next.js and Node.js. Managing a team of 4 developers.',
      fullDesc: 'As a Senior Software Engineer, I am responsible for architecture decisions, code reviews, and leading the frontend development team. Key achievements include improving application performance by 40% and successfully migrating a legacy monolithic application to a microservices architecture.',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Agency',
      period: '2020 - 2023',
      location: 'New York, NY',
      shortDesc: 'Developed and maintained various client projects, from e-commerce platforms to custom dashboards.',
      fullDesc: 'Worked on multiple high-profile client projects, delivering robust full-stack solutions. Collaborated closely with designers and product managers to ensure high-quality user experiences. Implemented automated testing that reduced production bugs by 30%.',
      skills: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'Creative Web Studio',
      period: '2018 - 2020',
      location: 'London, UK',
      shortDesc: 'Created pixel-perfect, responsive interfaces for marketing websites and landing pages.',
      fullDesc: 'Focused on delivering visually stunning and highly interactive web experiences. Specialized in CSS animations, accessibility standards, and cross-browser compatibility.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Framer Motion']
    }
  ];

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

            <div className="glass p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => setSelectedExp(exp.id)}>
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
            </div>
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
                  <h4 className="text-white font-medium mb-3">Role Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">Technologies & Skills</h4>
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
