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
		id: "julian-cabrera",
		slug: "julian-cabrera-propiedades",
		title: "Julian Cabrera Propiedades",
		description: "Sitio web para inmobiliaria con catálogo de propiedades.",
		status: "Deployado" as const,
		color: "#5aa2ff",
		colorDark: "#00366b",
		icon: "ti-building-estate",
		screenshotUrl: "/projects/julian-cabrera.png",
		demoUrl: "https://juliancabrerapropiedades.com",
		repoUrl: "https://github.com/InakiFarinas/Julian-Cabrera-Propiedades",
		repoName: "Julian-Cabrera-Propiedades",
		stack: ["React", "Vite", "Tailwind CSS", "React Router"],
	},
	{
		id: "platarank",
		slug: "platarank",
		title: "PlataRank",
		description: "Ranking de crafteo en Albion Online por plata realizable por día.",
		status: "Deployado" as const,
		color: "#f5a524",
		colorDark: "#1a0f08",
		icon: "ti-coins",
		screenshotUrl: "/projects/platarank.png",
		demoUrl: "https://platarank.vercel.app",
		repoUrl: "https://github.com/InakiFarinas/platarank",
		repoName: "platarank",
		stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
		// El sitio manda X-Frame-Options: DENY / CSP frame-ancestors 'none': rechaza el iframe, se queda solo con la captura.
		liveEmbed: false,
	},
	{
		id: "migrascore",
		slug: "migrascore",
		title: "MigraScore",
		description: "Ranking personalizado de países de destino migratorio.",
		status: "Deployado" as const,
		color: "#3fc1b0",
		colorDark: "#0b3a4a",
		icon: "ti-compass",
		screenshotUrl: "/projects/migrascore.png",
		demoUrl: "https://poblaciones-mundiales.vercel.app",
		repoUrl: "https://github.com/InakiFarinas/infoemigrar",
		repoName: "infoemigrar",
		stack: ["React", "Vite", "Tailwind CSS"],
	},
];

export const PROFILE = {
	name: "Iñaki Fariñas",
	github: "InakiFarinas",
	email: "inakifarinas04@gmail.com",
	whatsapp: "https://wa.me/5491135959887",
	whatsappLabel: "+54 9 11 3595-9887",
};
