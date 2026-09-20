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
	"hero.avatar": "Foto de Iñaki",
	"nav.contact": "Contacto",
	"nav.label": "Secciones",
	"hero.title": "Hola, soy Iñaki. Desarrollo sitios e interfaces que se usan bien.",
	"hero.sub":
		"Desarrollador frontend junior con proyectos reales en producción, como el sitio de una inmobiliaria. Trabajo con React, TypeScript y Tailwind.",
	"cta.projects": "Ver proyectos",
	"cta.talk": "Hablemos",
	"cta.mailSubject": "Consulta desde tu portfolio",
	"cta.cv": "Ver CV",
	"lang.to": "Cambiar a English",
	"menu.open": "Abrir menú",
	"menu.close": "Cerrar menú",
	"profile.role": "Desarrollador Frontend · Junior",
	"profile.status": "disponible para trabajar",
	"panel.title": "Sobre mí",
	"feed.title": "En GitHub",
	"feed.syncing": "sincronizando...",
	"feed.event.one": "{n} evento",
	"feed.event.other": "{n} eventos",
	"feed.empty": "Sin actividad para mostrar.",
	"feed.profile": "ver perfil completo",
	"section.projects": "Proyectos",
	"section.stack": "Stack y skills",
	"section.contact": "Contacto directo",
	"count.projects": "{n} proyectos",
	"status.live": "En producción",
	"status.building": "En construcción",
	"status.archived": "Archivado",
	"project.code": "código",
	"project.demo": "ver sitio",
	"project.open": "Abrir sitio",
	"project.commits": "commits",
	"project.shot": "Captura de {name}",
	"project.desc.migrascore":
		"Herramienta que rankea 8 países de destino migratorio según tu perfil: nacionalidad, profesión, prioridades e idiomas. Resultados orientativos.",
	"project.desc.julian-cabrera":
		"Sitio web para una inmobiliaria real, con catálogo de propiedades y en producción.",
	"project.title.migrascore": "MigraScore",
	"project.title.julian-cabrera": "Julian Cabrera Propiedades",
	"chat.title": "Preguntame algo",
	"chat.initial": "Preguntame por mi stack, mi experiencia o mi disponibilidad.",
	"chat.q1": "¿Con qué tecnologías trabajás?",
	"chat.q2": "¿Cuál es tu experiencia?",
	"chat.q3": "¿Qué necesito para empezar?",
	"chat.q4": "¿Hacés trabajos freelance?",
	"chat.note":
		"Respuestas automáticas sobre stack, experiencia, disponibilidad y freelance. Para otra cosa, escribime directo.",
	"chat.placeholder": "Escribí tu pregunta...",
	"chat.send": "Enviar",
	"chat.inputLabel": "Tu pregunta",
	"chat.log": "Conversación",
	"chat.typing": "El bot está escribiendo…",
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
	"hero.avatar": "Photo of Iñaki",
	"nav.contact": "Contact",
	"nav.label": "Sections",
	"hero.title": "Hi, I'm Iñaki. I build websites and interfaces that are easy to use.",
	"hero.sub":
		"Junior frontend developer with real projects in production, like a real estate agency's website. I work with React, TypeScript and Tailwind.",
	"cta.projects": "See projects",
	"cta.talk": "Let's talk",
	"cta.mailSubject": "Inquiry from your portfolio",
	"cta.cv": "View CV",
	"lang.to": "Cambiar a Español",
	"menu.open": "Open menu",
	"menu.close": "Close menu",
	"profile.role": "Frontend Developer · Junior",
	"profile.status": "available for work",
	"panel.title": "About me",
	"feed.title": "On GitHub",
	"feed.syncing": "syncing...",
	"feed.event.one": "{n} event",
	"feed.event.other": "{n} events",
	"feed.empty": "No activity to show.",
	"feed.profile": "view full profile",
	"section.projects": "Projects",
	"section.stack": "Stack & skills",
	"section.contact": "Get in touch",
	"count.projects": "{n} projects",
	"status.live": "Live",
	"status.building": "In progress",
	"status.archived": "Archived",
	"project.code": "code",
	"project.demo": "visit site",
	"project.open": "Open site",
	"project.commits": "commits",
	"project.shot": "Screenshot of {name}",
	"project.desc.migrascore":
		"Tool that ranks 8 migration destinations for your profile: nationality, profession, priorities and languages. Results are indicative.",
	"project.desc.julian-cabrera":
		"Website for a real estate agency, with a property catalog. Live in production.",
	"project.title.migrascore": "MigraScore",
	"project.title.julian-cabrera": "Julian Cabrera Propiedades",
	"chat.title": "Ask me anything",
	"chat.initial": "Ask me about my stack, my experience or my availability.",
	"chat.q1": "Which technologies do you use?",
	"chat.q2": "What's your experience?",
	"chat.q3": "What do I need to start?",
	"chat.q4": "Do you take freelance work?",
	"chat.note":
		"Automatic replies about stack, experience, availability and freelance. For anything else, write to me directly.",
	"chat.placeholder": "Type your question...",
	"chat.send": "Send",
	"chat.inputLabel": "Your question",
	"chat.log": "Conversation",
	"chat.typing": "The bot is typing…",
	"contact.email": "Email",
	"contact.whatsapp": "WhatsApp",
	"contact.linkedin": "LinkedIn",
	"contact.github": "GitHub",
	"footer.location": "Greater Buenos Aires, Argentina",
};

