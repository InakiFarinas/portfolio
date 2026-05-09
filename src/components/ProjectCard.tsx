interface ProjectCardProps {
	nombre: string;
	descripcion: string;
	url: string;
	imagen: string;
}

export default function ProjectCard({
	nombre,
	descripcion,
	url,
	imagen,
}: ProjectCardProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Ir al proyecto ${nombre}`}
			className="flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
		>
			{/* Imagen */}
			<div className="w-full h-40 relative bg-gray-100 dark:bg-gray-800">
				<img
					src={imagen}
					alt={`Foto del proyecto ${nombre}`}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Contenido */}
			<div className="p-5 flex flex-col gap-2 flex-1">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
					{nombre}
				</h3>
				<p className="text-gray-600 dark:text-gray-400 text-sm">
					{descripcion}
				</p>
			</div>
		</a>
	);
}
