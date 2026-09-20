import { PROFILE } from "../data/portfolioData";
import { useI18n } from "../i18n/context";

const ITEMS = [1, 2, 3, 4, 5, 6];

const LINK_RE =
	/([\w.+-]+@[\w-]+(?:\.[\w-]+)+|\+54 9 11 3595-9887)/g;

function hrefFor(token: string) {
	return token.includes("@") ? `mailto:${token}` : PROFILE.whatsapp;
}

/** Convierte el email y el WhatsApp de las respuestas en links. */
function linkify(text: string) {
	return text.split(LINK_RE).map((part, i) =>
		i % 2 === 1 ? (
			<a
				key={i}
				href={hrefFor(part)}
				target="_blank"
				rel="noopener noreferrer"
				className="font-medium text-ink underline underline-offset-2 hover:text-accent-soft"
			>
				{part}
			</a>
		) : (
			part
		),
	);
}

export function Faq() {
	const { t } = useI18n();

	return (
		<div className="rounded-lg border border-line bg-surface divide-y divide-line overflow-hidden">
			{ITEMS.map((n) => (
				<details key={n} className="group">
					<summary className="flex items-center justify-between gap-3 px-4 min-h-[52px] cursor-pointer list-none text-[16px] font-medium text-ink hover:bg-raised transition-colors [&::-webkit-details-marker]:hidden">
						{t(`faq.q${n}`)}
						<i
							className="ti ti-chevron-down text-muted transition-transform group-open:rotate-180"
							aria-hidden="true"
						/>
					</summary>
					<p className="px-4 pb-4 text-[16px] leading-relaxed text-soft max-w-[65ch]">
						{linkify(t(`faq.a${n}`))}
					</p>
				</details>
			))}
		</div>
	);
}
