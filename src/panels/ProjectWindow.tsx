import { useRepoCommits } from "../hooks/useRepoCommits";
import { PROFILE } from "../data/portfolioData";
import { useCountUp } from "../hooks/useCountUp";

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
	linesOfCode: number;
	coverage: number;
	demoUrl: string;
	repoUrl: string;
	repoName: string;
	stack: string[];
}

interface ProjectWindowProps {
	project: Project;
}
function MetricBar({
	label,
	value,
	display,
	color,
}: {
	label: string;
	value: number; // 0-100 percentage for bar width
	display: string;
	color: string;
}) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center justify-between">
				<span className="text-[9px] text-[#8a9bbb] uppercase tracking-wider font-mono">
					{label}
				</span>
				<span className="text-[13px] font-mono font-medium" style={{ color }}>
					{display}
				</span>
			</div>
			<div className="h-[2px] bg-[#1e2535] rounded-full overflow-hidden">
				<div
					className="h-full rounded-full transition-all duration-1000"
					style={{ width: `${Math.min(value, 100)}%`, background: color }}
				/>
			</div>
		</div>
	);
}

export function ProjectWindow({ project }: ProjectWindowProps) {
	const { commits, loading } = useRepoCommits(PROFILE.github, project.repoName);
	const isLive =
		project.status === "Deployado" || project.status === "Construyendo";

	// Normalize commit bar: assume 100 commits = 100%
	const commitPct = commits > 0 ? Math.min((commits / 100) * 100, 100) : 40;
	const animatedCommits = useCountUp(commits, 1000);
	const animatedLines = useCountUp(project.linesOfCode, 1200);
	return (
		<div
			className="flex flex-col rounded-lg overflow-hidden border border-[#1e2535] bg-[#0d1017] transition-shadow duration-300 hover:shadow-lg"
			style={
				isLive
					? { borderColor: `${project.color}33`, willChange: "box-shadow" }
					: { willChange: "box-shadow" }
			}
			onMouseEnter={(e) => {
				e.currentTarget.style.borderColor = `${project.color}80`;
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.borderColor = isLive
					? `${project.color}33`
					: "#1e2535";
			}}
		>
			{/* Title bar */}
			<div className="flex items-center gap-2 px-3 py-2 bg-[#0a0c10] border-b border-[#1e2535]">
				<div className="flex gap-1.5">
					<span className="w-2.5 h-2.5 rounded-full bg-[#e24b4a]" />
					<span className="w-2.5 h-2.5 rounded-full bg-[#ba7517]" />
					<span className="w-2.5 h-2.5 rounded-full bg-[#639922]" />
				</div>
				<span className="text-[11px] text-[#8a9bbb] font-mono ml-1 flex-1 truncate">
					{project.repoName}.tsx
				</span>
				{project.status === "Deployado" ? (
					<span
						className="text-[9px] font-medium px-2 py-0.5 rounded border font-mono flex items-center gap-1"
						style={{
							color: "#4ade80",
							borderColor: "#1a3a28",
							background: "#0d1f17",
						}}
					>
						<span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
						Deployado
					</span>
				) : project.status === "Archivado" ? (
					<span className="text-[9px] text-[#8a9bbb] px-2 py-0.5 rounded border border-[#1e2535] bg-[#0a0c10] font-mono">
						Archivado
					</span>
				) : (
					<span
						className="text-[9px] font-medium px-2 py-0.5 rounded border font-mono flex items-center gap-1"
						style={{
							color: "#f6c74f",
							borderColor: "#3a2f12",
							background: "#1a1509",
						}}
					>
						<span className="w-1.5 h-1.5 rounded-full bg-[#f6c74f] animate-pulse" />
						Construyendo
					</span>
				)}
			</div>

			{/* Preview: hide live iframe on small screens for performance */}
			<div className="bg-[#0d1017] overflow-hidden">
				<div className="hidden md:block relative h-72">
					<iframe
						src={project.demoUrl}
						className="absolute inset-0 w-full h-full border-0 pointer-events-none"
						style={{
							display: "block",
							transform: "scale(0.5)",
							transformOrigin: "top left",
							width: "200%",
							height: "200%",
						}}
						loading="lazy"
						title={project.title}
					/>
					<div
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(to top, #0d1017 0%, transparent 40%)",
						}}
					/>
					<div className="absolute bottom-2 left-3 flex gap-1 flex-wrap">
						{project.stack.slice(0, 3).map((tech) => (
							<span
								key={tech}
								className="text-[9px] px-1.5 py-0.5 rounded font-mono"
								style={{
									background: "rgba(0,0,0,0.5)",
									color: project.color,
									border: `0.5px solid ${project.color}44`,
								}}
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Mobile preview: static image or colored placeholder */}
				<div className="md:hidden h-40 flex items-center justify-center bg-gradient-to-br from-[#0d1017] to-[#07090b]">
					{project.screenshotUrl ? (
						<img
							src={project.screenshotUrl}
							alt={project.title}
							className="w-full h-full object-cover"
						/>
					) : (
						<div
							className="w-full h-full flex items-center justify-center"
							style={{ background: project.colorDark || "#111827" }}
						>
							<span className="text-sm font-mono text-[#e2e8f0]">
								{project.title}
							</span>
						</div>
					)}
				</div>
			</div>

			{/* Info */}
			<div className="px-4 pt-3 pb-1">
				<h3 className="text-sm font-medium text-[#e2e8f0] font-mono">
					{project.title}
				</h3>
				<p className="text-[11px] text-[#8a9bbb] mt-0.5 font-mono leading-snug">
					{project.description}
				</p>
			</div>

			{/* Metrics */}
			<div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
				<MetricBar
					label="commits"
					value={commitPct}
					display={loading ? "..." : String(animatedCommits)}
					color={project.color}
				/>
				<MetricBar
					label="líneas"
					value={(animatedLines / 2000) * 100}
					display={animatedLines.toLocaleString()}
					color={project.color}
				/>
				<MetricBar
					label="cobertura"
					value={project.coverage}
					display={`${project.coverage}%`}
					color={project.color}
				/>
			</div>

			{/* Footer links */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-4 py-2 border-t border-[#1e2535]">
				<a
					href={project.repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-[10px] font-mono text-[#8a9bbb] hover:text-[#a0aec0] transition-colors"
				>
					<i className="ti ti-brand-github text-[12px]" />
					código
				</a>
				<a
					href={project.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-[10px] font-mono text-[#8a9bbb] hover:text-[#4ade80] transition-colors"
				>
					<i className="ti ti-external-link text-[12px]" />
					demo live
				</a>
			</div>
		</div>
	);
}
