'use client';

import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { ExternalLink, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificationsSectionProps {
  dict: Dictionary;
}

export function CertificationsSection({ dict }: CertificationsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const certifications = [
    { id: 1, name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023', icon: '☁️' },
    { id: 2, name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', date: '2022', icon: '🌐' },
    { id: 3, name: 'Meta Advanced React', issuer: 'Meta', date: '2021', icon: '⚛️' },
    { id: 4, name: 'Certified Kubernetes Administrator', issuer: 'CNCF', date: '2023', icon: '🚢' },
    { id: 5, name: 'MongoDB Certified Developer', issuer: 'MongoDB', date: '2020', icon: '🍃' },
    { id: 6, name: 'TypeScript Deep Dive', issuer: 'Frontend Masters', date: '2021', icon: '📘' },
  ];

  return (
    <Section id="certifications" className="overflow-hidden">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {dict.certifications.title}
          </h2>
          <div className="w-20 h-1 bg-green-500 rounded-full" />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors text-sm"
          >
            {dict.certifications.viewAll}
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pb-8" style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}>
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_28%] min-w-0"
            >
              <div className="glass p-6 rounded-2xl h-full border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                <Award className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>
                <div className="text-gray-400 text-sm mb-4">
                  {cert.issuer}
                </div>
                <div className="text-xs text-gray-500 font-mono mt-auto">
                  Issued: {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={dict.certifications.title}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="text-3xl">{cert.icon}</div>
              <div>
                <h4 className="text-white font-bold text-sm">{cert.name}</h4>
                <div className="text-gray-400 text-xs mt-1">{cert.issuer}</div>
                <div className="text-gray-500 text-xs mt-2">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </Section>
  );
}
