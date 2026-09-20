import { useEffect, useRef, useState } from "react";
import { useRepoCommits } from "../hooks/useRepoCommits";
import { useCountUp } from "../hooks/useCountUp";
import { useTypewriter } from "../hooks/useTypewriter";
import { PROFILE } from "../data/portfolioData";
import { useI18n } from "../i18n/context";

interface Project {
	id: string;
	slug: string;
	title: string;
	description: string;
	screenshotUrl?: string;
	status: "Archivado" | "Deployado" | "Construyendo";
	color: string;
	colorDark: string;
	icon: string;
	demoUrl: string;
	repoUrl: string;
	repoName: string;
	stack: string[];
}

interface ProjectWindowProps {
	project: Project;
}

const STATUS_STYLE = {
	Deployado: { key: "status.live", color: "var(--color-ok)" },
	Construyendo: { key: "status.building", color: "var(--color-warn)" },
	Archivado: { key: "status.archived", color: "var(--color-muted)" },
} as const;

export function ProjectWindow({ project }: ProjectWindowProps) {
	const { t } = useI18n();
	const { commits, loading } = useRepoCommits(PROFILE.github, project.repoName);
	const animatedCommits = useCountUp(commits ?? 0, 1000);
	const status = STATUS_STYLE[project.status];
	// El iframe pesa: se monta recién cuando la tarjeta entra en pantalla (y nunca en móvil, donde está oculto).
	const cardRef = useRef<HTMLElement>(null);
	const [inView, setInView] = useState(
		() => typeof IntersectionObserver === "undefined",
	);
	useEffect(() => {
		const el = cardRef.current;
		if (!el || inView) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					io.disconnect();
				}
			},
			{ rootMargin: "200px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [inView]);
	const wide =
		typeof window !== "undefined" &&
		window.matchMedia("(min-width: 768px)").matches;
	const filename = useTypewriter(`${project.slug}.tsx`, inView);
	const title = t(`project.title.${project.id}`);
	const description = t(`project.desc.${project.id}`);

	return (
		<article
			ref={cardRef}
			className="project-card flex flex-col rounded-lg overflow-hidden border bg-surface"
			style={{ "--pc": project.color } as React.CSSProperties}
		>
			<div className="h-[3px]" style={{ background: project.color }} aria-hidden="true" />
			<div className="flex items-center gap-2 px-3 py-2 bg-canvas border-b border-line">
				<div className="flex gap-1.5" aria-hidden="true">
					{["bg-dot-red", "bg-dot-amber", "bg-dot-green"].map((color, i) => (
						<span
							key={color}
							className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${inView ? color : "bg-line-strong"}`}
							style={{ transitionDelay: `${i * 140}ms` }}
						/>
					))}
				</div>
				<span className="font-mono text-[13px] text-muted ml-1 flex-1 truncate">
					{filename}
				</span>
				<span
					className="text-[13px] font-medium px-2 py-0.5 rounded border"
					style={{
						color: status.color,
						borderColor: `color-mix(in srgb, ${status.color} 30%, transparent)`,
						background: `color-mix(in srgb, ${status.color} 12%, transparent)`,
					}}
				>
					{t(status.key)}
				</span>
			</div>

			{/* Desktop: live preview. The open-site link stays reachable even if the site refuses to be framed. */}
			<div
				className="hidden md:block relative h-72 bg-canvas overflow-hidden"
			>
				{project.screenshotUrl && (
					<img
						src={project.screenshotUrl}
						alt=""
						className="absolute inset-0 w-full h-full object-cover object-top"
					/>
				)}
				{inView && wide && (
				<iframe
					src={project.demoUrl}
					className="absolute top-0 left-0 border-0 pointer-events-none"
					style={{
						transform: "scale(0.5)",
						transformOrigin: "top left",
						width: "200%",
						height: "200%",
					}}
					loading="lazy"
					title={title}
					tabIndex={-1}
				/>
				)}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: "linear-gradient(to top, var(--color-surface) 0%, transparent 40%)",
					}}
				/>
				<a
					href={project.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 min-h-[44px] rounded bg-canvas/90 border border-accent-line text-[15px] text-ink hover:border-[var(--pc)] transition-colors"
				>
					{t("project.open")}
					<i className="ti ti-arrow-up-right text-[16px]" aria-hidden="true" />
				</a>
				<div className="absolute bottom-2 left-3 flex gap-1 flex-wrap">
					{project.stack.slice(0, 3).map((tech) => (
						<span
							key={tech}
							className="text-[13px] px-1.5 py-0.5 rounded bg-black/60"
							style={{
								color: "#e2e8f0",
								border: `1px solid ${project.color}66`,
							}}
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Mobile: no live iframe (weight); imagen con acción clara, chips debajo para no tapar la captura. */}
			<div
				className="md:hidden relative overflow-hidden h-44"
				style={{ background: project.colorDark }}
			>
				{project.screenshotUrl && (
					<img
						src={project.screenshotUrl}
						alt={t("project.shot", { name: title })}
						className="absolute inset-0 w-full h-full object-cover object-top"
					/>
				)}
				<a
					href={project.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 min-h-[44px] rounded bg-canvas/90 border border-accent-line text-[15px] text-ink"
				>
					{t("project.open")}
					<i className="ti ti-arrow-up-right text-[16px]" aria-hidden="true" />
				</a>
			</div>

			<div className="px-4 pt-3 pb-1">
				<h3 className="text-[20px] font-bold tracking-tight text-ink">{title}</h3>
				<p className="text-[15px] text-soft mt-1 leading-snug">
					{description}
				</p>
				<div className="md:hidden mt-2 flex gap-1 flex-wrap">
					{project.stack.slice(0, 3).map((tech) => (
						<span
							key={tech}
							className="text-[13px] px-1.5 py-0.5 rounded text-ink"
							style={{ border: `1px solid ${project.color}66` }}
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
				<a
					href={project.repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 min-h-[44px] text-[15px] text-soft hover:text-[var(--pc)] transition-colors"
				>
					<i className="ti ti-brand-github text-[16px]" aria-hidden="true" />
					{t("project.code")}
				</a>
				<a
					href={project.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 min-h-[44px] text-[15px] text-soft hover:text-[var(--pc)] transition-colors"
				>
					<i className="ti ti-external-link text-[16px]" aria-hidden="true" />
					{t("project.demo")}
				</a>
				{(loading || commits !== null) && (
					<span className="ml-auto flex items-center gap-1.5 font-mono text-[13px] text-muted">
						<i className="ti ti-git-commit text-[16px]" aria-hidden="true" />
						<span style={{ color: project.color }}>{loading ? "…" : animatedCommits}</span>
						{t("project.commits")}
					</span>
				)}
			</div>
		</article>
	);
}
