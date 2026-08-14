'use client';

import { useState, useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SpotlightButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function SpotlightButton({ children, className = '', glowColor = 'rgba(255,255,255,0.2)', ...props }: SpotlightButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (props.onMouseMove) props.onMouseMove(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovering(true);
    if (props.onMouseEnter) props.onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovering(false);
    if (props.onMouseLeave) props.onMouseLeave(e);
  };

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute -inset-px transition duration-300 z-0 rounded-inherit"
        style={{
          background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 100%)`,
          borderRadius: 'inherit'
        }}
      />
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );
}
