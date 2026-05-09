import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";

const proyectos = [
	{
		id: 1,
		nombre: "World Dashboard",
		descripcion: "Dashboard con datos globales",
		url: "https://world-dashboard-smoky.vercel.app",
		imagen: "/WorldDashboard.png",
	},
];

export default function Projects() {
	return (
		<SectionContainer id="proyectos" ariaLabel="Proyectos" animate>
			{/* Título */}
			<div className="flex flex-col gap-2">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
					Proyectos
				</h2>
				<p className="text-gray-600 dark:text-gray-400 text-base">
					Algunos proyectos destacados que he desarrollado.
				</p>
			</div>

			{/* Grid de proyectos */}
			<ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
				{proyectos.map((p) => (
					<li key={p.id} className="list-none">
						<ProjectCard {...p} />
					</li>
				))}
			</ul>
		</SectionContainer>
	);
}
