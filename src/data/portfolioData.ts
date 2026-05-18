export type Category = "todas" | "frontend" | "backend" | "tools";

export interface Tech {
	name: string;
	icon: string;
	iconColor: string;
	bgColor: string;
	category: Exclude<Category, "todas">;
}

export const TECHS: Tech[] = [
	{
		name: "React",
		icon: "ti-brand-react",
		iconColor: "#61DAFB",
		bgColor: "rgba(97,218,251,0.1)",
		category: "frontend",
	},
	{
		name: "TypeScript",
		icon: "ti-brand-typescript",
		iconColor: "#3178C6",
		bgColor: "rgba(49,120,198,0.1)",
		category: "frontend",
	},
	{
		name: "JavaScript",
		icon: "ti-brand-javascript",
		iconColor: "#F7DF1E",
		bgColor: "rgba(247,223,30,0.08)",
		category: "frontend",
	},
	{
		name: "Tailwind CSS",
		icon: "ti-brand-css3",
		iconColor: "#38BDF8",
		bgColor: "rgba(56,189,248,0.1)",
		category: "frontend",
	},
	{
		name: "Vite",
		icon: "ti-bolt",
		iconColor: "#A78BFA",
		bgColor: "rgba(167,139,250,0.1)",
		category: "frontend",
	},
	{
		name: "MySQL",
		icon: "ti-database",
		iconColor: "#4479A1",
		bgColor: "rgba(68,121,161,0.1)",
		category: "backend",
	},
	{
		name: "Git",
		icon: "ti-brand-git",
		iconColor: "#F05032",
		bgColor: "rgba(240,80,50,0.1)",
		category: "tools",
	},
	{
		name: "GitHub",
		icon: "ti-brand-github",
		iconColor: "#a0aec0",
		bgColor: "rgba(160,174,192,0.08)",
		category: "tools",
	},
	{
		name: "Vercel",
		icon: "ti-brand-vercel",
		iconColor: "#e2e8f0",
		bgColor: "rgba(226,232,240,0.06)",
		category: "tools",
	},
];

export const PROJECTS = [
	{
		id: "world-stats",
		slug: "world-stats-dashboard",
		title: "Poblaciones Mundiales",
		description: "Dashboard interactivo de estadísticas globales.",
		status: "Construyendo" as const,
		color: "#7F77DD",
		colorDark: "#3C3489",
		icon: "ti-chart-dots-3",
		linesOfCode: 1204,
		coverage: 84,
		demoUrl: "https://poblaciones-mundiales.vercel.app",
		repoUrl: "https://github.com/InakiFarinas/world-dashboard",
		repoName: "world-dashboard",
		stack: ["React", "TypeScript", "Recharts", "React Query"],
	},
	{
		id: "zanola",
		slug: "inmobiliaria-zanola",
		title: "Inmobiliaria Zanola",
		description: "Sitio web para inmobiliaria con catálogo de propiedades.",
		status: "Construyendo" as const,
		color: "#1b7645",
		colorDark: "#1b4645",
		icon: "ti-building-estate",
		linesOfCode: 892,
		coverage: 71,
		demoUrl: "https://inmobiliaria-zanola.vercel.app",
		repoUrl: "https://github.com/InakiFarinas/Inmobiliaria-Zanola",
		repoName: "Inmobiliaria-Zanola",
		stack: ["React", "Vite", "Tailwind CSS", "React Router"],
	},
];

// Calcular stats dinámicamente
const getTechCount = () => TECHS.length;

const getTotalLinesOfCode = () => {
	return PROJECTS.reduce((total, project) => total + project.linesOfCode, 0);
};

export const PROFILE = {
	name: "Iñaki Fariñas",
	role: "Frontend Dev · Junior",
	status: "disponible para trabajar",
	github: "InakiFarinas",
	stats: {
		projects: PROJECTS.length,
		techs: getTechCount(),
		linesOfCode: getTotalLinesOfCode(),
		yearsExp: 1,
	},
};

export const CHAT_RESPONSES: Record<string, string> = {
	default:
		"Podés preguntarme sobre mis proyectos, tecnologías, disponibilidad o cómo contactarme.",
	tecnolog: "Trabajo principalmente con React, TypeScript y Tailwind CSS.",
	hola: "¡Hola! Soy Iñaki, ¿En qué puedo ayudarte?",
	proyecto:
		"Tengo dos proyectos destacados: un dashboard de estadísticas mundiales y un sitio para inmobiliaria. Ambos están en mi GitHub.",
	disponib:
		"Sí, estoy disponible para trabajar. Abierto a oportunidades remotas o en el Gran Buenos Aires.",
	contacto:
		"Podés escribirme a inakifarinas04@gmail.com o por WhatsApp al +54 9 11 3595-9887.",
	estudi:
		"Estudio Tecnicatura en Desarrollo de Software y complemento con proyectos propios para el portfolio.",
	experienc:
		"Menos de un año de experiencia formal, pero con proyectos reales que muestran dominio de React y el ecosistema moderno de frontend.",
	github:
		"Mi GitHub es github.com/InakiFarinas — ahí podés ver el código completo de cada proyecto con todos los commits.",
	trabajo:
		"Busco mi primera oportunidad laboral como Frontend Developer Junior. Disponible inmediatamente.",
};

export function getChatResponse(input: string): string {
	const lower = input.toLowerCase();
	for (const [key, response] of Object.entries(CHAT_RESPONSES)) {
		if (key !== "default" && lower.includes(key)) return response;
	}
	return CHAT_RESPONSES.default;
}
