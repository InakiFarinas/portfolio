import { useEffect, useRef, useState, useCallback } from "react";
import { getChatResponse } from "../data/portfolioData";

interface Message {
	id: string;
	from: "bot" | "user";
	text: string;
	time: string;
}

const INITIAL_TEXT =
	"¡Hola! Soy Iñaki Bot. Estoy online. ¿En qué puedo ayudarte hoy?";

const QUICK_REPLIES = [
	"¿Con qué tecnologías trabajás?",
	"¿Cuál es tu experiencia?",
	"¿Estás disponible?",
	"¿Cómo te contacto?",
];

function now() {
	return new Date().toLocaleTimeString("es-AR", {
		hour: "2-digit",
		minute: "2-digit",
	});
}

function useTypingEffect(text: string, speed = 30) {
	const [displayed, setDisplayed] = useState("");

	useEffect(() => {
		// Reset displayed text asynchronously to avoid synchronous setState in effect
		const resetTimer = setTimeout(() => setDisplayed(""), 0);
		let i = 0;
		const interval = setInterval(() => {
			setDisplayed(text.slice(0, i + 1));
			i++;
			if (i >= text.length) clearInterval(interval);
		}, speed);
		return () => {
			clearInterval(interval);
			clearTimeout(resetTimer);
		};
	}, [text, speed]);

	return displayed;
}

// Initial messages are created lazily inside the component to avoid
// impure calls during module initialization.

export function ChatModule() {
	const [messages, setMessages] = useState<Message[]>(() => [
		{
			id: "0",
			from: "bot",
			text: INITIAL_TEXT,
			time: now(),
		},
	]);
	const [input, setInput] = useState("");
	const [typing, setTyping] = useState(false);
	// `currentBotMsgId` se deriva de los mensajes para evitar setState en efectos
	const currentBotMsgId = (() => {
		const lastBot = [...messages].reverse().find((m) => m.from === "bot");
		return lastBot?.id ?? "0";
	})();
	const bottomRef = useRef<HTMLDivElement>(null);

	// Obtener el texto del mensaje actual siendo escrito
	const currentBotMsg = messages.find((m) => m.id === currentBotMsgId);
	const currentBotText = currentBotMsg?.text || "";
	const typedText = useTypingEffect(currentBotText);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, typing]);

	const sendMessage = useCallback((text: string) => {
		if (!text.trim()) return;
		const userMsg: Message = {
			id: Date.now().toString(),
			from: "user",
			text: text.trim(),
			time: now(),
		};
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setTyping(true);

		setTimeout(
			() => {
				const botMsg: Message = {
					id: (Date.now() + 1).toString(),
					from: "bot",
					text: getChatResponse(text),
					time: now(),
				};
				setMessages((prev) => [...prev, botMsg]);
				setTyping(false);
			},
			800 + Math.random() * 400,
		);
	}, []);

	return (
		<div className="flex flex-col h-full min-h-0">
			{/* Header */}
			<div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1e2535] bg-[#0a0c10] shrink-0">
				<div className="flex items-center gap-2">
					<span className="text-[10px] tracking-widest text-[#8a9bbb] uppercase font-mono">
						Chat Interactivo — Pregúntame algo
					</span>
				</div>
				{/* Quick replies (hidden on very small screens) */}
				<div className="hidden sm:flex gap-1.5 flex-wrap justify-end">
					{QUICK_REPLIES.map((q) => (
						<button
							key={q}
							onClick={() => sendMessage(q)}
							className="text-[9px] px-2 py-1 rounded border border-[#1e2535] bg-[#0d1017] text-[#a8c5e8] hover:border-[#7F77DD] hover:text-[#7F77DD] transition-colors font-mono whitespace-nowrap"
						>
							{q}
						</button>
					))}
				</div>
			</div>

			{/* Messages */}
			<div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 min-h-0">
				{messages.map((msg) => (
					<div
						key={msg.id}
						className={`flex gap-2 items-start ${msg.from === "user" ? "flex-row-reverse" : ""}`}
					>
						{/* Avatar */}
						<div
							className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-mono font-medium shrink-0 mt-0.5 border ${
								msg.from === "bot"
									? "bg-[#1e1645] text-[#a78bfa] border-[#3d3272]"
									: "bg-[#161b27] text-[#a8c5e8] border-[#1e2535]"
							}`}
						>
							{msg.from === "bot" ? "IF" : "V"}
						</div>
						{/* Bubble */}
						<div
							className={msg.from === "user" ? "items-end flex flex-col" : ""}
						>
							<div
								className={`px-3 py-2 rounded-lg text-[12px] font-mono leading-relaxed max-w-xs lg:max-w-sm border ${
									msg.from === "bot"
										? "bg-[#1e1645] text-[#c4b5fd] border-[#3d3272]"
										: "bg-[#161b27] text-[#a0aec0] border-[#1e2535]"
								}`}
							>
								{msg.from === "bot" && msg.id === currentBotMsgId
									? typedText
									: msg.text}
								{msg.from === "bot" &&
									msg.id === currentBotMsgId &&
									typedText.length < currentBotText.length && (
										<span className="animate-pulse">▋</span>
									)}
							</div>
							<p
								className={`text-[9px] text-[#6b7b9d] mt-0.5 font-mono ${
									msg.from === "user" ? "text-right" : ""
								}`}
							>
								{msg.time}
							</p>
						</div>
					</div>
				))}

				{/* Typing indicator */}
				{typing && (
					<div className="flex gap-2 items-center">
						<div className="w-6 h-6 rounded-full bg-[#1e1645] border border-[#3d3272] flex items-center justify-center text-[9px] font-mono text-[#a78bfa]">
							IF
						</div>
						<div className="px-3 py-2 rounded-lg bg-[#1e1645] border border-[#3d3272] flex gap-1 items-center">
							<span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-bounce [animation-delay:0ms]" />
							<span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-bounce [animation-delay:150ms]" />
							<span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-bounce [animation-delay:300ms]" />
						</div>
					</div>
				)}
				<div ref={bottomRef} />
			</div>

			{/* Input */}
			<div className="flex gap-2 px-4 py-3 border-t border-[#1e2535] bg-[#0a0c10] shrink-0">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
					placeholder="escribí tu pregunta..."
					className="flex-1 bg-[#161b27] border border-[#1e2535] rounded px-3 py-2 text-[11px] font-mono text-[#a0aec0] placeholder-[#2d3748] outline-none focus:border-[#7F77DD] transition-colors"
				/>
				<button
					onClick={() => sendMessage(input)}
					className="px-4 py-2 rounded text-[11px] font-mono font-medium transition-colors"
					style={{
						background: "linear-gradient(135deg, #7F77DD, #D4537E)",
						color: "#fff",
					}}
				>
					enviar
				</button>
			</div>
		</div>
	);
}
