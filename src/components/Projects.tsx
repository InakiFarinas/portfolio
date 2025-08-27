import ProjectCard from './ProjectCard';

const proyectos = [
  { nombre: 'Task Manager', descripcion: 'Sistema de gestión de tareas', url: '#', imagen: '/projects/task-manager.png' },
  { nombre: 'Tienda Cerámica', descripcion: 'Web de venta y clases de cerámica', url: '#', imagen: '/projects/ceramica.png' },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-6 w-full max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-md border border-accent/20 transition-colors duration-300">
      {/* Título */}
      <h2 className="text-3xl font-bold text-foreground">Proyectos</h2>
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
