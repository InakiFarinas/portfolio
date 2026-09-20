import { useState, useEffect, useRef } from "react";
import { useI18n } from "../i18n/context";

interface TopBarProps {
	onToggleSidebar?: () => void;
}

const NAV = [
	{ href: "#proyectos", key: "nav.projects" },
	{ href: "#stack", key: "nav.stack" },
	{ href: "#contacto", key: "nav.contact" },
];

// Caracteres random para el glitch
const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

function useGlitch(text: string) {
	const [displayed, setDisplayed] = useState(text);
	const runningRef = useRef(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	function triggerGlitch() {
		if (runningRef.current) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		runningRef.current = true;
		let iterations = 0;
		const maxIterations = 10;

		intervalRef.current = setInterval(() => {
			setDisplayed(
				text
					.split("")
					.map((char, i) => {
						if (char === " ") return " ";
						// Las letras se "estabilizan" progresivamente
						if (i < iterations) return text[i];
						return GLITCH_CHARS[
							Math.floor(Math.random() * GLITCH_CHARS.length)
						];
					})
					.join(""),
			);
			iterations += 1;
			if (iterations > maxIterations) {
				clearInterval(intervalRef.current!);
				setDisplayed(text);
				runningRef.current = false;
			}
		}, 40);
	}

	useEffect(() => () => clearInterval(intervalRef.current!), []);

	return { displayed, triggerGlitch };
}

export function TopBar({ onToggleSidebar }: TopBarProps) {
	const { t, lang, setLang } = useI18n();
	const { displayed: logoText, triggerGlitch } = useGlitch("iñaki.dev");
	const target = lang === "es" ? "en" : "es";

	return (
		<header className="flex items-center gap-2 px-4 py-2 bg-surface border-b border-line shrink-0">
			{onToggleSidebar && (
				<button
					className="md:hidden -ml-2 rounded hover:bg-raised min-w-[44px] min-h-[44px] flex items-center justify-center"
					onClick={onToggleSidebar}
					aria-label={t("menu.open")}
				>
					<i className="ti ti-menu-2 text-lg text-muted" aria-hidden="true" />
				</button>
			)}

			<div
				className="flex items-center gap-2 select-none"
				onMouseEnter={triggerGlitch}
			>
				<span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
				<span className="font-mono text-[15px] font-medium text-accent tracking-tight">
					{logoText}
				</span>
			</div>

			<nav aria-label={t("nav.label")} className="hidden md:flex gap-1 ml-6">
				{NAV.map(({ href, key }) => (
					<a
						key={key}
						href={href}
						className="px-3 min-h-[44px] flex items-center rounded text-[15px] text-muted hover:text-ink hover:bg-raised transition-colors"
					>
						{t(key)}
					</a>
				))}
			</nav>

			<div className="ml-auto flex items-center gap-2">
				<button
					onClick={() => setLang(target)}
					lang={target}
					aria-label={t("lang.to")}
					className="flex items-center justify-center gap-1.5 px-2.5 min-w-[44px] min-h-[44px] rounded border border-line font-mono text-[13px] uppercase text-muted hover:text-ink hover:border-line-strong transition-colors"
				>
					<i className="ti ti-language text-[16px]" aria-hidden="true" />
					{target}
				</button>

				<a
					href="#contacto"
					className="flex items-center gap-1.5 px-4 min-h-[44px] rounded bg-accent text-canvas text-[15px] font-medium hover:bg-accent-soft transition-colors"
				>
					<i className="ti ti-mail text-[16px]" aria-hidden="true" />
					{t("cta.contact")}
				</a>
			</div>
		</header>
	);
}
