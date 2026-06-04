'use client';

import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { ExternalLink, Award, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface CertificationsSectionProps {
  dict: Dictionary;
}

export function CertificationsSection({ dict }: CertificationsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });
  
  const [isAllModalOpen, setIsAllModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const certifications = [...(dict.certifications.items || [])].sort((a, b) => {
    const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || '0');
    const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || '0');
    return yearB - yearA;
  });

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
            onClick={() => setIsAllModalOpen(true)}
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
              <div 
                className="glass p-6 rounded-2xl h-full border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert.id)}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                <Award className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>
                <div className="text-green-400 font-medium text-sm mb-4">
                  {cert.issuer}
                </div>
                <div className="text-xs text-gray-500 font-mono mt-auto">
                  {dict.certifications.issued}: {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isAllModalOpen} onClose={() => setIsAllModalOpen(false)} title={dict.certifications.title}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => {
                setIsAllModalOpen(false);
                setTimeout(() => setSelectedCert(cert.id), 300); // Wait for modal close animation
              }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 cursor-pointer hover:bg-white/10 transition-colors"
            >
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

      <Modal isOpen={selectedCert !== null} onClose={() => setSelectedCert(null)}>
        {selectedCert !== null && (() => {
          const cert = certifications.find(c => c.id === selectedCert);
          if (!cert) return null;
          return (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{cert.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{cert.name}</h3>
                  <div className="text-green-400 font-medium mt-1">{cert.issuer}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {dict.certifications.issued}: {cert.date}
                </div>
                {cert.hours && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {dict.certifications.hours}: {cert.hours}
                    </div>
                  </>
                )}
              </div>

              {cert.image && (
                <div className="mb-6 relative w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-4">
                  <img src={cert.image} alt={cert.name} className="object-contain w-full h-auto rounded-lg shadow-lg" />
                </div>
              )}

              <div>
                <h4 className="text-white font-medium mb-3">{dict.certifications.aboutCert}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {cert.url ? (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-green-500/20 text-white font-medium rounded-lg transition-colors w-full sm:w-auto hover:text-green-300 border border-transparent hover:border-green-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {dict.certifications.viewCertificate}
                  </a>
                </div>
              ) : (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      const toast = document.createElement('div');
                      toast.className = 'fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] px-6 py-3 rounded-full glass-strong border border-white/10 text-white font-medium shadow-lg flex items-center gap-2 text-sm text-center w-[90%] max-w-sm';
                      toast.innerText = dict.certifications.noLinkMessage || 'Link indisponível.';
                      document.body.appendChild(toast);
                      setTimeout(() => {
                        toast.style.opacity = '0';
                        toast.style.transition = 'opacity 0.3s ease';
                        setTimeout(() => toast.remove(), 300);
                      }, 3000);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-gray-400 font-medium rounded-lg w-full sm:w-auto cursor-help hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 opacity-50" />
                    {dict.certifications.viewCertificate}
                  </button>
                </div>
              )}
            </div>
          );
        })()}
      </Modal>
    </Section>
  );
}
