import ProjectCard from './ProjectCard';

const proyectos = [
  { nombre: 'Task Manager', descripcion: 'Sistema de gestión de tareas', url: '#', imagen: '/inmobiliaria.jpg' },
  { nombre: 'Inmobiliaria', descripcion: 'Web de venta y alquiler de inmuebles', url: '#', imagen: '/inmobiliaria.jpg' },
];

export default function Projects() {
  return (
    <section id="proyectos" className="flex flex-col gap-6 w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117] text-gray-900 dark:text-gray-50 rounded-xl p-8 shadow-md border border-gray-300 dark:border-gray-700 border-accent/20">
      {/* Título */}
      <h2 className="text-3xl font-bold">Proyectos</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg">Algunos proyectos destacados que he desarrollado.</p>

      {/* Grid de proyectos */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {proyectos.map((p) => (
          <ProjectCard key={p.nombre} {...p} />
        ))}
      </div>
    </section>
  );
}
