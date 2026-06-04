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
      title: 'Software Engineering and Systems Analysis and Development Student',
      subtitle: 'AWS Student Builders Group Co-Leader | Leadership & Team Management',
      primaryCta: 'View Skills',
      secondaryCta: 'Contact',
    },
    about: {
      title: 'About Me',
      contentShort: 'I have always been driven by the curiosity to understand how processes work and the determination to make things happen. Currently, I am pursuing a degree in Computer Engineering at SENAI CIMATEC and Systems Analysis and Development, combining academic structure with my practical background in management and communication.\n\nMy career path is marked by solid entrepreneurial experience...',
      contentFull: [
        'I have always been driven by the curiosity to understand how processes work and the determination to make things happen. Currently, I am pursuing a degree in Computer Engineering at SENAI CIMATEC and Systems Analysis and Development, combining academic structure with my practical background in management and communication.',
        'My career path is marked by solid entrepreneurial experience. As a former partner at a digital marketing agency, I was responsible for keeping the gears turning: from team leadership to conflict mediation to ensure high-quality results. This experience provided the maturity needed to understand business pain points and the discipline to manage complex workflows.',
        'I believe that technology only reaches its full potential when it is well communicated. Therefore, I see myself as a facilitator: someone who enjoys simplifying processes and disseminating knowledge, acting as a bridge between technical complexity and the real needs of those consuming innovation. In my daily routine, I apply programming logic alongside advanced productivity tools to gain agility and deliver practical solutions.',
        'I am constantly evolving, currently focusing on Cloud Computing (AWS). My goal is to apply my management experience and process-oriented vision to optimize workflows and facilitate technical communication within innovation environments.'
      ],
      readMore: 'Read Full Bio',
      stats: {
        education: { count: '3', label: 'Higher Education Degrees' },
        certifications: { count: '8', label: 'Certifications' }
      }
    },
    social: {
      title: 'Connect With Me',
    },
    experience: {
      title: 'Professional Experience',
      viewMore: 'View Details',
      roleDescLabel: 'Role Description',
      skillsLabel: 'Technologies & Skills',
      items: [
        {
          id: 2,
          role: 'Co-Leader',
          company: 'AWS Student Builders Group',
          period: '2026 - present',
          location: 'Salvador, BA',
          shortDesc: 'Co-Leader responsible for integrated operational management, mentoring sector leaders, speaking engagements, and driving external expansion initiatives.',
          fullDesc: 'My role as Vice Captain of the AWS Student Builder Group combines executive management and targeted preparation for the tech market. I lead the community overall, responsible for restructuring and brand positioning, while ensuring operational alignment through direct mentoring of sector leaders. Using my communication and public speaking skills, I act on the front lines as a speaker, disseminating technical and institutional knowledge to engage members and consolidate the group\'s relevance. Currently, I hold the strategic responsibility of leading external expansion through new projects, connecting the group to market demands. This immersion in leadership and execution gives me solid practical mastery of Cloud Computing and AWS culture, competitively preparing me for real-world challenges in the cloud industry.',
          skills: ['Amazon S3', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'Amazon DynamoDB', 'AWS IoT Core', 'Team Management', 'Strategic Thinking', 'Public Speaking', 'Interpersonal Communication', 'Project Management']
        },
        {
          id: 1,
          role: 'Co-Owner',
          company: 'FLY Social Midia',
          period: '2020 - 2022',
          location: 'Salvador, BA',
          shortDesc: 'Co-founder responsible for full strategic business management, team leadership, and direct client relationship.',
          fullDesc: 'My journey as a co-owner provided me with solid corporate maturity and a complete business vision. I was the main point of contact for clients, leading everything from initial outreach and negotiation to expectation alignment. In internal management, I developed strong leadership and people management skills, coordinating teams and closely monitoring workflow processes to ensure quality and integration from copywriting to design. Beyond operational leadership, I managed the business structure itself, including financial control, strategic planning, and high-impact executive decision-making.',
          skills: ['Team Management', 'Strategic Thinking', 'Public Speaking', 'Interpersonal Communication', 'CRM', 'Project Management']
        }
      ]
    },
    education: {
      title: 'Academic Background',
      viewFull: 'View full education',
      items: [
        {
          id: 1,
          degree: 'Software Engineering',
          institution: 'Estácio',
          period: 'Expected 2027',
          status: 'Current',
          desc: 'Comprehensive training covering the full software development lifecycle, including architecture, quality, scalability, and technical project management.'
        },
        {
          id: 2,
          degree: 'Computer Engineering',
          institution: 'Senai Cimatec',
          period: 'Expected 2028',
          status: 'Current',
          desc: 'Comprehensive computing background in software development, systems architecture, and emerging technologies, with strong analytical and problem-solving focus.'
        },
        {
          id: 3,
          degree: 'Systems Analysis and Development',
          institution: 'Estácio',
          period: 'Expected 2027',
          status: 'Current',
          desc: 'Market-oriented degree focusing on software development, systems analysis, databases, and best practices in software engineering.'
        },
        {
          id: 4,
          degree: 'High School',
          institution: 'Colégio Candido Portinari',
          period: 'Completed in 2017',
          status: 'Completed',
          desc: 'Foundational stage for developing academic, analytical, and interpersonal skills that formed the basis for my subsequent career in technology, leadership, and management.'
        }
      ]
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          title: 'Technology & Development',
          items: ['Amazon S3', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'Amazon DynamoDB', 'AWS IoT Core', 'HTML', 'CSS', 'JavaScript', 'Python', 'C'],
        },
        {
          title: 'Interpersonal Skills',
          items: ['Team Management', 'Strategic Thinking', 'Public Speaking', 'Interpersonal Communication', 'CRM', 'Team Leadership', 'Project Management'],
        },
        {
          title: 'Tools',
          items: ['Adobe Photoshop', 'Adobe Premiere', 'Microsoft Office'],
        },
        {
          title: 'Financial Market',
          items: ['CDB', 'LCI/LCA', 'Treasury', 'CRI/CRA & Debentures', 'Stocks & FIIs'],
        }
      ]
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
      title: 'Estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas',
      subtitle: 'Co-Líder do AWS Student Builders Group | Liderança e Gestão de Equipes',
      primaryCta: 'Ver Habilidades',
      secondaryCta: 'Contato',
    },
    about: {
      title: 'Sobre Mim',
      contentShort: 'Sempre fui movido pela curiosidade de entender como os processos funcionam e pela vontade de fazer as coisas acontecerem. Atualmente, curso Engenharia da Computação no SENAI CIMATEC e Análise e Desenvolvimento de Sistemas, unindo a visão estruturada da academia à minha bagagem prática em gestão e comunicação.\n\nMinha trajetória é marcada por uma sólida experiência empreendedora...',
      contentFull: [
        'Sempre fui movido pela curiosidade de entender como os processos funcionam e pela vontade de fazer as coisas acontecerem. Atualmente, curso Engenharia da Computação no SENAI CIMATEC e Análise e Desenvolvimento de Sistemas, unindo a visão estruturada da academia à minha bagagem prática em gestão e comunicação.',
        'Minha trajetória é marcada por uma sólida experiência empreendedora. Como ex-sócio de uma agência de marketing digital, assumi a responsabilidade de fazer a engrenagem rodar: da liderança de equipes à mediação de conflitos para garantir resultados. Essa vivência me trouxe a maturidade necessária para entender as dores de um negócio e a disciplina para gerir fluxos de trabalho complexos.',
        'Acredito que a tecnologia só alcança seu potencial máximo quando é bem comunicada. Por isso, me vejo como um facilitador: alguém que gosta de simplificar processos e disseminar conhecimento, atuando como ponte entre a complexidade técnica e as necessidades reais de quem consome a inovação. No meu dia a dia, utilizo a lógica de programação aliada a ferramentas de produtividade avançada para ganhar agilidade e entregar soluções práticas.',
        'Estou em constante evolução, atualmente focado em computação em nuvem (AWS). Meu objetivo é aplicar minha experiência em gestão e visão de processos para otimizar fluxos de trabalho e facilitar a comunicação técnica em ambientes de inovação.'
      ],
      readMore: 'Ler Biografia Completa',
      stats: {
        education: { count: '3', label: 'Graduações de Ensino Superior' },
        certifications: { count: '8', label: 'Certificações' }
      }
    },
    social: {
      title: 'Conecte-se Comigo',
    },
    experience: {
      title: 'Experiência Profissional',
      viewMore: 'Ver Detalhes',
      roleDescLabel: 'Descrição do Cargo',
      skillsLabel: 'Tecnologias e Competências',
      items: [
        {
          id: 2,
          role: 'Co-Leader',
          company: 'AWS Student Builders Group',
          period: '2026 - presente',
          location: 'Salvador, BA',
          shortDesc: 'Co-Leader responsável pela gestão operacional integrada, acompanhamento das lideranças de cada setor, atuação como palestrante e condução de iniciativas de expansão externa.',
          fullDesc: 'Minha atuação como Vice-Capitão do AWS Student Builder Group combina gestão executiva e preparação direcionada para o mercado de tecnologia. Atuo na liderança geral da comunidade, sendo responsável pela reestruturação e pelo posicionamento de marca do grupo, além de garantir o alinhamento operacional através do acompanhamento direto e direcionamento dos líderes de cada setor. Utilizando minha comunicação e oratória, atuo na linha de frente como palestrante, disseminando conhecimento técnico e institucional para engajar os membros e consolidar a relevância do grupo. Atualmente, assumo a responsabilidade estratégica de conduzir a expansão externa através de novos projetos, conectando o grupo às demandas do mercado. Essa imersão em liderança e execução me proporciona um sólido domínio prático em Cloud Computing e na cultura AWS, me capacitando de forma competitiva para os desafios reais da indústria de nuvem.',
          skills: ['Amazon S3', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'Amazon DynamoDB', 'AWS IoT Core', 'Gestão de Equipes', 'Pensamento Estratégico', 'Oratória', 'Comunicação Interpessoal', 'Gestão de Projetos']
        },
        {
          id: 1,
          role: 'Sócio Proprietário',
          company: 'FLY Social Midia',
          period: '2020 - 2022',
          location: 'Salvador, BA',
          shortDesc: 'Sócio-fundador responsável pela gestão integral e estratégica do negócio, liderança de equipes e relacionamento direto com clientes.',
          fullDesc: 'Minha trajetória como sócio-proprietário me proporcionou uma sólida maturidade corporativa e uma visão empresarial completa. Fui o principal ponto de contato com clientes, liderando desde a abordagem inicial e negociação até o alinhamento de expectativas. Na gestão interna, desenvolvi forte competência em liderança e gestão de pessoas, sendo responsável por coordenar equipes e acompanhar de perto todo o fluxo de processos, garantindo a qualidade e a integração desde a redação até o design. Além da liderança operacional, gerenciei a estrutura empresarial em si, o que inclui controle financeiro, planejamento estratégico e tomada de decisões executivas de alto impacto.',
          skills: ['Gestão de Equipes', 'Pensamento Estratégico', 'Oratória', 'Comunicação Interpessoal', 'Gestão de Relacionamento com o Cliente (CRM)', 'Gestão de Projetos']
        }
      ]
    },
    education: {
      title: 'Formação Acadêmica',
      viewFull: 'Ver formação completa',
      items: [
        {
          id: 1,
          degree: 'Engenharia de Software',
          institution: 'Estácio',
          period: 'Finalizando em 2027',
          status: 'Cursando',
          desc: 'Formação voltada para o ciclo completo de desenvolvimento de software, incluindo arquitetura, qualidade, escalabilidade e gestão de projetos tecnológicos.'
        },
        {
          id: 2,
          degree: 'Engenharia de Computação',
          institution: 'Senai Cimatec',
          period: 'Finalizando em 2028',
          status: 'Cursando',
          desc: 'Formação abrangente em computação, desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com forte base analítica e foco na resolução de problemas complexos.'
        },
        {
          id: 3,
          degree: 'Análise e Desenvolvimento de Sistemas',
          institution: 'Estácio',
          period: 'Finalizando em 2027',
          status: 'Cursando',
          desc: 'Formação orientada ao mercado, com foco em desenvolvimento de software, análise de sistemas, bancos de dados e boas práticas de engenharia de software.'
        },
        {
          id: 4,
          degree: 'Ensino Médio',
          institution: 'Colégio Candido Portinari',
          period: 'Finalizado em 2017',
          status: 'Completo',
          desc: 'Etapa fundamental para o desenvolvimento das competências acadêmicas, analíticas e interpessoais que serviram de base para a trajetória posterior em tecnologia, liderança e gestão.'
        }
      ]
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          title: 'Tecnologia e Desenvolvimento',
          items: ['Amazon S3', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'Amazon DynamoDB', 'AWS IoT Core', 'HTML', 'CSS', 'JavaScript', 'Python', 'C'],
        },
        {
          title: 'Competências Interpessoais',
          items: ['Gestão de Equipes', 'Pensamento Estratégico', 'Oratória', 'Comunicação Interpessoal', 'Gestão de Relacionamento com o Cliente (CRM)', 'Gestão de Projetos'],
        },
        {
          title: 'Ferramentas',
          items: ['Adobe Photoshop', 'Adobe Premiere', 'Microsoft Office'],
        },
        {
          title: 'Mercado Financeiro',
          items: ['CDB', 'LCI/LCA', 'Tesouro', 'CRI/CRA e Debêntures', 'Ações e FIIs'],
        }
      ]
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
