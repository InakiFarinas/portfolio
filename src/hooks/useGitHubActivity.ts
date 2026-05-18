import { useEffect, useState } from "react";

export interface GitHubEvent {
	id: string;
	type: string;
	repo: { name: string };
	payload: {
		commits?: Array<{ message: string }>;
		ref?: string;
		action?: string;
	};
	created_at: string;
}

export interface FeedItem {
	id: string;
	type: "commit" | "deploy" | "branch" | "other";
	text: string;
	repo: string;
	time: string;
	rawDate: Date;
}

function timeAgo(date: Date): string {
	const secs = Math.floor((Date.now() - date.getTime()) / 1000);
	if (secs < 60) return `${secs}s`;
	const mins = Math.floor(secs / 60);
	if (mins < 60) return `${mins}m`;
	const hrs = Math.floor(mins / 60);
	if (hrs < 24) return `${hrs}h`;
	return `${Math.floor(hrs / 24)}d`;
}

function parseEvent(e: GitHubEvent): FeedItem | null {
	const repoShort = e.repo.name.split("/")[1];
	const date = new Date(e.created_at);

	if (e.type === "PushEvent") {
		const branch = e.payload.ref?.replace("refs/heads/", "") ?? "main";
		return {
			id: e.id,
			type: "commit",
			text: `push a ${branch}`,
			repo: repoShort,
			time: timeAgo(date),
			rawDate: date,
		};
	}
	if (e.type === "CreateEvent") {
		const branch = e.payload.ref ?? "nueva branch";
		return {
			id: e.id,
			type: "branch",
			text: `nueva branch: ${branch}`,
			repo: repoShort,
			time: timeAgo(date),
			rawDate: date,
		};
	}
	if (e.type === "DeploymentEvent" || e.type === "WorkflowRunEvent") {
		return {
			id: e.id,
			type: "deploy",
			text: "deploy completado",
			repo: repoShort,
			time: timeAgo(date),
			rawDate: date,
		};
	}
	return null;
}

const FALLBACK: FeedItem[] = [
	{
		id: "1",
		type: "commit",
		text: "feat: dark mode en dashboard",
		repo: "portfolio",
		time: "2h",
		rawDate: new Date(),
	},
	{
		id: "2",
		type: "deploy",
		text: "deploy → Vercel OK",
		repo: "portfolio",
		time: "18h",
		rawDate: new Date(),
	},
	{
		id: "3",
		type: "branch",
		text: "nueva branch: feat/charts",
		repo: "world-stats",
		time: "1d",
		rawDate: new Date(),
	},
	{
		id: "4",
		type: "commit",
		text: "fix: filtro de tecnologías",
		repo: "world-stats",
		time: "2d",
		rawDate: new Date(),
	},
	{
		id: "5",
		type: "commit",
		text: "style: hero gradients",
		repo: "portfolio",
		time: "3d",
		rawDate: new Date(),
	},
];

export function useGitHubActivity(username: string) {
	const [items, setItems] = useState<FeedItem[]>(FALLBACK);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			`https://api.github.com/users/${username}/events/public?per_page=30`,
			{
				headers: {
					Accept: "application/vnd.github+json",
				},
			},
		)
			.then((r) => r.json())
			.then((events: GitHubEvent[]) => {
				console.log("Primer evento:", JSON.stringify(events[0], null, 2));
				const parsed = events
					.map(parseEvent)
					.filter(Boolean)
					.slice(0, 8) as FeedItem[];
				if (parsed.length > 0) setItems(parsed);
			})
			.catch(() => {})
			.finally(() => setLoading(false));
	}, [username]);

	return { items, loading };
}
