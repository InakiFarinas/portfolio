"use client";
import { useState } from "react";
import { techs } from "./techList";
import SectionContainer from "./SectionContainer";

type Category = "todas" | "frontend" | "backend" | "tools";

const categoryColors: Record<
	string,
	{ bg: string; text: string; border: string }
> = {
	frontend: {
		bg: "bg-blue-50 dark:bg-blue-900/20",
		text: "text-blue-600 dark:text-blue-400",
		border: "border-blue-200 dark:border-blue-700",
	},
	backend: {
		bg: "bg-green-50 dark:bg-green-900/20",
		text: "text-green-600 dark:text-green-400",
		border: "border-green-200 dark:border-green-700",
	},
	tools: {
		bg: "bg-amber-50 dark:bg-amber-900/20",
		text: "text-amber-600 dark:text-amber-400",
		border: "border-amber-200 dark:border-amber-700",
	},
};

const buttonColors: Record<string, string> = {
	frontend: "hover:bg-blue-100 dark:hover:bg-blue-900/40",
	backend: "hover:bg-green-100 dark:hover:bg-green-900/40",
	tools: "hover:bg-amber-100 dark:hover:bg-amber-900/40",
	todas: "hover:bg-blue-100 dark:hover:bg-blue-900/40",
};

const buttonActiveColors: Record<string, string> = {
	frontend:
		"bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-600",
	backend:
		"bg-green-100 dark:bg-green-900/40 border-green-300 dark:border-green-600",
	tools:
		"bg-amber-100 dark:bg-amber-900/40 border-amber-300 dark:border-amber-600",
	todas: "bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-600",
};

export default function Techs() {
	const [filter, setFilter] = useState<Category>("todas");

	const categories: Category[] = ["todas", "frontend", "backend", "tools"];
	const filteredTechs =
		filter === "todas" ? techs : techs.filter((t) => t.category === filter);

	return (
		<SectionContainer
			id="tecnologias"
			ariaLabel="Tecnologías utilizadas"
			animate
		>
			{/* Título */}
			<div className="flex flex-col gap-2 mb-2">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
					Tecnologías
				</h2>
				<p className="text-gray-600 dark:text-gray-400 text-base">
					Estas son las tecnologías que utilizo en mis proyectos.
				</p>
			</div>

			{/* Botones de filtro */}
			<div
				className="flex gap-3 flex-wrap mt-6 mb-8"
				role="tablist"
				aria-label="Filtrar tecnologías"
			>
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setFilter(cat)}
						aria-pressed={filter === cat}
						aria-label={`Filtrar por ${cat}`}
						className={`px-4 py-2 rounded-lg font-medium border transition-colors duration-300
              ${filter === cat ? `border-blue-500 ${buttonActiveColors[cat]}` : `border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${buttonColors[cat]}`}`}
					>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</button>
				))}
			</div>

			{/* Grid de tecnologías como cards */}
			<ul
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
				aria-label="Lista de tecnologías"
			>
				{filteredTechs.map((tech, index) => {
					const colors = categoryColors[tech.category];
					return (
						<li
							key={tech.name}
							className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 opacity-0 animate-fadeIn`}
							style={{ animationDelay: `${index * 50}ms` }}
							tabIndex={0}
							aria-label={tech.name}
							title={tech.name}
						>
							<div className={`text-2xl ${colors.text}`}>{tech.icon}</div>
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
								{tech.name}
							</span>
						</li>
					);
				})}
			</ul>
		</SectionContainer>
	);
}
