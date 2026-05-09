import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Ignore TypeScript missing declaration for CSS side-effect import
// @ts-ignore
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
