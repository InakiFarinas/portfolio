'use client';
import { useState } from 'react';
import { techs } from './techList';
import SectionContainer from './SectionContainer';

type Category = 'todas' | 'frontend' | 'backend' | 'tools';

const categoryColors: Record<string, string> = {
  frontend: 'bg-blue-300 dark:bg-blue-700 text-blue-800 dark:text-blue-200',
  backend: 'bg-green-300 dark:bg-green-700 text-green-800 dark:text-green-200',
  tools: 'bg-yellow-300 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200',
};

export default function Techs() {
  const [filter, setFilter] = useState<Category>('todas');

  const categories: Category[] = ['todas', 'frontend', 'backend', 'tools'];
  const filteredTechs = filter === 'todas' ? techs : techs.filter((t) => t.category === filter);

  return (
    <SectionContainer
      id="tecnologias"
      ariaLabel="Tecnologías utilizadas"
    >
      {/* Título */}
      <h2 className="text-3xl font-bold">Tecnologías</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">Estas son las tecnologías que utilizo en mis proyectos.</p>

      {/* Botones de filtro */}
      <div className="flex gap-3 flex-wrap mt-4" role="tablist" aria-label="Filtrar tecnologías">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} aria-pressed={filter === cat} aria-label={`Filtrar por ${cat}`} className={`px-4 py-2 rounded-lg font-medium transition-transform duration-500 transform ${filter === cat ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white hover:scale-105'}`}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de tecnologías */}
      <ul className="flex flex-wrap gap-4 mt-4" aria-label="Lista de tecnologías">
        {filteredTechs.map((tech) => (
          <li key={tech.name} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm transform duration-500 ease-in-out hover:scale-105 opacity-0 animate-fadeIn ${categoryColors[tech.category]}`} tabIndex={0} aria-label={tech.name} title={tech.name}>
            {tech.icon} {tech.name}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
