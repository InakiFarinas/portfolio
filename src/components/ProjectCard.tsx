import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  nombre: string;
  descripcion: string;
  url: string;
  imagen: string;
}

export default function ProjectCard({ nombre, descripcion, url, imagen }: ProjectCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 border-accent/20 bg-white/80 dark:bg-gray-800/80 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
      {/* Imagen */}
      <div className="w-full h-48 relative">
        <Image src={imagen} alt={nombre} fill className="object-cover" />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-lg font-bold">{nombre}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{descripcion}</p>
      </div>
    </a>
  );
}
