import { useState } from "react";
import { TECHS, type Category } from "../data/portfolioData";
import { useI18n } from "../i18n/context";

const CATEGORIES: Category[] = ["todas", "frontend", "backend", "tools"];

export function StackView() {
	const { t } = useI18n();
	const [active, setActive] = useState<Category>("todas");

	const filtered =
		active === "todas" ? TECHS : TECHS.filter((tech) => tech.category === active);

	return (
		<div className="p-4">
			<div className="flex items-center gap-3 mb-4">
				<h3 className="text-[15px] font-medium text-soft">
					{t("stack.title")}
				</h3>
				<div className="flex-1 h-px bg-line" />
				<span className="text-[15px] text-muted">
					{t("count.techs", { n: filtered.length })}
				</span>
			</div>

			<div className="flex gap-2 mb-6 flex-wrap">
				{CATEGORIES.map((id) => (
					<button
						key={id}
						onClick={() => setActive(id)}
						aria-pressed={active === id}
						className={`px-3 py-2 min-h-[44px] rounded-full text-[15px] border transition-colors ${
							active === id
								? "bg-accent text-canvas border-transparent"
								: "text-muted border-line hover:text-soft hover:border-line-strong"
						}`}
					>
						{t(`cat.${id}`)}
					</button>
				))}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
				{filtered.map((tech) => (
					<div
						key={tech.name}
						className="rounded-lg border border-line bg-surface p-3"
					>
						<div className="flex items-center gap-2.5">
							<div
								className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
								style={{ background: tech.bgColor }}
							>
								<i
									className={`ti ${tech.icon} text-base`}
									style={{ color: tech.iconColor }}
									aria-hidden="true"
								/>
							</div>
							<div>
								<p className="text-[16px] font-medium text-ink">
									{tech.name}
								</p>
								<p className="font-mono text-[13px] text-muted">
									{t(`cat.${tech.category}`)}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
