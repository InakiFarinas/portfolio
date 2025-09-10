import ProjectCard from './ProjectCard';
import SectionContainer from './SectionContainer';

const proyectos = [
  { id: 1, nombre: 'Task Manager', descripcion: 'Sistema de gestión de tareas', url: '#', imagen: '/inmobiliaria.jpg' },
  { id: 2, nombre: 'Inmobiliaria', descripcion: 'Web de venta y alquiler de inmuebles', url: '#', imagen: '/inmobiliaria.jpg' },
];

export default function Projects() {
  return (
    <SectionContainer id="proyectos" ariaLabel="Proyectos" animate>
      {/* Título */}
      <h2 className="text-3xl font-bold">Proyectos</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg">Algunos proyectos destacados que he desarrollado.</p>

      {/* Grid de proyectos como lista */}
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {proyectos.map((p) => (
          <li key={p.id} className="list-none">
            <ProjectCard {...p} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
