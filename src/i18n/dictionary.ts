export type Lang = "es" | "en";

export const LANGS: Lang[] = ["es", "en"];

const es = {
	skip: "Saltar al contenido",
	"meta.title": "Iñaki Fariñas | Desarrollador Frontend",
	"meta.description":
		"Portfolio de Iñaki Fariñas, desarrollador Frontend Junior especializado en React, TypeScript y Tailwind CSS.",
	"brand.sub": "Portfolio",
	"nav.projects": "Proyectos",
	"nav.stack": "Stack",
	"nav.contact": "Contacto",
	"nav.label": "Secciones",
	"hero.title": "Hola, soy Iñaki. Desarrollo sitios e interfaces que se usan bien.",
	"hero.sub":
		"Desarrollador frontend junior con proyectos reales en producción, como el sitio de una inmobiliaria. Trabajo con React, TypeScript y Tailwind.",
	"cta.projects": "Ver proyectos",
	"cta.contact": "Contactar",
	"cta.cv": "Ver CV",
	"lang.to": "Cambiar a English",
	"menu.open": "Abrir menú",
	"menu.close": "Cerrar menú",
	"profile.role": "Desarrollador Frontend · Junior",
	"profile.status": "disponible para trabajar",
	"panel.title": "Sobre mí",
	"feed.title": "En GitHub",
	"feed.syncing": "sincronizando...",
	"feed.events": "{n} eventos",
	"feed.empty": "Sin actividad para mostrar.",
	"feed.profile": "ver perfil completo",
	"section.projects": "Proyectos",
	"section.stack": "Stack y skills",
	"section.contact": "Contacto directo",
	"count.projects": "{n} proyectos",
	"count.techs": "{n} tecnologías",
	"status.live": "En producción",
	"status.building": "En construcción",
	"status.archived": "Archivado",
	"project.code": "código",
	"project.demo": "ver sitio",
	"project.open": "Abrir sitio",
	"project.commits": "commits",
	"project.shot": "Captura de {name}",
	"project.desc.world-stats": "Dashboard interactivo de estadísticas globales.",
	"project.desc.julian-cabrera":
		"Sitio web para una inmobiliaria real, con catálogo de propiedades y en producción.",
	"project.title.world-stats": "Poblaciones Mundiales",
	"project.title.julian-cabrera": "Julian Cabrera Propiedades",
	"chat.title": "Preguntame algo",
	"chat.initial": "Preguntame por mi stack, mi experiencia o mi disponibilidad.",
	"chat.q1": "¿Con qué tecnologías trabajás?",
	"chat.q2": "¿Cuál es tu experiencia?",
	"chat.q3": "¿Estás disponible?",
	"chat.q4": "¿Cómo te contacto?",
	"chat.placeholder": "Escribí tu pregunta...",
	"chat.send": "Enviar",
	"chat.inputLabel": "Tu pregunta",
	"chat.log": "Conversación",
	"stack.title": "Stack tecnológico",
	"cat.todas": "Todas",
	"cat.frontend": "Frontend",
	"cat.backend": "Backend",
	"cat.tools": "Herramientas",
	"contact.email": "Email",
	"contact.whatsapp": "WhatsApp",
	"contact.linkedin": "LinkedIn",
	"contact.github": "GitHub",
	"footer.location": "Gran Buenos Aires, Argentina",
} as const;

export type Key = keyof typeof es;

const en: Record<Key, string> = {
	skip: "Skip to content",
	"meta.title": "Iñaki Fariñas | Frontend Developer",
	"meta.description":
		"Portfolio of Iñaki Fariñas, a Junior Frontend Developer specialized in React, TypeScript and Tailwind CSS.",
	"brand.sub": "Portfolio",
	"nav.projects": "Projects",
	"nav.stack": "Stack",
	"nav.contact": "Contact",
	"nav.label": "Sections",
	"hero.title": "Hi, I'm Iñaki. I build websites and interfaces that are easy to use.",
	"hero.sub":
		"Junior frontend developer with real projects in production, like a real estate agency's website. I work with React, TypeScript and Tailwind.",
	"cta.projects": "See projects",
	"cta.contact": "Contact",
	"cta.cv": "View CV",
	"lang.to": "Cambiar a Español",
	"menu.open": "Open menu",
	"menu.close": "Close menu",
	"profile.role": "Frontend Developer · Junior",
	"profile.status": "available for work",
	"panel.title": "About me",
	"feed.title": "On GitHub",
	"feed.syncing": "syncing...",
	"feed.events": "{n} events",
	"feed.empty": "No activity to show.",
	"feed.profile": "view full profile",
	"section.projects": "Projects",
	"section.stack": "Stack & skills",
	"section.contact": "Get in touch",
	"count.projects": "{n} projects",
	"count.techs": "{n} technologies",
	"status.live": "Live",
	"status.building": "In progress",
	"status.archived": "Archived",
	"project.code": "code",
	"project.demo": "visit site",
	"project.open": "Open site",
	"project.commits": "commits",
	"project.shot": "Screenshot of {name}",
	"project.desc.world-stats": "Interactive dashboard of global statistics.",
	"project.desc.julian-cabrera":
		"Website for a real estate agency, with a property catalog. Live in production.",
	"project.title.world-stats": "World Populations",
	"project.title.julian-cabrera": "Julian Cabrera Propiedades",
	"chat.title": "Ask me anything",
	"chat.initial": "Ask me about my stack, my experience or my availability.",
	"chat.q1": "Which technologies do you use?",
	"chat.q2": "What's your experience?",
	"chat.q3": "Are you available?",
	"chat.q4": "How can I contact you?",
	"chat.placeholder": "Type your question...",
	"chat.send": "Send",
	"chat.inputLabel": "Your question",
	"chat.log": "Conversation",
	"stack.title": "Tech stack",
	"cat.todas": "All",
	"cat.frontend": "Frontend",
	"cat.backend": "Backend",
	"cat.tools": "Tools",
	"contact.email": "Email",
	"contact.whatsapp": "WhatsApp",
	"contact.linkedin": "LinkedIn",
	"contact.github": "GitHub",
	"footer.location": "Greater Buenos Aires, Argentina",
};

