# Live Dashboard Portfolio — Guía de Integración

## Estructura de archivos generados

```
src/
├── data/
│   └── portfolioData.ts        ← tus datos: proyectos, perfil, respuestas del chat
├── hooks/
│   ├── useGitHubActivity.ts    ← commits reales via GitHub API pública
│   └── useRepoCommits.ts       ← contador de commits por repo
├── layout/
│   └── TopBar.tsx              ← barra superior con tabs, ticker y badge LIVE
├── panels/
│   ├── ActivityFeed.tsx        ← feed de actividad de GitHub en tiempo real
│   ├── ChatModule.tsx          ← chat interactivo con respuestas por keywords
│   ├── OperatorPanel.tsx       ← sidebar con perfil, stats y activity feed
│   ├── ProjectWindow.tsx       ← ventana de proyecto con métricas y preview
│   └── StackView.tsx           ← grid de tecnologías con filtros y barras
└── DashboardLayout.tsx         ← layout raíz — reemplaza tu App.tsx actual
```

## Pasos para integrar

### 1. Instalá la font monospace (recomendado: JetBrains Mono)

En tu `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

En tu `tailwind.config.js`:
```js
theme: {
  extend: {
    fontFamily: {
      mono: ['"JetBrains Mono"', 'monospace'],
    },
  },
},
```

### 2. Copiá los archivos a tu proyecto

Copiá cada archivo a la misma ruta relativa dentro de tu `src/`.

### 3. Actualizá `portfolioData.ts` con tus repos reales

```ts
// En PROJECTS[], actualizá repoName con el nombre exacto del repo en GitHub:
repoName: "world-stats-dashboard",  // debe coincidir con github.com/InakiFarinas/<repoName>
```

### 4. Poné tu foto de perfil

Copiá tu foto como `public/avatar.jpg` y ya queda conectada al `OperatorPanel`.

### 5. Reemplazá tu App.tsx

```tsx
// src/App.tsx
import { DashboardLayout } from "./DashboardLayout";

export default function App() {
  return <DashboardLayout />;
}
```

### 6. Verificá que tenés Tabler Icons

```bash
npm install @tabler/icons-react
# o si ya usás CDN en index.html:
# <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
```

## Personalización rápida

| Qué cambiar | Dónde |
|-------------|-------|
| Tus proyectos y repos | `src/data/portfolioData.ts` → `PROJECTS` |
| Tu bio y datos de contacto | `src/data/portfolioData.ts` → `PROFILE` |
| Respuestas del chat | `src/data/portfolioData.ts` → `CHAT_RESPONSES` |
| Tus tecnologías y nivel | `src/panels/StackView.tsx` → `TECHS` |
| Color acento principal | Buscar `#7F77DD` y reemplazar |
| Color acento secundario | Buscar `#D4537E` y reemplazar |

## Cómo funciona la GitHub API

- `useGitHubActivity` llama a `api.github.com/users/InakiFarinas/events/public` sin auth
- Límite: 60 requests/hora por IP (suficiente para un portfolio)
- Si falla, muestra los datos de fallback automáticamente
- `useRepoCommits` obtiene el total de commits via el header `Link` de la API

## Notas

- Todo usa **Tailwind CSS** con clases estándar (sin plugins extra)
- El chat funciona 100% en el frontend con keyword matching, sin backend
- Los colores están hardcodeados en hex para evitar dependencia de CSS variables externas
