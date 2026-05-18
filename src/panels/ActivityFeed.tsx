import { useGitHubActivity } from "../hooks/useGitHubActivity";
import { PROFILE } from "../data/portfolioData";

const ICON_MAP = {
	commit: { icon: "ti-git-commit", color: "#7F77DD" },
	deploy: { icon: "ti-rocket", color: "#4ade80" },
	branch: { icon: "ti-git-branch", color: "#f59e0b" },
	other: { icon: "ti-code", color: "#6b7a99" },
};

export function ActivityFeed() {
	const { items, loading } = useGitHubActivity(PROFILE.github);

	return (
		<div className="flex flex-col h-full">
			{/* Header */}
			<div className="flex items-center justify-between px-3 py-2 border-b border-[#1e2535]">
				<span className="text-[10px] tracking-widest text-[#8a9bbb] uppercase font-mono">
					Activity Feed
				</span>
				{loading && (
					<span className="text-[9px] text-[#8a9bbb] animate-pulse">
						syncing...
					</span>
				)}
			</div>

			{/* Feed items */}
			<div className="flex-1 overflow-y-auto py-1">
				{items.map((item) => {
					const { icon, color } = ICON_MAP[item.type];
					return (
						<div
							key={item.id}
							className="flex items-start gap-2 px-3 py-2 hover:bg-[#161b27] transition-colors group"
						>
							<i
								className={`ti ${icon} text-[13px] mt-[2px] flex-shrink-0`}
								style={{ color }}
							/>
							<div className="flex-1 min-w-0">
								<p className="text-[11px] text-[#a8c5e8] font-mono leading-snug md:truncate group-hover:text-[#a0aec0] transition-colors">
									{item.text}
								</p>
								<p className="text-[9px] text-[#6b7b9d] mt-0.5 font-mono">
									{item.repo}
								</p>
							</div>
							<span className="text-[9px] text-[#6b7b9d] flex-shrink-0 font-mono">
								{item.time}
							</span>
						</div>
					);
				})}
			</div>

			{/* Footer link */}
			<div className="border-t border-[#1e2535] px-3 py-2">
				<a
					href={`https://github.com/${PROFILE.github}`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-[10px] text-[#8a9bbb] hover:text-[#7F77DD] transition-colors font-mono"
				>
					<i className="ti ti-brand-github text-[12px]" />
					ver perfil completo
					<i className="ti ti-arrow-up-right text-[10px]" />
				</a>
			</div>
		</div>
	);
}
