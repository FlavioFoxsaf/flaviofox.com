'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dictionary } from '@/i18n/dictionaries';
import { Section } from '@/components/ui/Section';
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  dict: Dictionary;
}

export function ContactSection({ dict }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{show: boolean, message: string, type: 'success' | 'error' | 'warning'}>({
    show: false,
    message: '',
    type: 'success'
  });
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const COOLDOWN_TIME = 300;

  useEffect(() => {
    const checkCooldown = () => {
      const lastSentStr = localStorage.getItem('lastEmailSentAt');
      if (lastSentStr) {
        const elapsed = Math.floor((Date.now() - parseInt(lastSentStr, 10)) / 1000);
        if (elapsed < COOLDOWN_TIME) {
          setCooldownRemaining(COOLDOWN_TIME - elapsed);
        } else {
          localStorage.removeItem('lastEmailSentAt');
          setCooldownRemaining(0);
        }
      } else {
        setCooldownRemaining(0);
      }
    };

    checkCooldown();

    let interval: NodeJS.Timeout;
    if (cooldownRemaining > 0) {
      interval = setInterval(checkCooldown, 1000);
    }
    
    return () => clearInterval(interval);
  }, [cooldownRemaining > 0]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const showToastMessage = (message: string, type: 'success' | 'error' | 'warning') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      showToastMessage("Por favor, preencha todos os campos antes de enviar.", "warning");
      return;
    }
    
    if (!validateEmail(formData.email)) {
      showToastMessage("Por favor, insira um endereço de e-mail válido.", "warning");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Dispara os dois e-mails simultaneamente usando Promise.all
      await Promise.all([
        // Notificação para o dono (Flavio)
        emailjs.send(
          'service_05inotr',
          'template_ynrcxxs',
          templateParams,
          's-1CTbizO1Nje87bi'
        ),
        // Auto-resposta para o cliente
        emailjs.send(
          'service_05inotr',
          'template_fhd5ojs',
          templateParams,
          's-1CTbizO1Nje87bi'
        )
      ]);

      setFormData({ name: '', email: '', subject: '', message: '' });
      showToastMessage("Mensagem enviada com sucesso! Em breve entrarei em contato.", "success");
      
      localStorage.setItem('lastEmailSentAt', Date.now().toString());
      setCooldownRemaining(COOLDOWN_TIME);
    } catch (error) {
      console.error("Erro no envio do email:", error);
      showToastMessage("Ocorreu um erro ao enviar a mensagem. Verifique sua internet e tente novamente.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Section id="contact" className="pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {dict.contact.title}
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed whitespace-pre-line">
            {dict.contact.subtitle}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 rounded-full glass">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Email</div>
                <div className="text-white">contato@flaviofox.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 rounded-full glass">
                <Phone className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">{dict.contact.phoneLabel}</div>
                <div className="text-white">+55 (71) 98710-7553</div>
              </div>
            </div>

            <a href="https://wa.me/5571987107553" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-4 rounded-full glass group-hover:bg-white/10 transition-colors">
                <FaWhatsapp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1 group-hover:text-gray-400 transition-colors">WhatsApp</div>
                <div className="text-white">{dict.contact.whatsappAction}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 rounded-full glass">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">{dict.contact.locationLabel}</div>
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
          <form className="glass-strong p-8 md:p-10 rounded-3xl space-y-6 border border-white/10" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.nameLabel}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={dict.contact.namePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.emailLabel}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={dict.contact.emailPlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.subjectLabel}</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={dict.contact.subjectPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 pl-1">{dict.contact.messageLabel}</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={dict.contact.messagePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || cooldownRemaining > 0}
              className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {cooldownRemaining > 0 
                ? (dict.contact.submitBtn === 'Send Message' ? `Wait ${formatTime(cooldownRemaining)}` : `Aguarde ${formatTime(cooldownRemaining)}`)
                : isSubmitting 
                  ? 'Enviando...' 
                  : dict.contact.submitBtn}
              {!isSubmitting && cooldownRemaining === 0 && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full glass-strong border border-white/10 text-white font-medium shadow-2xl flex items-center gap-3 whitespace-nowrap md:whitespace-normal text-sm md:text-base text-center max-w-[90vw]"
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
            ) : (
              <AlertCircle className={`w-5 h-5 shrink-0 ${toast.type === 'warning' ? 'text-yellow-400' : 'text-red-400'}`} />
            )}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
