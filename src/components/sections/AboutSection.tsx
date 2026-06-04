'use client';

import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';

interface AboutSectionProps {
  dict: Dictionary;
}

export function AboutSection({ dict }: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-strong group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <span className="text-sm tracking-widest uppercase">Photo Placeholder</span>
          </div>
          {/* Add real image later: <Image src="..." alt="Flavio Fox" fill className="object-cover" /> */}
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
            {dict.about.title}
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>{dict.about.content}</p>
            {/* Future placeholders for more detailed bio */}
            <p className="opacity-70 text-sm italic mt-8 border-l-2 border-blue-500/50 pl-4">
              "Placeholder for a personal quote, philosophy, or additional background information that adds depth to the profile."
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
