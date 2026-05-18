import { useState, useEffect, useRef } from "react";

type Tab = "preview" | "fullview";

interface TopBarProps {
	activeTab: Tab;
	onTabChange: (tab: Tab) => void;
	onToggleSidebar?: () => void;
}

const TABS: { id: Tab; label: string }[] = [
	{ id: "preview", label: "Preview" },
	{ id: "fullview", label: "Fullview" },
];

const TICKER_ITEMS = [
	"último commit: feat/live-dashboard",
	"branch: main",
	"deploy: Vercel OK",
	"próximo: world-stats v2",
	"status: disponible para trabajar",
	"ubicación: Gran Buenos Aires, Argentina",
];

// Caracteres random para el glitch
const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

function useGlitch(text: string) {
	const [displayed, setDisplayed] = useState(text);
	const [isGlitching, setIsGlitching] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	function triggerGlitch() {
		if (isGlitching) return;
		setIsGlitching(true);
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
				setIsGlitching(false);
			}
		}, 40);
	}

	useEffect(() => () => clearInterval(intervalRef.current!), []);

	return { displayed, triggerGlitch };
}

function BlinkingCursor() {
	return (
		<span
			className="w-[2px] h-[14px] bg-[#8a9bbb] "
			style={{ animation: "blink 1s step-end infinite" }}
			aria-hidden="true"
		/>
	);
}

export function TopBar({
	activeTab,
	onTabChange,
	onToggleSidebar,
}: TopBarProps) {
	const [tickerIdx, setTickerIdx] = useState(0);
	const { displayed: logoText, triggerGlitch } = useGlitch("iñaki.dev");

	useEffect(() => {
		const t = setInterval(() => {
			setTickerIdx((i) => (i + 1) % TICKER_ITEMS.length);
		}, 3500);
		return () => clearInterval(t);
	}, []);

	return (
		<header className="flex items-center justify-between px-4 py-2.5 bg-[#0d1017] border-b border-[#1e2535] shrink-0">
			<div className="flex items-center">
				{onToggleSidebar && (
					<button
						className="md:hidden p-2 mr-2 rounded hover:bg-[#161b27]"
						onClick={onToggleSidebar}
						aria-label="Abrir menú"
					>
						<i className="ti ti-list text-lg text-[#8a9bbb]" />
					</button>
				)}

				{/* Logo con glitch en hover */}
				<div
					className="flex items-center gap-2 cursor-default select-none"
					onMouseEnter={triggerGlitch}
				>
					<span
						className="w-2 h-2 rounded-full bg-[#7F77DD] animate-pulse"
						style={{ animationDuration: "1.8s" }}
					/>
					<span className="text-sm font-mono font-medium text-[#7F77DD] tracking-tight">
						{logoText}
					</span>
					<span className="text-[#1e2535] font-mono">—</span>
					<span className="text-[11px] font-mono text-[#8a9bbb]">
						Workspace
					</span>
					<BlinkingCursor />
				</div>
			</div>

			{/* Tabs */}
			<nav className="hidden sm:flex gap-1.5">
				{TABS.map(({ id, label }) => (
					<button
						key={id}
						onClick={() => onTabChange(id)}
						className={`px-3 py-1.5 rounded text-[11px] font-mono border transition-all ${
							activeTab === id
								? "bg-[#161b27] text-[#a78bfa] border-[#3d3272]"
								: "text-[#8a9bbb] border-[#1e2535] hover:text-[#a8c5e8] hover:border-[#6b7b9d]"
						}`}
					>
						{label}
					</button>
				))}
			</nav>

			{/* Right: ticker + LIVE badge */}
			<div className="flex items-center gap-3">
				<div className="hidden lg:flex items-center gap-1.5 overflow-hidden max-w-[220px]">
					<i className="ti ti-radio text-[10px] text-[#8a9bbb]" />
					<span
						key={tickerIdx}
						className="text-[10px] font-mono text-[#8a9bbb] truncate"
					>
						{TICKER_ITEMS[tickerIdx]}
					</span>
				</div>

				<div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#1a3a28] bg-[#0d1f17]">
					<span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
					<span className="text-[10px] font-mono font-medium text-[#4ade80] tracking-widest">
						LIVE
					</span>
				</div>
			</div>
		</header>
	);
}
