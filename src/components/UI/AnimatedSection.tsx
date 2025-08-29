'use client';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function AnimatedSection({ id, children }: SectionProps) {
  const activeId = useScrollSpy([id], 200); // offset más grande: se activa antes
  const isVisible = activeId === id;

  return (
    <div
      id={id}
      className={`transition-all duration-700 ease-out transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 sm:translate-y-10'}
  `}
    >
      {children}
    </div>
  );
}
