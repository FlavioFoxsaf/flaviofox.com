'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectsSectionProps {
  dict: Dictionary;
}

export function ProjectsSection({ dict }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      shortDesc: 'A high-performance modern e-commerce solution built with Next.js and Stripe.',
      fullDesc: 'Developed a complete e-commerce platform featuring a custom shopping cart, secure checkout via Stripe, real-time inventory management, and an intuitive admin dashboard. The application handles high concurrent traffic and offers a seamless user experience.',
      image: 'gradient-to-br from-blue-900 to-indigo-900',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
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
  ];

  return (
    <Section id="projects" className="bg-black/50 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {dict.projects.title}
        </h2>
        <div className="w-20 h-1 bg-white mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedProject(project.id)}
          >
            {/* Project Image Placeholder */}
            <div className={`w-full aspect-video bg-${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100 backdrop-blur-sm bg-black/40">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>{dict.projects.viewProject}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-2">
                {project.shortDesc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)}>
        {selectedProject !== null && (() => {
          const project = projects.find(p => p.id === selectedProject);
          if (!project) return null;
          return (
            <div className="flex flex-col h-full">
              <div className={`w-full aspect-video rounded-xl bg-${project.image} mb-8 flex items-center justify-center`}>
                <span className="text-white/50 text-xl font-medium tracking-widest uppercase">Project Media</span>
              </div>
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                </div>
                
                <div className="flex gap-3">
                  <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" aria-label="View Source">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors" aria-label="Live Demo">
                    <MonitorPlay className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {project.fullDesc}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                        {tag}
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
