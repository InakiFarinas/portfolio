import { TECHS } from "../data/portfolioData";

export function StackView() {
	return (
		<ul className="flex flex-wrap gap-2 p-4">
			{TECHS.map((tech) => (
				<li
					key={tech.name}
					className="flex items-center gap-2 rounded-full border border-line bg-canvas pl-1.5 pr-3 py-1.5"
				>
					<span
						className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
						style={{ background: tech.bgColor }}
					>
						<i
							className={`ti ${tech.icon} text-[15px]`}
							style={{ color: tech.iconColor }}
							aria-hidden="true"
						/>
					</span>
					<span className="text-[15px] text-body">{tech.name}</span>
				</li>
			))}
		</ul>
	);
}
