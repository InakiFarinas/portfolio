import { PROFILE } from "../data/portfolioData";
import { useI18n } from "../i18n/context";
import { ActivityFeed } from "./ActivityFeed";

interface OperatorPanelProps {
	avatarSrc?: string; // ruta a tu foto, ej: "/avatar.jpg"
	/** Versión corta para el drawer móvil: solo perfil, sin feed. */
	compact?: boolean;
}

export function OperatorPanel({ avatarSrc, compact }: OperatorPanelProps) {
	const { t } = useI18n();

	return (
		<div
			className={`flex flex-col gap-3 py-3 px-3 ${compact ? "" : "h-full overflow-y-auto"}`}
		>
			<div className="rounded-lg border border-line bg-surface overflow-hidden">
				<div className="flex items-center justify-between px-3 py-2 border-b border-line">
					<h2 className="text-[15px] font-medium text-soft">{t("panel.title")}</h2>
					<div className="flex gap-1.5" aria-hidden="true">
						<span className="w-2.5 h-2.5 rounded-full bg-dot-red" />
						<span className="w-2.5 h-2.5 rounded-full bg-dot-amber" />
						<span className="w-2.5 h-2.5 rounded-full bg-dot-green" />
					</div>
				</div>

				<div className="flex items-center gap-3 px-4 py-4">
					<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent-line shrink-0">
						{avatarSrc ? (
							<img
								src={avatarSrc}
								alt={PROFILE.name}
								className="w-full h-full object-cover"
							/>
						) : (
							<div className="w-full h-full bg-accent-wash flex items-center justify-center">
								<i className="ti ti-user text-2xl text-accent" aria-hidden="true" />
							</div>
						)}
					</div>
					<div className="min-w-0">
						<p className="text-[16px] font-medium text-ink">{PROFILE.name}</p>
						<p className="text-[14px] text-muted">{t("profile.role")}</p>
					</div>
				</div>
			</div>

			{!compact && (
				<div className="rounded-lg border border-line bg-surface overflow-hidden">
					<ActivityFeed />
				</div>
			)}
		</div>
	);
}
