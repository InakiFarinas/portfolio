'use client';
import React from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface SectionContainerProps {
  id: string;
  ariaLabel: string;
  className?: string;
  animate?: boolean;
  children: React.ReactNode;
}

export default function SectionContainer({ id, ariaLabel, className = '', animate = false, children }: SectionContainerProps) {
  const activeId = useScrollSpy([id], 200);
  const isVisible = animate ? activeId === id : true;

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`flex flex-col max-w-6xl w-full mx-auto rounded-xl p-8 shadow-md border gap-8 border-gray-300 dark:border-gray-700 border-accent/20
        bg-gradient-to-br from-gray-50 via-white to-gray-100
        dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117]
        text-gray-900 dark:text-gray-50
        ${animate ? `transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 sm:translate-y-10'}` : ''}
        ${className}`}
    >
      {children}
    </section>
  );
}
