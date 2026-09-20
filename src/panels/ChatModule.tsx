import { useEffect, useRef, useState, useCallback } from "react";
import { getChatResponse } from "../i18n/dictionary";
import { useI18n } from "../i18n/context";
import { PROFILE } from "../data/portfolioData";

interface Message {
	id: string;
	from: "bot" | "user";
	text: string;
	ts: number;
	/** Solo bot: 'greeting' o 'reply' (text guarda la pregunta y la respuesta se calcula al render). */
	kind?: "greeting" | "reply";
	/** Clave de la respuesta rápida usada, para que la pregunta también siga el idioma. */
	qk?: string;
}

const QUICK_KEYS = ["chat.q1", "chat.q2", "chat.q3", "chat.q4"];

function fmt(ts: number, locale: string) {
	return new Date(ts).toLocaleTimeString(locale, {
		hour: "2-digit",
		minute: "2-digit",
	});
}

const LINK_RE =
	/([\w.+-]+@[\w-]+(?:\.[\w-]+)+|github\.com\/[\w-]+|\+54 9 11 3595-9887)/g;

function hrefFor(token: string) {
	if (token.includes("@")) return `mailto:${token}`;
	if (token.startsWith("github.com")) return `https://${token}`;
	return PROFILE.whatsapp;
}

/** Convierte email, WhatsApp y GitHub de las respuestas del bot en links. */
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

export function ChatModule() {
	const { t, lang } = useI18n();
	const locale = lang === "es" ? "es-AR" : "en-US";
	const [messages, setMessages] = useState<Message[]>([]);
	const [greetingTs] = useState(() => Date.now());
	const [input, setInput] = useState("");
	const [typing, setTyping] = useState(false);
	const bottomRef = useRef<HTMLDivElement>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// El saludo inicial siempre sigue el idioma activo mientras no haya conversación.
	const shown: Message[] =
		messages.length === 0
			? [{ id: "0", from: "bot", text: "", ts: greetingTs, kind: "greeting" }]
			: messages;

	useEffect(() => {
		bottomRef.current?.scrollIntoView({
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
				? "auto"
				: "smooth",
		});
	}, [messages, typing]);

	useEffect(() => () => clearTimeout(timerRef.current!), []);

	const sendMessage = useCallback(
		(text: string, qk?: string) => {
			if (!text.trim()) return;
			const userMsg: Message = {
				id: `u${Date.now()}`,
				from: "user",
				text: text.trim(),
				ts: Date.now(),
				qk,
			};
			setMessages((prev) => [
				...(prev.length === 0
					? [{ id: "0", from: "bot" as const, text: "", ts: greetingTs, kind: "greeting" as const }]
					: prev),
				userMsg,
			]);
			setInput("");
			setTyping(true);

			timerRef.current = setTimeout(
				() => {
					setMessages((prev) => [
						...prev,
						{
							id: `b${Date.now()}`,
							from: "bot",
							text,
							ts: Date.now(),
							kind: "reply",
							qk,
						},
					]);
					setTyping(false);
				},
				700 + Math.random() * 300,
			);
		},
		[greetingTs],
	);

	return (
		<section aria-labelledby="chat-title" className="flex flex-col h-full min-h-0">
			<div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-b border-line bg-canvas shrink-0">
				<h3
					id="chat-title"
					className="text-[15px] font-medium text-soft"
				>
					{t("chat.title")}
				</h3>
				<div className="flex gap-1.5 flex-wrap justify-end">
					{QUICK_KEYS.map((k) => (
						<button
							key={k}
							onClick={() => sendMessage(t(k), k)}
							className="text-[13px] px-2.5 py-1.5 min-h-[44px] rounded border border-line bg-surface text-soft hover:border-accent-strong hover:text-accent transition-colors"
						>
							{t(k)}
						</button>
					))}
				</div>
			</div>

			<div
				role="log"
				aria-live="polite"
				aria-label={t("chat.log")}
				className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 min-h-0"
			>
				{shown.map((msg) => (
					<div
						key={msg.id}
						className={`flex gap-2 items-start ${msg.from === "user" ? "flex-row-reverse" : ""}`}
					>
						<div
							aria-hidden="true"
							className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-medium shrink-0 mt-0.5 border ${
								msg.from === "bot"
									? "bg-accent-wash text-accent border-accent-line"
									: "bg-raised text-soft border-line"
							}`}
						>
							{msg.from === "bot" ? (
									"IF"
								) : (
									<i className="ti ti-user" />
								)}
						</div>
						<div className={msg.from === "user" ? "items-end flex flex-col" : ""}>
							<div
								className={`px-3 py-2 rounded-lg text-[16px] leading-relaxed max-w-xs lg:max-w-md border ${
									msg.from === "bot"
										? "bg-accent-wash text-accent-soft border-accent-line"
										: "bg-raised text-body border-line"
								}`}
							>
								{msg.from === "bot"
									? linkify(
											msg.kind === "greeting"
												? t("chat.initial")
												: getChatResponse(msg.qk ? t(msg.qk) : msg.text, lang),
										)
									: msg.qk
										? t(msg.qk)
										: msg.text}
							</div>
							<p
								className={`text-[13px] text-muted mt-0.5 ${
									msg.from === "user" ? "text-right" : ""
								}`}
							>
								{fmt(msg.ts, locale)}
							</p>
						</div>
					</div>
				))}

				{typing && (
					<div className="flex gap-2 items-center" aria-hidden="true">
						<div className="w-7 h-7 rounded-full bg-accent-wash border border-accent-line flex items-center justify-center text-[13px] text-accent">
							IF
						</div>
						<div className="px-3 py-2.5 rounded-lg bg-accent-wash border border-accent-line flex gap-1 items-center">
							<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse [animation-delay:0ms]" />
							<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse [animation-delay:200ms]" />
							<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse [animation-delay:400ms]" />
						</div>
					</div>
				)}
				<div ref={bottomRef} />
			</div>

			<form
				className="flex gap-2 px-4 py-3 border-t border-line bg-canvas shrink-0"
				onSubmit={(e) => {
					e.preventDefault();
					sendMessage(input);
				}}
			>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					aria-label={t("chat.inputLabel")}
					placeholder={t("chat.placeholder")}
					className="flex-1 min-w-0 min-h-[44px] bg-raised border border-line rounded px-3 py-2 text-[16px] text-body placeholder-muted focus:border-accent-strong transition-colors"
				/>
				<button
					type="submit"
					className="px-4 py-2 min-h-[44px] rounded text-[15px] font-medium bg-accent text-canvas hover:bg-accent-soft transition-colors"
				>
					{t("chat.send")}
				</button>
			</form>
		</section>
	);
}
