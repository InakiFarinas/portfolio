import { useState } from "react";
import { TopBar } from "./layout/TopBar";
import { OperatorPanel } from "./panels/OperatorPanel";
import { ProjectWindow } from "./panels/ProjectWindow";
import { ChatModule } from "./panels/ChatModule";
import { StackView } from "./panels/StackView";
import { PROJECTS } from "./data/portfolioData";

type Tab = "preview" | "fullview";

// ——— Status bar bottom ———
function StatusBar() {
	return (
		<footer className="flex items-center justify-between px-4 py-1.5 bg-[#0a0c10] border-t border-[#1e2535] shrink-0">
			<div className="flex items-center gap-4">
				<span className="flex items-center gap-1.5 text-[10px] font-mono text-[#4ade80]">
					<i className="ti ti-wifi text-[11px]" />
					conectado
				</span>
				<span className="flex items-center gap-1.5 text-[10px] font-mono text-[#8a9bbb]">
					<i className="ti ti-git-branch text-[11px]" />
					main
				</span>
				<span className="flex items-center gap-1.5 text-[10px] font-mono text-[#8a9bbb]">
					<i className="ti ti-brand-vercel text-[11px]" />
					deployed
				</span>
			</div>
			<span className="text-[10px] font-mono text-[#6b7b9d]">
				iñaki.dev · {new Date().getFullYear()}
			</span>
		</footer>
	);
}

// ——— Main content per tab ———
function MainContent({ tab }: { tab: Tab }) {
	const projects = PROJECTS;

	if (tab === "fullview") {
		return (
			<div className="h-full overflow-y-auto p-4 flex flex-col gap-4">
				{/* Projects Section */}
				<div>
					<div className="flex items-center gap-3 mb-3">
						<span className="text-[10px] text-[#7F77DD] font-mono tracking-widest uppercase">
							Todos los Proyectos
						</span>
						<div className="flex-1 h-px bg-[#1e2535]" />
						<span className="text-[10px] text-[#8a9bbb] font-mono">
							{PROJECTS.length} en pantalla
						</span>
					</div>
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
						{PROJECTS.map((project) => (
							<ProjectWindow key={project.id} project={project} />
						))}
					</div>
				</div>
				{/* Chat module */}
				<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden flex flex-col min-h-[280px]">
					<ChatModule />
				</div>
				{/* Stack Section */}
				<div>
					<div className="flex items-center gap-3 mb-3">
						<span className="text-[10px] text-[#7F77DD] font-mono tracking-widest uppercase">
							Stack & Skills
						</span>
						<div className="flex-1 h-px bg-[#1e2535]" />
					</div>
					<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden">
						<StackView />
					</div>
				</div>
				{/* Contact Section */}
				<div>
					<div className="flex items-center gap-3 mb-3">
						<span className="text-[10px] text-[#7F77DD] font-mono tracking-widest uppercase">
							Contacto Directo
						</span>
						<div className="flex-1 h-px bg-[#1e2535]" />
					</div>
					<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden p-4">
						<div className="flex flex-col gap-3">
							{[
								{
									icon: "ti-mail",
									label: "Email",
									value: "inakifarinas04@gmail.com",
									href: "mailto:inakifarinas04@gmail.com",
								},
								{
									icon: "ti-brand-whatsapp",
									label: "WhatsApp",
									value: "+54 9 11 3595-9887",
									href: "https://wa.me/5491135959887",
								},
								{
									icon: "ti-brand-linkedin",
									label: "LinkedIn",
									value: "linkedin.com/in/iñaki",
									href: "https://linkedin.com",
								},
								{
									icon: "ti-brand-github",
									label: "GitHub",
									value: "github.com/InakiFarinas",
									href: "https://github.com/InakiFarinas",
								},
							].map(({ icon, label, value, href }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 p-3 rounded-lg border border-[#1e2535] hover:border-[#7F77DD] hover:bg-[#161b27] transition-all group"
								>
									<div className="w-8 h-8 rounded-lg bg-[#1e1645] border border-[#3d3272] flex items-center justify-center">
										<i className={`ti ${icon} text-sm text-[#7F77DD]`} />
									</div>
									<div>
										<p className="text-[9px] text-[#8a9bbb] font-mono">
											{label}
										</p>
										<p className="text-[11px] text-[#a0aec0] font-mono group-hover:text-[#a78bfa] transition-colors">
											{value}
										</p>
									</div>
									<i className="ti ti-arrow-up-right text-[#8a9bbb] text-[11px] ml-auto group-hover:text-[#7F77DD]" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}

	// preview — show active projects + chat
	return (
		<div className="h-full overflow-y-auto p-4 flex flex-col gap-4">
			{/* Section header */}
			<div className="flex items-center gap-3">
				<span className="text-[10px] text-[#7F77DD] font-mono tracking-widest uppercase">
					Proyectos Activos
				</span>
				<div className="flex-1 h-px bg-[#1e2535]" />
				<span className="text-[10px] text-[#8a9bbb] font-mono">
					{projects.length} en pantalla
				</span>
			</div>

			{/* Project windows grid */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				{projects.map((project) => (
					<ProjectWindow key={project.id} project={project} />
				))}
			</div>

			{/* Chat module */}
			<div className="rounded-lg border border-[#1e2535] bg-[#0d1017] overflow-hidden flex flex-col min-h-[280px]">
				<ChatModule />
			</div>
		</div>
	);
}

// ——— Root layout ———
export function DashboardLayout() {
	const [tab, setTab] = useState<Tab>("preview");

	return (
		<div className="flex flex-col h-screen bg-[#0a0c10] text-[#e2e8f0] overflow-hidden">
			<TopBar activeTab={tab} onTabChange={setTab} />

			<div className="flex flex-1 overflow-hidden">
				{/* Sidebar */}
				<aside className="w-[220px] shrink-0 border-r border-[#1e2535] overflow-y-auto animate-slideUp animate-delay-100">
					<OperatorPanel avatarSrc="/avatar.jpg" />
				</aside>

				{/* Main area */}
				<main className="flex-1 overflow-hidden animate-slideUp animate-delay-200">
					<div key={tab} className="h-full">
						<MainContent tab={tab} />
					</div>
				</main>
			</div>

			<StatusBar />
		</div>
	);
}
