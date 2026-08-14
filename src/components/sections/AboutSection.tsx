'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { ExternalLink } from 'lucide-react';
import { SpotlightButton } from '@/components/ui/SpotlightButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface AboutSectionProps {
  dict: Dictionary;
}

export function AboutSection({ dict }: AboutSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-strong group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <Image 
            src="/fotoff.jpg" 
            alt="Flavio Fox" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
            {dict.about.title}
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            <p>{dict.about.contentShort}</p>
          </div>
          
          <SpotlightButton 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium flex items-center gap-2 text-sm transition-colors mt-6 w-fit"
          >
            {dict.about.readMore}
            <ExternalLink className="w-4 h-4" />
          </SpotlightButton>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            <SpotlightCard 
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors group"
            >
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">{dict.about.stats?.education.count || '3'}</div>
              <div className="text-sm text-gray-400 relative z-10">{dict.about.stats?.education.label || 'Higher Education Degrees'}</div>
            </SpotlightCard>
            <SpotlightCard 
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass p-6 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors group"
            >
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">{dict.about.stats?.certifications.count || '8'}</div>
              <div className="text-sm text-gray-400 relative z-10">{dict.about.stats?.certifications.label || 'Certifications'}</div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={dict.about.title}>
        <div className="space-y-6">
          {dict.about.contentFull.map((paragraph, idx) => (
            <p key={idx} className="text-gray-300 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </Section>
  );
}
