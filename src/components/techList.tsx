import {
	SiReact,
	SiTailwindcss,
	SiMysql,
	SiGit,
	SiVercel,
	SiGithub,
	SiJavascript,
	SiTypescript,
} from "react-icons/si";

export const techs = [
	{
		name: "Git",
		category: "tools",
		icon: <SiGit size={20} aria-label="Git" />,
	},
	{
		name: "GitHub",
		category: "tools",
		icon: <SiGithub size={20} aria-label="GitHub" />,
	},
	{
		name: "JavaScript",
		category: "frontend",
		icon: <SiJavascript size={20} aria-label="JavaScript" />,
	},
	{
		name: "MySQL",
		category: "backend",
		icon: <SiMysql size={20} aria-label="MySQL" />,
	},
	{
		name: "React",
		category: "frontend",
		icon: <SiReact size={20} aria-label="React" />,
	},
	{
		name: "Tailwind CSS",
		category: "frontend",
		icon: <SiTailwindcss size={20} aria-label="Tailwind CSS" />,
	},
	{
		name: "TypeScript",
		category: "frontend",
		icon: <SiTypescript size={20} aria-label="TypeScript" />,
	},
	{
		name: "Vercel",
		category: "tools",
		icon: <SiVercel size={20} aria-label="Vercel" />,
	},
];
