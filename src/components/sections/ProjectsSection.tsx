'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface ProjectsSectionProps {
  dict: Dictionary;
}

export function ProjectsSection({ dict }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = dict.projects.items || [];

  return (
    <Section id="projects" className="bg-black/50 border-t border-white/5">
      <div className="text-left md:text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {dict.projects.title}
        </h2>
        <div className="w-20 h-1 bg-white rounded-full md:mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <SpotlightCard
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedProject(project.id)}
          >
            {/* Project Image Placeholder */}
            <div className={`w-full aspect-video ${!project.imageUrl ? 'bg-gradient-to-br from-gray-900 to-purple-950 flex items-center justify-center' : 'bg-black'} relative overflow-hidden`}>
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              ) : (
                <span className="text-white/30 text-sm font-bold tracking-widest uppercase relative z-10 px-4 text-center">
                  {dict.projects.inDevelopment}
                </span>
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100 backdrop-blur-sm bg-black/40 z-20">
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
          </SpotlightCard>
        ))}
      </div>

      <Modal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)}>
        {selectedProject !== null && (() => {
          const project = projects.find(p => p.id === selectedProject);
          if (!project) return null;
          return (
            <div className="flex flex-col h-full pt-8">
              <div className={`w-full aspect-video rounded-xl overflow-hidden ${!project.imageUrl ? 'bg-gradient-to-br from-gray-900 to-purple-950' : 'bg-black'} mb-8 flex items-center justify-center relative`}>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white/30 text-xl font-medium tracking-widest uppercase">
                    {dict.projects.inDevelopment}
                  </span>
                )}
              </div>
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" 
                      aria-label="View Source"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {dict.projects.viewCode}
                      </span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors" 
                      aria-label="Live Demo"
                    >
                      <MonitorPlay className="w-5 h-5" />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {dict.projects.viewDemo}
                      </span>
                    </a>
                  )}
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
