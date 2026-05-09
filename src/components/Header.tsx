"use client";
import { useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/theme/theme-toggle";

const sectionIds = [
	{ id: "about", label: "Sobre mí" },
	{ id: "proyectos", label: "Proyectos" },
	{ id: "tecnologias", label: "Tecnologías" },
	{ id: "contacto", label: "Contacto" },
];

export default function Header() {
	const activeId = useScrollSpy(sectionIds.map((s) => s.id));
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full py-3 px-6 sm:px-20 flex items-center justify-between mx-auto bg-white dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
			{/* Logo */}
			<a
				href="/"
				className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition"
				aria-label="Ir al inicio"
			>
				Iñaki.dev
			</a>

			{/* Desktop nav */}
			<nav
				role="navigation"
				aria-label="Secciones principales"
				className="hidden md:flex flex-1 justify-center gap-8 text-gray-700 dark:text-gray-300 items-center"
			>
				{sectionIds.map(({ id, label }) => (
					<a
						key={id}
						href={`#${id}`}
						className={
							activeId === id
								? "font-medium text-gray-900 dark:text-gray-100 border-b-2 border-blue-500 pb-1 transition"
								: "font-medium hover:text-blue-500 transition"
						}
						aria-current={activeId === id ? "page" : undefined}
					>
						{label}
					</a>
				))}
			</nav>

			{/* Right side */}
			<div className="flex gap-4 items-center">
				{/* Theme toggle */}
				<ThemeToggle />

				{/* Mobile menu button */}
				<button
					className="md:hidden text-gray-900 dark:text-gray-200"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Abrir menú de navegación"
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
				>
					{menuOpen ? (
						// X icon
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-7 h-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						// Hamburger icon
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-7 h-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile nav */}
			{menuOpen && (
				<nav
					id="mobile-nav"
					role="navigation"
					aria-label="Menú móvil"
					tabIndex={0}
					className="absolute top-full right-2 bg-gray-50 dark:bg-gray-950 border-t border-gray-300 dark:border-gray-700 flex flex-col items-center py-6 space-y-4 md:hidden"
				>
					{sectionIds.map(({ id, label }) => (
						<a
							key={id}
							href={`#${id}`}
							className={
								activeId === id
									? "px-6 py-3 rounded-full font-semibold text-gray-50 dark:text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-600 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
									: "px-6 py-3 font-medium hover:text-cyan-500 transition-colors"
							}
							aria-current={activeId === id ? "page" : undefined}
							onClick={() => setMenuOpen(false)}
						>
							{label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
}
