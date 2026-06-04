export type Language = 'en' | 'pt';

export const dictionaries = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      social: 'Social',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Digital Craftsman & Innovator',
      subtitle: 'Building sophisticated, high-performance web experiences with modern technologies.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact Me',
    },
    about: {
      title: 'About Me',
      content: 'I am a passionate developer focused on creating elegant, user-centric digital solutions. With expertise in modern web technologies, I bridge the gap between design and engineering to build products that look great and perform flawlessly. Continuously learning and evolving with the tech landscape.',
    },
    social: {
      title: 'Connect With Me',
    },
    experience: {
      title: 'Professional Experience',
      viewMore: 'View Details',
    },
    education: {
      title: 'Academic Background',
      viewFull: 'View full education',
    },
    skills: {
      title: 'Technical Arsenal',
    },
    certifications: {
      title: 'Licenses & Certifications',
      viewAll: 'View all certifications',
    },
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
    },
    contact: {
      title: 'Get In Touch',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitBtn: 'Send Message',
    },
    footer: {
      copyright: '© 2026 Flavio Fox. All rights reserved.',
      backToTop: 'Back to Top',
    }
  },
  pt: {
    navbar: {
      home: 'Início',
      about: 'Sobre',
      social: 'Redes',
      experience: 'Experiência',
      education: 'Educação',
      skills: 'Habilidades',
      certifications: 'Certificações',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      title: 'Artesão Digital & Inovador',
      subtitle: 'Construindo experiências web sofisticadas e de alta performance com tecnologias modernas.',
      primaryCta: 'Ver Projetos',
      secondaryCta: 'Fale Comigo',
    },
    about: {
      title: 'Sobre Mim',
      content: 'Sou um desenvolvedor apaixonado focado em criar soluções digitais elegantes e centradas no usuário. Com experiência em tecnologias web modernas, faço a ponte entre design e engenharia para construir produtos que parecem ótimos e funcionam perfeitamente. Aprendendo e evoluindo continuamente com o cenário tecnológico.',
    },
    social: {
      title: 'Conecte-se Comigo',
    },
    experience: {
      title: 'Experiência Profissional',
      viewMore: 'Ver Detalhes',
    },
    education: {
      title: 'Formação Acadêmica',
      viewFull: 'Ver formação completa',
    },
    skills: {
      title: 'Arsenal Técnico',
    },
    certifications: {
      title: 'Licenças e Certificações',
      viewAll: 'Ver todas as certificações',
    },
    projects: {
      title: 'Projetos em Destaque',
      viewProject: 'Ver Projeto',
    },
    contact: {
      title: 'Entre em Contato',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      submitBtn: 'Enviar Mensagem',
    },
    footer: {
      copyright: '© 2026 Flavio Fox. Todos os direitos reservados.',
      backToTop: 'Voltar ao Topo',
    }
  }
};

export type Dictionary = typeof dictionaries.en;
