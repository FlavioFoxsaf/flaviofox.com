'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';

interface SkillsSectionProps {
  dict: Dictionary;
}

export function SkillsSection({ dict }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
      color: 'from-blue-500/20 to-blue-500/5',
      borderColor: 'border-blue-500/20 hover:border-blue-500/50',
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express', 'GraphQL', 'RESTful APIs', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500/20 to-green-500/5',
      borderColor: 'border-green-500/20 hover:border-green-500/50',
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Jest'],
      color: 'from-orange-500/20 to-orange-500/5',
      borderColor: 'border-orange-500/20 hover:border-orange-500/50',
    },
  ];

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {dict.skills.title}
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className={`glass p-8 rounded-3xl border ${category.borderColor} transition-colors relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, skillIdx) => (
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
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