export const DICT: Record<Lang, Record<Key, string>> = { es, en };

const CHAT_RULES: Record<Lang, { keys: string[]; text: string }[]> = {
	es: [
		{
			keys: ["tecnolog"],
			text: "Trabajo principalmente con React, TypeScript y Tailwind CSS.",
		},
		{ keys: ["hola"], text: "¡Hola! Soy Iñaki, ¿en qué puedo ayudarte?" },
		{
			keys: ["proyecto"],
			text: "Tengo dos proyectos destacados: un dashboard de estadísticas mundiales y el sitio de una inmobiliaria real, que está en producción. Ambos están en mi GitHub.",
		},
		{
			keys: ["disponib"],
			text: "Sí, estoy disponible para trabajar. Abierto a oportunidades remotas o en el Gran Buenos Aires.",
		},
		{
			keys: ["contacto", "contactar"],
			text: "Podés escribirme a inakifarinas04@gmail.com o por WhatsApp al +54 9 11 3595-9887.",
		},
		{
			keys: ["estudi"],
			text: "Estudio Tecnicatura en Desarrollo de Software y complemento con proyectos propios para el portfolio.",
		},
		{
			keys: ["experienc"],
			text: "Menos de un año de experiencia formal, pero con proyectos reales que muestran dominio de React y el ecosistema moderno de frontend.",
		},
		{
			keys: ["github"],
			text: "Mi GitHub es github.com/InakiFarinas: ahí podés ver el código completo de cada proyecto con todos los commits.",
		},
		{
			keys: ["trabajo"],
			text: "Busco mi primera oportunidad laboral como Frontend Developer Junior. Disponible inmediatamente.",
		},
	],
	en: [
		{
			keys: ["tech", "stack"],
			text: "I mainly work with React, TypeScript and Tailwind CSS.",
		},
		{ keys: ["hello", "hi "], text: "Hi! I'm Iñaki, how can I help you?" },
		{
			keys: ["project"],
			text: "I have two featured projects: a world statistics dashboard and the website of a real estate agency, which is live in production. Both are on my GitHub.",
		},
		{
			keys: ["availab"],
			text: "Yes, I'm available for work. Open to remote roles or on-site in Greater Buenos Aires.",
		},
		{
			keys: ["contact", "reach", "email"],
			text: "You can write to me at inakifarinas04@gmail.com or on WhatsApp at +54 9 11 3595-9887.",
		},
		{
			keys: ["study", "studies", "education"],
			text: "I'm studying a Software Development technical degree and complement it with my own portfolio projects.",
		},
		{
			keys: ["experience"],
			text: "Less than a year of formal experience, but with real projects that show command of React and the modern frontend ecosystem.",
		},
		{
			keys: ["github"],
			text: "My GitHub is github.com/InakiFarinas: you can see the full code of every project there, commits included.",
		},
		{
			keys: ["job", "work", "hire"],
			text: "I'm looking for my first role as a Junior Frontend Developer. Available immediately.",
		},
	],
};

const CHAT_DEFAULT: Record<Lang, string> = {
	es: "No tengo una respuesta para eso, pero podés escribirme directo a inakifarinas04@gmail.com o por WhatsApp al +54 9 11 3595-9887.",
	en: "I don't have an answer for that, but you can write to me directly at inakifarinas04@gmail.com or on WhatsApp at +54 9 11 3595-9887.",
};

export function getChatResponse(input: string, lang: Lang): string {
	const lower = ` ${input.toLowerCase()} `;
	for (const rule of CHAT_RULES[lang]) {
		if (rule.keys.some((k) => lower.includes(k))) return rule.text;
	}
	return CHAT_DEFAULT[lang];
}
