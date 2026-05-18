import { PROFILE } from "../data/portfolioData";
import { ActivityFeed } from "./ActivityFeed";

interface OperatorPanelProps {
	avatarSrc?: string; // ruta a tu foto, ej: "/avatar.jpg"
}

const STAT_ITEMS = [
	{ label: "Proyectos", value: PROFILE.stats.projects },
	{ label: "Tecnologías", value: PROFILE.stats.techs },
	{ label: "Líneas", value: PROFILE.stats.linesOfCode },
	{ label: "Año exp.", value: PROFILE.stats.yearsExp },
];

function WindowControls() {
	return (
		<div className="flex gap-1.5">
			<span className="w-2.5 h-2.5 rounded-full bg-[#e24b4a]" />
			<span className="w-2.5 h-2.5 rounded-full bg-[#ba7517]" />
			<span className="w-2.5 h-2.5 rounded-full bg-[#639922]" />
		</div>
	);
}

export function OperatorPanel({ avatarSrc }: OperatorPanelProps) {
	return (
		<aside className="flex flex-col gap-3 h-full overflow-y-auto py-3 px-3">
			{/* Profile card */}
			<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden">
				{/* Titlebar */}
				<div className="flex items-center justify-between px-3 py-2 border-b border-[#1e2535]">
					<span className="text-[10px] tracking-widest text-[#8a9bbb] uppercase font-mono">
						Operator
					</span>
					<WindowControls />
				</div>

				{/* Avatar + info */}
				<div className="flex flex-col items-center gap-2 px-4 pt-4 pb-3 border-b border-[#1e2535]">
					<div className="relative">
						<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#3d3272]">
							{avatarSrc ? (
								<img
									src={avatarSrc}
									alt={PROFILE.name}
									className="w-full h-full object-cover"
								/>
							) : (
								<div className="w-full h-full bg-gradient-to-br from-[#3d3272] to-[#6b2d4e] flex items-center justify-center">
									<i className="ti ti-user text-2xl text-[#a78bfa]" />
								</div>
							)}
						</div>
						{/* Online dot */}
						<span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-[#4ade80] border-2 border-[#0d1017]" />
					</div>

					<div className="text-center">
						<p className="text-sm font-medium text-[#e2e8f0] font-mono">
							{PROFILE.name}
						</p>
						<p className="text-[10px] text-[#8a9bbb] font-mono mt-0.5">
							{PROFILE.role}
						</p>
						<p className="text-[10px] text-[#4ade80] font-mono mt-1 flex items-center gap-1 justify-center">
							<span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse inline-block" />
							{PROFILE.status}
						</p>
					</div>
				</div>

				{/* Stats grid */}
				<div className="grid grid-cols-2 gap-px bg-[#1e2535]">
					{STAT_ITEMS.map(({ label, value }) => (
						<div
							key={label}
							className="bg-[#0d1017] px-3 py-2.5 flex flex-col items-center"
						>
							<span className="text-[9px] text-[#8a9bbb] font-mono mt-0.5 tracking-wide">
								{label}
							</span>
							<span className="text-base font-mono font-medium text-[#7F77DD]">
								{value}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Bio */}
			<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden">
				<div className="px-3 py-2 border-b border-[#1e2535]">
					<span className="text-[10px] tracking-widest text-[#8a9bbb] uppercase font-mono">
						Sobre mí
					</span>
				</div>
				<div className="px-3 py-3">
					<p className="text-[11px] text-[#a8c5e8] font-mono leading-relaxed">
						Hola — soy Iñaki, frontend developer enfocado en interfaces
						reactivas y diseño de experiencias. Me gusta construir dashboards,
						interfaces minimalistas y mejorar la accesibilidad.
					</p>
					<div className="mt-2.5 pt-2.5 border-t border-[#1e2535]">
						<a
							href="/cv.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-2 flex items-center gap-1.5 text-[10px] font-mono px-2 py-1.5 rounded border border-[#3d3272] bg-[#1e1645] text-[#a78bfa] hover:bg-[#2d1f6e] transition-colors w-full justify-center"
						>
							<i className="ti ti-file-cv text-[12px]" />
							Ver CV
						</a>
					</div>
				</div>
			</div>

			{/* Activity Feed */}
			<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden flex-1 min-h-[200px]">
				<ActivityFeed />
			</div>
		</aside>
	);
}
