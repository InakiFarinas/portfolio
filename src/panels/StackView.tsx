import { TECHS } from "../data/portfolioData";

export function StackView() {
	return (
		<div className="font-mono text-[15px]">
			<div className="flex items-center gap-2 px-4 py-2 border-b border-line bg-canvas">
				<span className="flex gap-1.5" aria-hidden="true">
					<span className="w-2.5 h-2.5 rounded-full bg-dot-red" />
					<span className="w-2.5 h-2.5 rounded-full bg-dot-amber" />
					<span className="w-2.5 h-2.5 rounded-full bg-dot-green" />
				</span>
				<span className="text-[13px] text-muted">package.json</span>
			</div>
			<div className="px-4 py-3 leading-8">
				<p className="text-muted" aria-hidden="true">
					{"{"}
				</p>
				<ul className="pl-6">
					{TECHS.map((tech, i) => (
						<li key={tech.name} className="flex items-center gap-2">
							<i
								className={`ti ${tech.icon} text-[16px]`}
								style={{ color: tech.iconColor }}
								aria-hidden="true"
							/>
							<span className="text-ink">{tech.name}</span>
							<span className="text-muted" aria-hidden="true">
								:
							</span>
							<span className="text-accent">{tech.category}</span>
							<span className="text-muted" aria-hidden="true">
								{i < TECHS.length - 1 ? "," : ""}
							</span>
						</li>
					))}
				</ul>
				<p className="text-muted" aria-hidden="true">
					{"}"}
				</p>
			</div>
		</div>
	);
}
