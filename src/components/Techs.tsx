'use client';
import { useState } from 'react';
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiMysql, SiGit, SiVercel, SiGithub, SiPhp, SiJavascript, SiTypescript, SiLaravel } from 'react-icons/si';

const techs = [
  { name: 'Git', category: 'tools', icon: <SiGit size={20} /> },
  { name: 'GitHub', category: 'tools', icon: <SiGithub size={20} /> },
  { name: 'JavaScript', category: 'frontend', icon: <SiJavascript size={20} /> },
  { name: 'Laravel', category: 'backend', icon: <SiLaravel size={20} /> },
  { name: 'MySQL', category: 'backend', icon: <SiMysql size={20} /> },
  { name: 'Next.js', category: 'frontend', icon: <SiNextdotjs size={20} /> },
  { name: 'Node.js', category: 'backend', icon: <SiNodedotjs size={20} /> },
  { name: 'PHP', category: 'backend', icon: <SiPhp size={20} /> },
  { name: 'Python', category: 'backend', icon: <SiPython size={20} /> },
  { name: 'React', category: 'frontend', icon: <SiReact size={20} /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss size={20} /> },
  { name: 'TypeScript', category: 'frontend', icon: <SiTypescript size={20} /> },
  { name: 'Vercel', category: 'tools', icon: <SiVercel size={20} /> },
];

const categoryColors: Record<string, string> = {
  frontend: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  backend: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  tools: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
};

export default function Techs() {
  const [filter, setFilter] = useState<'todas' | 'frontend' | 'backend' | 'tools'>('todas');

  const filteredTechs = filter === 'todas' ? techs : techs.filter((t) => t.category === filter);

  return (
    <section className="flex flex-col gap-6 w-full max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-md border border-accent/20 transition-colors duration-300">
      {/* Título */}
      <h2 className="text-3xl font-bold text-foreground">Tecnologías</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">Estas son las tecnologías que utilizo en mis proyectos.</p>

      {/* Botones de filtro */}
      <div className="flex gap-3 flex-wrap mt-4">
        {['todas', 'frontend', 'backend', 'tools'].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat as any)} className={`px-4 py-2 rounded-lg font-medium transition-transform duration-300 transform ${filter === cat ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white hover:scale-105'}`}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de tecnologías */}
      <div className="flex flex-wrap gap-4 mt-4">
        {filteredTechs.map((tech) => (
          <span key={tech.name} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm transform transition-all duration-300 ease-in-out hover:scale-105 opacity-0 animate-fadeIn ${categoryColors[tech.category]}`}>
            {tech.icon} {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
