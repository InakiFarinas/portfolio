import { useEffect, useRef, useState } from "react";
import { TopBar } from "./layout/TopBar";
import { OperatorPanel } from "./panels/OperatorPanel";
import { ProjectWindow } from "./panels/ProjectWindow";
import { Faq } from "./panels/Faq";
import { StackView } from "./panels/StackView";
import { ActivityFeed } from "./panels/ActivityFeed";
import { PROJECTS, PROFILE } from "./data/portfolioData";
import { useI18n } from "./i18n/context";

function SectionHeading({ title, count }: { title: string; count?: string }) {
	return (
		<div className="flex items-baseline gap-3 mb-4">
			<h2 className="text-[22px] font-bold tracking-tight text-ink">{title}</h2>
			<div className="flex-1 h-px bg-line self-center" />
			{count && <span className="font-mono text-[14px] text-muted">{count}</span>}
		</div>
	);
}

function Footer() {
	const { t } = useI18n();
	return (
		<footer className="flex items-center justify-between gap-3 px-4 py-2 bg-canvas border-t border-line shrink-0 font-mono text-[13px] text-muted">
			<span>{t("footer.location")}</span>
			<span className="hidden md:flex items-center gap-4">
				<a href={`mailto:${PROFILE.email}`} className="hover:text-ink transition-colors">
					{PROFILE.email}
				</a>
				<a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
					CV
				</a>
			</span>
			<span>
				<span className="hidden sm:inline">{PROFILE.name} · </span>
				{new Date().getFullYear()}
			</span>
		</footer>
	);
}

