import React from 'react';

interface SectionContainerProps {
  id: string;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionContainer({ id, ariaLabel, className = '', children }: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`flex flex-col max-w-6xl w-full mx-auto rounded-xl p-8 shadow-md border gap-8 border-gray-300 dark:border-gray-700 border-accent/20
        bg-gradient-to-br from-gray-50 via-white to-gray-100
        dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117]
        text-gray-900 dark:text-gray-50 ${className}`}
    >
      {children}
    </section>
  );
}
