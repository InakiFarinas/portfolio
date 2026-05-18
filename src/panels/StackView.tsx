import { useState } from "react";
import { TECHS, Category } from "../data/portfolioData";

const CATEGORIES: { id: Category; label: string }[] = [
	{ id: "todas", label: "Todas" },
	{ id: "frontend", label: "Frontend" },
	{ id: "backend", label: "Backend" },
	{ id: "tools", label: "Tools" },
];

export function StackView() {
	const [active, setActive] = useState<Category>("todas");

	const filtered =
		active === "todas" ? TECHS : TECHS.filter((t) => t.category === active);

	return (
		<div className="h-full overflow-y-auto p-4">
			{/* Section header */}
			<div className="flex items-center gap-3 mb-4">
				<span className="text-[10px] text-[#7F77DD] font-mono tracking-widest uppercase">
					Stack Tecnológico
				</span>
				<div className="flex-1 h-px bg-[#1e2535]" />
				<span className="text-[10px] text-[#8a9bbb] font-mono">
					{filtered.length} tecnologías
				</span>
			</div>

			{/* Category filters */}
			<div className="flex gap-2 mb-6 flex-wrap">
				{CATEGORIES.map(({ id, label }) => (
					<button
						key={id}
						onClick={() => setActive(id)}
						className={`px-3 py-1.5 rounded-full text-[11px] font-mono border transition-all ${
							active === id
								? "text-white border-transparent"
								: "text-[#8a9bbb] border-[#1e2535] hover:text-[#a8c5e8] hover:border-[#6b7b9d]"
						}`}
						style={
							active === id
								? { background: "linear-gradient(135deg, #7F77DD, #D4537E)" }
								: {}
						}
					>
						{label}
					</button>
				))}
			</div>

			{/* Tech grid */}
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
				{filtered.map((tech) => (
					<div
						key={tech.name}
						className="group rounded-lg border border-[#1e2535] bg-[#0d1017] p-3 hover:border-[#3d3272] transition-all cursor-default"
					>
						<div className="flex items-center gap-2.5">
							<div
								className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
								style={{ background: tech.bgColor }}
							>
								<i
									className={`ti ${tech.icon} text-base`}
									style={{ color: tech.iconColor }}
								/>
							</div>
							<div>
								<p className="text-[12px] font-mono font-medium text-[#e2e8f0]">
									{tech.name}
								</p>
								<p className="text-[9px] text-[#8a9bbb] font-mono capitalize">
									{tech.category}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