const CONTACTS = [
	{ icon: "ti-mail", key: "contact.email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
	{ icon: "ti-brand-whatsapp", key: "contact.whatsapp", value: PROFILE.whatsappLabel, href: PROFILE.whatsapp },
	{ icon: "ti-brand-linkedin", key: "contact.linkedin", value: "linkedin.com/in/inaki-farinas", href: "https://www.linkedin.com/in/inaki-farinas/" },
	{ icon: "ti-brand-github", key: "contact.github", value: `github.com/${PROFILE.github}`, href: `https://github.com/${PROFILE.github}` },
];

const DRAWER_NAV = [
	{ href: "#proyectos", key: "nav.projects" },
	{ href: "#stack", key: "nav.stack" },
	{ href: "#contacto", key: "nav.contact" },
	{ href: "#faq", key: "nav.faq" },
];

function Hero() {
	const { t } = useI18n();
	const [copied, setCopied] = useState(false);

	async function copyEmail() {
		let ok = false;
		try {
			await navigator.clipboard.writeText(PROFILE.email);
			ok = true;
		} catch {
			// Sin permiso de portapapeles: se intenta con el método clásico.
			const area = document.createElement("textarea");
			area.value = PROFILE.email;
			area.setAttribute("readonly", "");
			area.style.position = "fixed";
			area.style.opacity = "0";
			document.body.appendChild(area);
			area.select();
			try {
				ok = document.execCommand("copy");
			} catch {
				ok = false;
			}
			area.remove();
		}
		if (ok) {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}
	}

	return (
		<section className="pt-3 md:pt-2 pb-4">
			<div className="md:hidden flex items-center gap-3 mb-4">
				<img
					src="/avatar.jpg"
					alt={t("hero.avatar")}
					className="w-12 h-12 rounded-full object-cover border-2 border-accent-line"
				/>
				<div>
					<p className="text-[16px] font-medium text-ink">{PROFILE.name}</p>
					<p className="text-[14px] text-muted">{t("profile.role")}</p>
				</div>
			</div>
			<p className="flex items-center gap-2 text-[15px] text-ok">
				<span className="w-2 h-2 rounded-full bg-ok" aria-hidden="true" />
				{t("profile.status")}
			</p>
			<h1 className="mt-3 max-w-[18ch] text-[clamp(2.25rem,6vw,4rem)] leading-[1.02] font-bold tracking-tight text-ink text-balance">
				{t("hero.title")} <span className="text-accent">{t("hero.titleAccent")}</span>
			</h1>
			<p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-soft">
				{t("hero.sub")}
			</p>
			<div className="mt-6 flex flex-wrap gap-3">
				<div className="flex">
					<a
						href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(t("cta.mailSubject"))}`}
						className="flex items-center gap-2 px-5 min-h-[48px] rounded-l bg-accent text-canvas text-[16px] font-medium hover:bg-accent-soft transition-colors"
					>
						<i className="ti ti-mail text-[16px]" aria-hidden="true" />
						{t("cta.talk")}
					</a>
					<button
						type="button"
						onClick={copyEmail}
						aria-label={copied ? t("cta.copied") : t("cta.copy")}
						title={copied ? t("cta.copied") : t("cta.copy")}
						className="flex items-center justify-center min-w-[48px] min-h-[48px] rounded-r border-l border-canvas/30 bg-accent text-canvas hover:bg-accent-soft transition-colors"
					>
						<i className={`ti ${copied ? "ti-check" : "ti-copy"} text-[18px]`} aria-hidden="true" />
					</button>
					<span role="status" className="sr-only">
						{copied ? t("cta.copied") : ""}
					</span>
				</div>
				<a
					href="#proyectos"
					className="flex items-center gap-2 px-5 min-h-[48px] rounded border border-accent-line text-accent text-[16px] font-medium hover:bg-accent-wash transition-colors"
				>
					{t("cta.projects")}
					<i className="ti ti-arrow-down text-[16px]" aria-hidden="true" />
				</a>
			</div>
		</section>
	);
}

function MainContent() {
	const { t } = useI18n();

	return (
		<div className="h-full overflow-y-auto scroll-smooth p-4 md:p-6 flex flex-col gap-6 md:gap-10 [&>*]:shrink-0">
			<Hero />

			<section id="proyectos" className="scroll-mt-4">
				<SectionHeading
					title={t("section.projects")}
					count={t("count.projects", { n: PROJECTS.length })}
				/>
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
					{PROJECTS.map((project, i) => (
						<ProjectWindow key={project.id} project={project} featured={i === 0} />
					))}
				</div>
			</section>

			<section id="stack" className="scroll-mt-4">
				<SectionHeading title={t("section.stack")} />
				<div className="rounded-lg border border-line bg-surface overflow-hidden">
					<StackView />
				</div>
			</section>

			<div className="md:hidden rounded-lg border border-line bg-surface overflow-hidden">
				<ActivityFeed />
			</div>

			<section id="contacto" tabIndex={-1} className="md:hidden scroll-mt-4 outline-none">
				<SectionHeading title={t("section.contact")} />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{CONTACTS.map(({ icon, key, value, href }) => (
						<a
							key={key}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 p-3 rounded-lg border border-line bg-surface hover:border-accent-strong hover:bg-raised transition-colors group"
						>
							<div className="w-10 h-10 rounded-lg bg-accent-wash border border-accent-line flex items-center justify-center shrink-0">
								<i className={`ti ${icon} text-lg text-accent`} aria-hidden="true" />
							</div>
							<div className="min-w-0">
								<p className="text-[13px] text-muted">{t(key)}</p>
								<p className="font-mono text-[15px] text-body truncate group-hover:text-accent transition-colors">
									{value}
								</p>
							</div>
							<i className="ti ti-arrow-up-right text-muted text-[16px] ml-auto group-hover:text-accent" aria-hidden="true" />
						</a>
					))}
				</div>
			</section>

			<section id="faq" className="scroll-mt-4">
				<SectionHeading title={t("section.faq")} />
				<Faq />
			</section>
		</div>
	);
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
	const { t } = useI18n();
	const panelRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const previous = document.activeElement as HTMLElement | null;
		closeRef.current?.focus();
		return () => previous?.focus({ preventScroll: true });
	}, []);

	function onKeyDown(e: React.KeyboardEvent) {
		if (e.key === "Escape") {
			onClose();
			return;
		}
		if (e.key !== "Tab" || !panelRef.current) return;
		const focusable = panelRef.current.querySelectorAll<HTMLElement>(
			'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
		);
		if (focusable.length === 0) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	return (
		<div className="fixed inset-0 z-50 md:hidden" onKeyDown={onKeyDown}>
			<div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
			<div
				ref={panelRef}
				role="dialog"
				aria-modal="true"
				aria-label={t("panel.title")}
				className="relative w-72 max-w-[85vw] h-full bg-canvas border-r border-line overflow-y-auto"
			>
				<div className="p-2 flex justify-end">
					<button
						ref={closeRef}
						className="p-2.5 rounded hover:bg-raised min-w-[44px] min-h-[44px]"
						onClick={onClose}
						aria-label={t("menu.close")}
					>
						<i className="ti ti-x text-lg text-muted" aria-hidden="true" />
					</button>
				</div>
				<nav aria-label={t("nav.label")} className="px-3 pb-2 flex flex-col">
					<a
						href="/cv.pdf"
						target="_blank"
						rel="noopener noreferrer"
						onClick={onClose}
						className="px-3 min-h-[44px] flex items-center rounded text-[16px] text-ink hover:bg-raised"
					>
						{t("cta.cv")}
					</a>
					{DRAWER_NAV.map(({ href, key }) => (
						<a
							key={key}
							href={href}
							onClick={onClose}
							className="px-3 min-h-[44px] flex items-center rounded text-[16px] text-ink hover:bg-raised"
						>
							{t(key)}
						</a>
					))}
				</nav>
				<div className="px-3 pb-2 grid grid-cols-2 gap-2">
					{CONTACTS.map(({ icon, key, href }) => (
						<a
							key={key}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 min-h-[44px] rounded border border-accent-line text-accent text-[15px]"
						>
							<i className={`ti ${icon} text-[16px]`} aria-hidden="true" />
							{t(key)}
						</a>
					))}
				</div>
				<OperatorPanel avatarSrc="/avatar.jpg" />
			</div>
		</div>
	);
}

export function DashboardLayout() {
	const { t } = useI18n();
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="flex flex-col h-dvh bg-canvas text-ink overflow-clip">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-2 focus:px-3 focus:py-2 focus:rounded focus:bg-accent focus:text-canvas text-[15px]"
			>
				{t("skip")}
			</a>

			<TopBar onToggleSidebar={() => setSidebarOpen(true)} />

			<div className="flex flex-1 min-h-0 overflow-hidden">
				<aside className="hidden md:flex md:flex-col gap-3 w-[260px] shrink-0 border-r border-line overflow-y-auto">
					<OperatorPanel avatarSrc="/avatar.jpg" />
					<div className="px-3 pb-3 flex flex-col gap-2">
						{CONTACTS.map(({ icon, key, value, href }) => (
							<a
								key={key}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 min-h-[44px] rounded-lg border border-line bg-surface hover:border-accent-strong hover:bg-raised transition-colors group"
							>
								<i className={`ti ${icon} text-[16px] text-accent shrink-0`} aria-hidden="true" />
								<div className="min-w-0">
									<p className="text-[13px] text-muted">{t(key)}</p>
									<p className="font-mono text-[13px] text-body truncate group-hover:text-accent transition-colors">
										{value}
									</p>
								</div>
							</a>
						))}
					</div>
				</aside>

				<main id="main" tabIndex={-1} className="flex-1 min-h-0 overflow-hidden outline-none">
					<MainContent />
				</main>
			</div>

			<Footer />

			{isSidebarOpen && <MobileDrawer onClose={() => setSidebarOpen(false)} />}
		</div>
	);
}
