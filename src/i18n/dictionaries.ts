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
      primaryCta: 'Skills',
      secondaryCta: 'Contact',
    },
    about: {
      title: 'About Me',
      contentShort: 'I have always been driven by the curiosity to understand how processes work and the determination to make things happen. Currently, I am pursuing a degree in Computer Engineering at SENAI CIMATEC, Software Engineering, and Systems Analysis and Development, combining academic structure with my practical background in management and communication.\n\nMy career path is marked by solid entrepreneurial experience...',
      contentFull: [
        'I have always been driven by the curiosity to understand how processes work and the determination to make things happen. Currently, I am pursuing a degree in Computer Engineering at SENAI CIMATEC, Software Engineering, and Systems Analysis and Development, combining academic structure with my practical background in management and communication.',
        'My career path is marked by solid entrepreneurial experience. As a former partner at a digital marketing agency, I was responsible for keeping the gears turning: from team leadership to conflict mediation to ensure high-quality results. This experience provided the maturity needed to understand business pain points and the discipline to manage complex workflows.',
        'I believe that technology only reaches its full potential when it is well communicated. Therefore, I see myself as a facilitator: someone who enjoys simplifying processes and disseminating knowledge, acting as a bridge between technical complexity and the real needs of those consuming innovation. In my daily routine, I apply programming logic alongside advanced productivity tools to gain agility and deliver practical solutions.',
        'I am constantly evolving, currently focusing on Cloud Computing (AWS). My goal is to apply my management experience and process-oriented vision to optimize workflows and facilitate technical communication within innovation environments.'
      ],
      readMore: 'Learn more',
      stats: {
        education: { count: '3', label: 'Higher Education Degrees' },
        certifications: { count: '12', label: 'Certifications' }
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
          items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub', 'HTML', 'CSS', 'JavaScript', 'Python', 'C'],
        },
        {
          title: 'Cloud Computing',
          items: ['Amazon S3', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'Amazon DynamoDB', 'AWS IoT Core'],
        },
        {
          title: 'Interpersonal Skills',
          items: ['Team Management', 'Strategic Thinking', 'Public Speaking', 'Interpersonal Communication', 'Customer Relationship Management', 'Team Leadership', 'Project Management'],
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
      title: 'Courses & Certifications',
      viewAll: 'View all certifications',
      viewCertificate: 'View Certificate',
      issued: 'Issued',
      hours: 'Hours',
      aboutCert: 'About this Certification',
      noLinkMessage: 'This institution does not provide a validation link for certificates.',
      items: [
        {
          id: 1,
          name: 'III Scientific and Technological Research Evaluation Seminar (SAPCT), II High-Performance Computing Integration and Training Workshop (ICPAD) & VIII NVIDIA GPU Workshop',
          issuer: 'NVIDIA',
          hours: '16h',
          date: '2018',
          image: '/certificados/NVIDIA.png',
          icon: '🖥️',
          desc: 'The immersion in the NVIDIA Workshop, ICPAD, and SAPCT expanded my technical vision on scientific research and high-performance computing, fundamental areas in the current scenario. This practical training gave me a solid foundation to understand the impact of GPU architecture and advanced hardware on the optimization of complex systems.',
          url: 'https://doity.com.br/area-do-participante/certificado'
        },
        {
          id: 2,
          name: 'Data Center, Cloud, and Security',
          issuer: 'Senai Cimatec University',
          hours: '03h',
          date: '2021',
          image: '/certificados/Data-Center.png',
          icon: '☁️',
          desc: 'Participation in the Data Center, Cloud, and Security Workshop refined my perception of modern infrastructure architecture and critical data protection requirements. This immersion was essential to understand the synergy between cloud environments and security, empowering me to design much more resilient and efficient computing systems.',
          url: 'https://www.even3.com.br/documentos/imprimir?i=1955969.8497165.6.8.311343683704146&cc=9D971ABA-1449-41A0-85E4-667EF3E0C156'
        },
        {
          id: 3,
          name: 'Social Media for Business',
          issuer: 'SEBRAE',
          hours: '03h',
          date: '2021',
          image: '/certificados/Sua.png',
          icon: '📱',
          desc: 'Completing the "Social Media for Business" course broadened my strategic vision on digital positioning and audience engagement through SEBRAE. This immersion empowered me to understand the dynamics of social media as business tools, optimizing communication and integrating marketing strategies to leverage market results.',
          url: 'https://certificados.sebrae.com.br/resultado/656504fcce9fe75f02677790'
        },
        {
          id: 4,
          name: 'Intellectual Property for Startups',
          issuer: 'SEBRAE',
          hours: '02h',
          date: '2021',
          image: '/certificados/Propriedade.png',
          icon: '🛡️',
          desc: 'Completing the "Intellectual Property for Startups" course deepened my understanding of the legal protection of innovations, brands, and patents in the technology ecosystem. This immersion by SEBRAE gave me strategic clarity to mitigate legal risks and ensure the market value of products and software under development.',
          url: 'https://certificados.sebrae.com.br/resultado/65652545ce9fe75f02685d18'
        },
        {
          id: 5,
          name: 'Innovation',
          issuer: 'SEBRAE',
          hours: '03h',
          date: '2021',
          image: '/certificados/Inovação.png',
          icon: '💡',
          desc: 'Completing the "Innovation" course expanded my vision on how to transform creative ideas into practical and competitive market solutions through SEBRAE. This immersion developed my agile mindset to identify continuous improvement opportunities, optimize processes, and apply innovative concepts in engineering and technology projects.',
          url: 'https://certificados.sebrae.com.br/resultado/656504eace9fe75f02675d8d'
        },
        {
          id: 6,
          name: 'Entrepreneurial Mindset',
          issuer: 'SEBRAE',
          hours: '02h',
          date: '2021',
          image: '/certificados/empreendedora.png',
          icon: '🧠',
          desc: 'Completing the "Entrepreneurial Mindset" course stimulated my proactive stance and leadership capacity in the face of organizational and market challenges. This training by SEBRAE enhanced my vision of risk management and strategic decision-making, essential skills both for developing new projects and efficiently solving daily corporate problems.',
          url: 'https://certificados.sebrae.com.br/resultado/656504fbce9fe75f02677761'
        },
        {
          id: 7,
          name: 'Cisco Academy Day',
          issuer: 'Cisco',
          hours: '02h',
          date: '2019',
          image: '/certificados/Cisco.png',
          icon: '🌐',
          desc: 'Participating in the Cisco Academy Day updated my perception of connectivity trends, network infrastructure, and information security through one of the largest global references in the sector. This immersion at SENAI CIMATEC was excellent for connecting hardware and data traffic concepts, essential for planning integrated and efficient system architectures.',
          url: 'https://www.even3.com.br/documentos/imprimir?i=175634.8497165.6.8.52904743569297&cc=AD999B50-410D-4DC4-BF35-76F2658BEA1F'
        },
        {
          id: 8,
          name: 'Impact Innovation for Startups',
          issuer: 'SEBRAE',
          hours: '03h',
          date: '2021',
          image: '/certificados/impacto.png',
          icon: '🚀',
          desc: 'Completing the "Impact Innovation for Startups" course deepened my perception of developing technological solutions aimed at solving real and scalable market pains. This immersion promoted by SEBRAE qualified me to structure consistent value propositions with strong operational impact, connecting innovation concepts to the sustainable growth of new businesses.',
          url: 'https://certificados.sebrae.com.br/resultado/6565257cce9fe75f0268bb5d'
        },
        {
          id: 9,
          name: 'Time Management',
          issuer: 'Harvard Business Impact │ Santander Open Academy',
          hours: '02h',
          date: '2026',
          image: '/certificados/Gestão.png',
          icon: '⏱️',
          desc: 'Completing the "Time Management" course refined my ability to organize and strategically prioritize tasks in high-demand environments, under the Santander Open Academy seal with Harvard Business Publishing content. This immersion empowered me to optimize workflows and maximize daily productivity, crucial skills for effective leadership and high-performance delivery of complex projects.',
          url: null
        },
        {
          id: 10,
          name: 'Master AI with Gemini',
          issuer: 'Google │ Santander Open Academy',
          hours: '02h',
          date: '2026',
          image: '/certificados/Gemini.png',
          icon: '🤖',
          desc: 'Completing the "Master AI with Gemini" course boosted my ability to integrate Generative Artificial Intelligence into technical and analytical workflows through Santander Open Academy with official Google content. This training gave me mastery in prompt engineering and routine optimization using Gemini, qualifying me to accelerate software development and intelligent problem-solving.',
          url: null
        },
        {
          id: 11,
          name: 'Responsible Prompting - Maximize AI in your business',
          issuer: 'Microsoft │ Santander Open Academy │ Founderz',
          hours: '08h',
          date: '2026',
          image: '/certificados/Prompting.png',
          icon: '💬',
          desc: 'Completing the "Responsible Prompting: Maximize AI in your business" course deepened my ability to structure advanced and ethical commands for Artificial Intelligence models, under the Santander Open Academy seal with Microsoft and Founderz content. This 8-hour immersion qualified me to design automated and secure solutions, focused on optimizing operational efficiency and generating strategic value aligned with the best tech market practices.',
          url: null
        },
        {
          id: 12,
          name: 'High-Performance Leadership - Lessons from Formula 1',
          issuer: 'Santander Open Academy',
          hours: '08h',
          date: '2026',
          image: '/certificados/Liderança.png',
          icon: '🏎️',
          desc: 'Completing the "High-Performance Leadership: Lessons from Formula 1®" course connected elite management strategies to my vision of leadership and engineering, under the Santander Open Academy seal. This 8-hour immersion empowered me to understand the synergy of multidisciplinary teams under extreme pressure, improving my decision-making and the search for efficiency and continuous improvement in complex projects.',
          url: null
        }
      ]
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewDemo: 'View Live Project',
      inDevelopment: 'IN DEVELOPMENT',
      items: [
        {
          id: 1,
          title: 'Personal Website (Portfolio)',
          category: 'Frontend',
          shortDesc: 'Modern and responsive professional hub, designed to unify technical trajectory and skills in a digital showcase.',
          fullDesc: 'Tailor-made web solution created to transform a traditional resume into an interactive and dynamic digital experience. The project prioritizes a lightweight architecture, intuitive navigation, and fast loading to optimize the time of recruiters and business partners, ensuring a strategic, clean, and conversion-focused professional positioning.',
          image: 'gradient-to-br from-orange-900 to-indigo-900',
          imageUrl: '/Preview-Projetos/Preview-Portfolio.png',
          githubUrl: 'https://github.com/FlavioFoxsaf/flaviofox.com',
          demoUrl: 'https://flaviofox.com',
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostCSS', 'Git'],
        },
        {
          id: 2,
          title: 'Financial Dashboard',
          category: 'Frontend',
          shortDesc: 'Real-time data visualization dashboard for financial metrics.',
          fullDesc: 'Created an interactive dashboard for visualizing complex financial data sets. Integrated websockets for real-time updates and implemented complex chart components that are both performant and accessible.',
          image: 'gradient-to-br from-emerald-900 to-teal-900',
          tags: ['React', 'D3.js', 'WebSockets', 'Framer Motion'],
        },
        {
          id: 3,
          title: 'AI Content Generator',
          category: 'SaaS',
          shortDesc: 'AI-powered writing assistant using OpenAI API.',
          fullDesc: 'Built a SaaS application that leverages AI to generate high-quality marketing copy, blog posts, and social media content. Includes user authentication, subscription management, and a rich text editor.',
          image: 'gradient-to-br from-purple-900 to-pink-900',
          tags: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
        },
        {
          id: 4,
          title: 'Mobile Fitness App',
          category: 'Mobile',
          shortDesc: 'Cross-platform mobile application for workout tracking.',
          fullDesc: 'Developed a comprehensive fitness tracking app with custom workout plans, progress visualization, and social sharing features. Available on both iOS and Android.',
          image: 'gradient-to-br from-orange-900 to-red-900',
          tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'I\'m always open to new connections, projects, and opportunities.\nGet in touch and let\'s build something relevant together.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      subjectPlaceholder: 'Project Inquiry',
      messagePlaceholder: "Hello, I'd like to talk about...",
      submitBtn: 'Send Message',
      emailCopied: 'Email copied!',
      whatsappAction: 'Send a message',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
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
      primaryCta: 'Habilidades',
      secondaryCta: 'Contato',
    },
    about: {
      title: 'Sobre Mim',
      contentShort: 'Sempre fui movido pela curiosidade de entender como os processos funcionam e pela vontade de fazer as coisas acontecerem. Atualmente, curso Engenharia da Computação no SENAI CIMATEC, Engenharia de Software e Análise e Desenvolvimento de Sistemas, unindo a visão estruturada da academia à minha bagagem prática em gestão e comunicação.\n\nMinha trajetória é marcada por uma sólida experiência empreendedora...',
      contentFull: [
        'Sempre fui movido pela curiosidade de entender como os processos funcionam e pela vontade de fazer as coisas acontecerem. Atualmente, curso Engenharia da Computação no SENAI CIMATEC, Engenharia de Software e Análise e Desenvolvimento de Sistemas, unindo a visão estruturada da academia à minha bagagem prática em gestão e comunicação.',
        'Minha trajetória é marcada por uma sólida experiência empreendedora. Como ex-sócio de uma agência de marketing digital, assumi a responsabilidade de fazer a engrenagem rodar: da liderança de equipes à mediação de conflitos para garantir resultados. Essa vivência me trouxe a maturidade necessária para entender as dores de um negócio e a disciplina para gerir fluxos de trabalho complexos.',
        'Acredito que a tecnologia só alcança seu potencial máximo quando é bem comunicada. Por isso, me vejo como um facilitador: alguém que gosta de simplificar processos e disseminar conhecimento, atuando como ponte entre a complexidade técnica e as necessidades reais de quem consome a inovação. No meu dia a dia, utilizo a lógica de programação aliada a ferramentas de produtividade avançada para ganhar agilidade e entregar soluções práticas.',
        'Estou em constante evolução, atualmente focado em computação em nuvem (AWS). Meu objetivo é aplicar minha experiência em gestão e visão de processos para otimizar fluxos de trabalho e facilitar a comunicação técnica em ambientes de inovação.'
      ],
      readMore: 'Saiba mais',
      stats: {
        education: { count: '3', label: 'Graduações de Ensino Superior' },
        certifications: { count: '12', label: 'Certificações' }
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
          items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub', 'HTML', 'CSS', 'JavaScript', 'Python', 'C'],
        },
        {
          title: 'Cloud Computing',
          items: ['Amazon S3', 'Amazon EC2', 'Amazon VPC', 'AWS Lambda', 'Amazon DynamoDB', 'AWS IoT Core'],
        },
        {
          title: 'Competências Interpessoais',
          items: ['Gestão de Equipes', 'Pensamento Estratégico', 'Oratória', 'Comunicação Interpessoal', 'Gestão de Relacionamento com o Cliente', 'Gestão de Projetos'],
        },
        {
          title: 'Ferramentas',
          items: ['Adobe Photoshop', 'Adobe Premiere', 'Microsoft Office'],
        },
        {
          title: 'Mercado Financeiro',
          items: ['CDB', 'LCI/LCA', 'Tesouro Direto', 'CRI/CRA & Debêntures', 'Ações & FIIs'],
        }
      ]
    },
    certifications: {
      title: 'Cursos e Certificados',
      viewAll: 'Ver todas as certificações',
      viewCertificate: 'Ver certificado',
      issued: 'Emitido em',
      hours: 'Carga horária',
      aboutCert: 'Sobre esta Certificação',
      noLinkMessage: 'Essa instituição não possui link de validação de certificados.',
      items: [
        {
          id: 1,
          name: 'III Seminário de Avaliação de Pesquisa Científica e Tecnológica (SAPCT), II Workshop de Integração e Capacitação em Computação de Alto Desempenho (ICPAD) & VIII NVIDIA GPU Workshop',
          issuer: 'NVIDIA',
          hours: '16h',
          date: '2018',
          image: '/certificados/NVIDIA.png',
          icon: '🖥️',
          desc: 'A imersão no Workshop NVIDIA, ICPAD e SAPCT expandiu minha visão técnica sobre pesquisa científica e processamento de alto desempenho, áreas fundamentais no cenário atual. Essa capacitação prática me deu uma base sólida para compreender o impacto da arquitetura de GPUs e do hardware avançado na otimização de sistemas complexos.',
          url: 'https://doity.com.br/area-do-participante/certificado'
        },
        {
          id: 2,
          name: 'Data Center, Cloud e Segurança',
          issuer: 'Universidade Senai Cimatec',
          hours: '03h',
          date: '2021',
          image: '/certificados/Data-Center.png',
          icon: '☁️',
          desc: 'A participação no Workshop Data Center, Cloud e Segurança refinou minha percepção sobre a arquitetura de infraestruturas modernas e as exigências críticas de proteção de dados. Essa imersão foi essencial para compreender a sinergia entre ambientes de nuvem e segurança, me capacitando a projetar sistemas computacionais muito mais resilientes e eficientes.',
          url: 'https://www.even3.com.br/documentos/imprimir?i=1955969.8497165.6.8.311343683704146&cc=9D971ABA-1449-41A0-85E4-667EF3E0C156'
        },
        {
          id: 3,
          name: 'Sua empresa nas redes sociais',
          issuer: 'SEBRAE',
          hours: '03h',
          date: '2021',
          image: '/certificados/Sua.png',
          icon: '📱',
          desc: 'A conclusão do curso "Sua empresa nas redes sociais" ampliou minha visão estratégica sobre posicionamento digital e engajamento de público através do SEBRAE. Essa imersão me capacitou a compreender a dinâmica das mídias sociais como ferramentas de negócios, otimizando a comunicação e integrando estratégias de marketing para alavancar resultados no mercado.',
          url: 'https://certificados.sebrae.com.br/resultado/656504fcce9fe75f02677790'
        },
        {
          id: 4,
          name: 'Propriedade intelectual para Startups',
          issuer: 'SEBRAE',
          hours: '02h',
          date: '2021',
          image: '/certificados/Propriedade.png',
          icon: '🛡️',
          desc: 'A conclusão do curso "Propriedade intelectual para Startups" aprofundou meu entendimento sobre a proteção legal de inovações, marcas e patentes no ecossistema de tecnologia. Essa imersão pelo SEBRAE me deu clareza estratégica para mitigar riscos jurídicos e garantir o valor de mercado de produtos e softwares em desenvolvimento.',
          url: 'https://certificados.sebrae.com.br/resultado/65652545ce9fe75f02685d18'
        },
        {
          id: 5,
          name: 'Inovação',
          issuer: 'SEBRAE',
          hours: '03h',
          date: '2021',
          image: '/certificados/Inovação.png',
          icon: '💡',
          desc: 'A conclusão do curso "Inovação" expandiu minha visão sobre como transformar ideias criativas em soluções práticas e competitivas para o mercado através do SEBRAE. Essa imersão desenvolveu minha mentalidade ágil para identificar oportunidades de melhoria contínua, otimizar processos e aplicar conceitos inovadores no desenvolvimento de projetos de engenharia e tecnologia.',
          url: 'https://certificados.sebrae.com.br/resultado/656504eace9fe75f02675d8d'
        },
        {
          id: 6,
          name: 'Como agir de maneira empreendedora',
          issuer: 'SEBRAE',
          hours: '02h',
          date: '2021',
          image: '/certificados/empreendedora.png',
          icon: '🧠',
          desc: 'A conclusão do curso "Como agir de maneira empreendedora" estimulou minha postura proativa e a capacidade de liderança frente a desafios organizacionais e de mercado. Essa capacitação pelo SEBRAE aprimorou minha visão de gerenciamento de riscos e tomada de decisão estratégica, competências essenciais tanto para o desenvolvimento de novos projetos quanto para a resolução eficiente de problemas no dia a dia corporativo.',
          url: 'https://certificados.sebrae.com.br/resultado/656504fbce9fe75f02677761'
        },
        {
          id: 7,
          name: 'Cisco Academy Day',
          issuer: 'Cisco',
          hours: '02h',
          date: '2019',
          image: '/certificados/Cisco.png',
          icon: '🌐',
          desc: 'A participação no evento Cisco Academy Day atualizou minha percepção sobre as tendências de conectividade, infraestrutura de redes e segurança da informação através de uma das maiores referências globais do setor. Essa imersão realizada no SENAI CIMATEC foi excelente para conectar conceitos de hardware e tráfego de dados, essenciais para o planejamento de arquiteturas de sistemas integradas e eficientes.',
          url: 'https://www.even3.com.br/documentos/imprimir?i=175634.8497165.6.8.52904743569297&cc=AD999B50-410D-4DC4-BF35-76F2658BEA1F'
        },
        {
          id: 8,
          name: 'Inovação de impacto para Startups',
          issuer: 'SEBRAE',
          hours: '03h',
          date: '2021',
          image: '/certificados/impacto.png',
          icon: '🚀',
          desc: 'A conclusão do curso "Inovação de impacto para Startups" aprofundou minha percepção sobre o desenvolvimento de soluções tecnológicas direcionadas à resolução de dores reais e escaláveis do mercado. Essa imersão promovida pelo SEBRAE me qualificou a estruturar propostas de valor consistentes e de forte impacto operacional, conectando conceitos de inovação ao crescimento sustentável de novos negócios.',
          url: 'https://certificados.sebrae.com.br/resultado/6565257cce9fe75f0268bb5d'
        },
        {
          id: 9,
          name: 'Gestão do Tempo',
          issuer: 'Harvard Business Impact │ Santander Open Academy',
          hours: '02h',
          date: '2026',
          image: '/certificados/Gestão.png',
          icon: '⏱️',
          desc: 'A conclusão do curso "Gestão do Tempo" refinou minha habilidade de organização e priorização estratégica de tarefas em ambientes de alta demanda, sob o selo do Santander Open Academy com conteúdo Harvard Business Publishing. Essa imersão me capacitou a otimizar fluxos de trabalho e maximizar a produtividade diária, competências cruciais para a liderança eficaz e entrega de projetos complexos com alta performance.',
          url: null
        },
        {
          id: 10,
          name: 'Domine a IA com Gemini',
          issuer: 'Google │ Santander Open Academy',
          hours: '02h',
          date: '2026',
          image: '/certificados/Gemini.png',
          icon: '🤖',
          desc: 'A conclusão do curso "Domine a IA com Gemini" impulsionou minha capacidade de integrar Inteligência Artificial Generativa aos fluxos de trabalho técnicos e analíticos através do Santander Open Academy com conteúdo oficial da Google. Essa capacitação me proporcionou o domínio em engenharia de prompts e otimização de rotinas utilizando o Gemini, me qualificando para acelerar o desenvolvimento de software e a resolução inteligente de problemas.',
          url: null
        },
        {
          id: 11,
          name: 'Prompting Responsável - Maximizar a IA no seu negócio',
          issuer: 'Microsoft │ Santander Open Academy │ Founderz',
          hours: '08h',
          date: '2026',
          image: '/certificados/Prompting.png',
          icon: '💬',
          desc: 'A conclusão do curso "Prompting Responsável: Maximizar a IA no seu negócio" aprofundou minha capacidade de estruturar comandos avançados e éticos para modelos de Inteligência Artificial, sob o selo do Santander Open Academy com conteúdo da Microsoft e Founderz. Essa imersão de 8 horas me qualificou a desenhar soluções automatizadas e seguras, focadas em otimizar a eficiência operacional e gerar valor estratégico alinhado às melhores práticas do mercado de tecnologia.',
          url: null
        },
        {
          id: 12,
          name: 'Liderança de alta performance - Lições da Formula 1',
          issuer: 'Santander Open Academy',
          hours: '08h',
          date: '2026',
          image: '/certificados/Liderança.png',
          icon: '🏎️',
          desc: 'A conclusão do curso "Liderança de alta performance: Lições da Formula 1®" conectou estratégias de gerenciamento de elite à minha visão de liderança e engenharia, sob o selo do Santander Open Academy. Essa imersão de 8 horas me capacitou a compreender a sinergia de equipes multidisciplinares sob extrema pressão, aprimorando minha tomada de decisão e a busca por eficiência e melhoria contínua em projetos complexos.',
          url: null
        }
      ]
    },
    projects: {
      title: 'Projetos',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver código',
      viewDemo: 'Visualizar projeto',
      inDevelopment: 'EM DESENVOLVIMENTO',
      items: [
        {
          id: 1,
          title: 'Site Pessoal (Portfólio)',
          category: 'Frontend',
          shortDesc: 'Hub profissional moderno e responsivo, projetado para unificar a trajetória técnica e competências em uma vitrine digital.',
          fullDesc: 'Solução web sob medida criada para transformar um currículo tradicional em uma experiência digital interativa e dinâmica. O projeto prioriza uma arquitetura leve, navegação intuitiva e carregamento rápido para otimizar o tempo de recrutadores e parceiros de negócios, garantindo um posicionamento profissional estratégico, limpo e focado na conversão de oportunidades.',
          image: 'gradient-to-br from-orange-900 to-indigo-900',
          imageUrl: '/Preview-Projetos/Preview-Portfolio.png',
          githubUrl: 'https://github.com/FlavioFoxsaf/flaviofox.com',
          demoUrl: 'https://flaviofox.com',
          tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostCSS', 'Git'],
        },
        {
          id: 2,
          title: 'Financial Dashboard',
          category: 'Frontend',
          shortDesc: 'Dashboard de visualização de dados em tempo real para métricas financeiras.',
          fullDesc: 'Dashboard interativo criado para visualizar conjuntos complexos de dados financeiros. Integração com websockets para atualizações em tempo real e implementação de componentes de gráficos complexos, performáticos e acessíveis.',
          image: 'gradient-to-br from-emerald-900 to-teal-900',
          tags: ['React', 'D3.js', 'WebSockets', 'Framer Motion'],
        },
        {
          id: 3,
          title: 'AI Content Generator',
          category: 'SaaS',
          shortDesc: 'Assistente de escrita baseado em IA utilizando a API da OpenAI.',
          fullDesc: 'Aplicação SaaS desenvolvida para utilizar IA na geração de textos de marketing, posts de blog e conteúdo para mídias sociais de alta qualidade. Inclui autenticação de usuários, gerenciamento de assinaturas e um editor de texto rico.',
          image: 'gradient-to-br from-purple-900 to-pink-900',
          tags: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
        },
        {
          id: 4,
          title: 'Mobile Fitness App',
          category: 'Mobile',
          shortDesc: 'Aplicativo mobile multiplataforma para acompanhamento de treinos.',
          fullDesc: 'Aplicativo de monitoramento fitness completo desenvolvido com planos de treino personalizados, visualização de progresso e recursos de compartilhamento social. Disponível para iOS e Android.',
          image: 'gradient-to-br from-orange-900 to-red-900',
          tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estou sempre aberto a novas conexões, projetos e oportunidades.\nEntre em contato e vamos construir algo relevante juntos.',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      namePlaceholder: 'João Silva',
      emailPlaceholder: 'joao@exemplo.com',
      subjectPlaceholder: 'Dúvida sobre o projeto',
      messagePlaceholder: 'Olá, eu gostaria de falar sobre...',
      submitBtn: 'Enviar Mensagem',
      emailCopied: 'Email copiado!',
      whatsappAction: 'Enviar uma mensagem',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
    },
    footer: {
      copyright: '© 2026 Flavio Fox. Todos os direitos reservados.',
      backToTop: 'Voltar ao Topo',
    }
  }
};

export type Dictionary = typeof dictionaries.en;
