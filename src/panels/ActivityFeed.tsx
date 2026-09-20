import { useMemo } from "react";
import { useGitHubActivity } from "../hooks/useGitHubActivity";
import { PROFILE } from "../data/portfolioData";
import { useI18n } from "../i18n/context";

export function ActivityFeed() {
	const { items, loading } = useGitHubActivity(PROFILE.github);
	const { t } = useI18n();

	// Un renglón por repo (con cantidad y último movimiento), en vez de repetir cada evento.
	const repos = useMemo(() => {
		const map = new Map<string, { repo: string; count: number; time: string }>();
		for (const item of items) {
			const entry = map.get(item.repo);
			if (entry) entry.count += 1;
			else map.set(item.repo, { repo: item.repo, count: 1, time: item.time });
		}
		return [...map.values()].slice(0, 5);
	}, [items]);

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-3 py-2 border-b border-line">
				<h2 className="text-[15px] font-medium text-soft">{t("feed.title")}</h2>
				{loading && (
					<span role="status" className="text-[13px] text-muted animate-pulse">
						{t("feed.syncing")}
					</span>
				)}
			</div>

			<div className="py-1">
				{repos.map(({ repo, count, time }) => (
					<a
						key={repo}
						href={`https://github.com/${PROFILE.github}/${repo}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-3 min-h-[44px] hover:bg-raised transition-colors"
					>
						<i className="ti ti-git-commit text-[16px] text-accent shrink-0" aria-hidden="true" />
						<div className="min-w-0 flex-1">
							<p className="text-[15px] text-body truncate">{repo}</p>
							<p className="font-mono text-[13px] text-muted">
								{t(count === 1 ? "feed.event.one" : "feed.event.other", { n: count })}
							</p>
						</div>
						<span className="font-mono text-[13px] text-muted shrink-0">{time}</span>
					</a>
				))}
				{!loading && repos.length === 0 && (
					<p className="px-3 py-3 text-[14px] text-muted">{t("feed.empty")}</p>
				)}
			</div>

			<div className="border-t border-line px-3 py-2">
				<a
					href={`https://github.com/${PROFILE.github}`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 min-h-[44px] text-[14px] text-muted hover:text-accent transition-colors"
				>
					<i className="ti ti-brand-github text-[16px]" aria-hidden="true" />
					{t("feed.profile")}
					<i className="ti ti-arrow-up-right text-[14px]" aria-hidden="true" />
				</a>
			</div>
		</div>
	);
}