export const DICT: Record<Lang, Record<Key, string>> = { es, en };

const CHAT_RULES: Record<Lang, { keys: string[]; text: string }[]> = {
	// De lo más específico a lo más amplio: gana la primera regla que coincide.
	es: [
		{
			keys: ["freelance", "cobr", "presupuesto", "precio", "tarifa", "cotiz", "cuánto sale", "cuanto sale", "cuesta", "costo"],
			text: "Sí, hago proyectos freelance. Cada uno es distinto, así que cotizo según lo que necesites: contame por email a inakifarinas04@gmail.com o por WhatsApp al +54 9 11 3595-9887.",
		},
		{
			keys: ["empez", "empiez", "comenz", "arrancar"],
			text: "Para empezar me sirve saber qué querés lograr, si ya tenés marca o contenido y para cuándo lo necesitás. Mandámelo a inakifarinas04@gmail.com o por WhatsApp al +54 9 11 3595-9887 y te respondo.",
		},
		{
			keys: ["cuánto tarda", "cuanto tarda", "cuánto tiempo", "cuanto tiempo", "plazo", "demora"],
			text: "Depende del alcance: una landing simple es distinta de un catálogo con búsqueda. Contame qué necesitás en inakifarinas04@gmail.com y te paso un plazo estimado.",
		},
		{
			keys: ["ecommerce", "e-commerce", "tienda", "vender online"],
			text: "Hice El Bazar, un e-commerce con HTML, CSS y JS, como proyecto final (está en mi GitHub). Si necesitás una tienda, contame qué vendés en inakifarinas04@gmail.com.",
		},
		{
			keys: ["wordpress", "wix", "shopify", "nextjs", "next.js"],
			text: "Mi especialidad son sitios a medida con React y Vite. Contame qué necesitás en inakifarinas04@gmail.com y vemos si encaja.",
		},
		{
			keys: ["contacto", "contactar", "mail", "whatsapp"],
			text: "Podés escribirme a inakifarinas04@gmail.com o por WhatsApp al +54 9 11 3595-9887.",
		},
		{
			keys: ["disponib"],
			text: "Sí, estoy disponible para trabajar. Abierto a oportunidades remotas o en el Gran Buenos Aires.",
		},
		{
			keys: ["tecnolog", "stack", "react", "typescript", "tailwind", "javascript"],
			text: "Trabajo principalmente con React, TypeScript y Tailwind CSS.",
		},
		{
			keys: ["proyecto"],
			text: "Tengo dos proyectos destacados: el sitio de una inmobiliaria real y MigraScore, una herramienta que rankea países de destino migratorio según tu perfil. Ambos están en producción y en mi GitHub.",
		},
		{
			keys: ["experienc"],
			text: "Menos de un año de experiencia formal, pero con proyectos reales que muestran dominio de React y el ecosistema moderno de frontend.",
		},
		{
			keys: ["estudi"],
			text: "Estudio Tecnicatura en Desarrollo de Software y complemento con proyectos propios para el portfolio.",
		},
		{
			keys: ["github"],
			text: "Mi GitHub es github.com/InakiFarinas: ahí podés ver el código completo de cada proyecto con todos los commits.",
		},
		{
			keys: ["empleo", "laboral", "contratar", "puesto", "vacante"],
			text: "Busco mi primera oportunidad laboral como Frontend Developer Junior. Disponible inmediatamente.",
		},
		{ keys: ["hola", "buenas"], text: "¡Hola! Soy Iñaki, ¿en qué puedo ayudarte?" },
	],
	en: [
		{
			keys: ["freelance", "rate", "price", "quote", "budget", "cost"],
			text: "Yes, I take on freelance projects. Each one is different, so I quote based on what you need: tell me by email at inakifarinas04@gmail.com or on WhatsApp at +54 9 11 3595-9887.",
		},
		{
			keys: ["start", "begin", "get going"],
			text: "To get started it helps to know what you want to achieve, whether you already have branding or content, and your deadline. Send it to inakifarinas04@gmail.com or on WhatsApp at +54 9 11 3595-9887 and I'll get back to you.",
		},
		{
			keys: ["how long", "timeline", "deadline", "turnaround"],
			text: "It depends on scope: a simple landing page is different from a catalog with search. Tell me what you need at inakifarinas04@gmail.com and I'll give you an estimate.",
		},
		{
			keys: ["ecommerce", "e-commerce", "online store", "shop"],
			text: "I built El Bazar, an e-commerce project in HTML, CSS and JS (it's on my GitHub). If you need a store, tell me what you sell at inakifarinas04@gmail.com.",
		},
		{
			keys: ["wordpress", "wix", "shopify", "nextjs", "next.js"],
			text: "My specialty is custom sites with React and Vite. Tell me what you need at inakifarinas04@gmail.com and we'll see if it fits.",
		},
		{
			keys: ["contact", "reach", "email", "whatsapp"],
			text: "You can write to me at inakifarinas04@gmail.com or on WhatsApp at +54 9 11 3595-9887.",
		},
		{
			keys: ["availab"],
			text: "Yes, I'm available for work. Open to remote roles or on-site in Greater Buenos Aires.",
		},
		{
			keys: ["tech", "stack", "react", "typescript", "tailwind", "javascript"],
			text: "I mainly work with React, TypeScript and Tailwind CSS.",
		},
		{
			keys: ["project"],
			text: "I have two featured projects: a real estate agency's website and MigraScore, a tool that ranks migration destinations for your profile. Both are live and on my GitHub.",
		},
		{
			keys: ["experience"],
			text: "Less than a year of formal experience, but with real projects that show command of React and the modern frontend ecosystem.",
		},
		{
			keys: ["study", "studies", "education"],
			text: "I'm studying a Software Development technical degree and complement it with my own portfolio projects.",
		},
		{
			keys: ["github"],
			text: "My GitHub is github.com/InakiFarinas: you can see the full code of every project there, commits included.",
		},
		{
			keys: ["job", "hire", "position", "employ"],
			text: "I'm looking for my first role as a Junior Frontend Developer. Available immediately.",
		},
		{ keys: ["hello", "hey"], text: "Hi! I'm Iñaki, how can I help you?" },
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
