'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 relative', className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={cn('container mx-auto px-6 max-w-6xl', containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}
