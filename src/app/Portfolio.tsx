import { Dictionary, Language } from '@/i18n/dictionaries';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SocialLinksSection } from '@/components/sections/SocialLinksSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

interface PortfolioProps {
  dict: Dictionary;
  lang: Language;
}

export default function Portfolio({ dict, lang }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/30">
      <Navbar dict={dict} lang={lang} />
      
      <main>
        <HeroSection dict={dict} />
        <AboutSection dict={dict} />
        <SocialLinksSection dict={dict} />
        <EducationSection dict={dict} />
        <ExperienceSection dict={dict} />
        <SkillsSection dict={dict} />
        <CertificationsSection dict={dict} />
        <ProjectsSection dict={dict} />
        <ContactSection dict={dict} />
      </main>

      <Footer dict={dict} />
    </div>
  );
}
