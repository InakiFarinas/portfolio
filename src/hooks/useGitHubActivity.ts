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

export function useGitHubActivity(username: string) {
	const [items, setItems] = useState<FeedItem[]>([]);
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
				if (!Array.isArray(events)) return;
				const parsed = events
					.map(parseEvent)
					.filter(Boolean)
					.slice(0, 30) as FeedItem[];
				if (parsed.length > 0) setItems(parsed);
			})
			.catch(() => {})
			.finally(() => setLoading(false));
	}, [username]);

	return { items, loading };
}
