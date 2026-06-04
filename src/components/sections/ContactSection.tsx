'use client';

import { motion } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Send, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  dict: Dictionary;
}

export function ContactSection({ dict }: ContactSectionProps) {
  return (
    <Section id="contact" className="pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {dict.contact.title}
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 rounded-full glass">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Email</div>
                <div className="text-white">flaviofoxsaf@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 rounded-full glass">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Phone</div>
                <div className="text-white">(71) 98710-7553</div>
              </div>
            </div>

            <a href="https://wa.me/5571987107553" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-4 rounded-full glass group-hover:bg-white/10 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1 group-hover:text-gray-400 transition-colors">WhatsApp</div>
                <div className="text-white">Start a conversation</div>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 rounded-full glass">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Location</div>
                <div className="text-white">Salvador, BA</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="glass-strong p-8 md:p-10 rounded-3xl space-y-6 border border-white/10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.nameLabel}</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.emailLabel}</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.subjectLabel}</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.messageLabel}</label>
              <textarea 
                rows={5}
                placeholder="Hello, I'd like to talk about..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group"
            >
              {dict.contact.submitBtn}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
