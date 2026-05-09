# Portfolio Iñaki.dev

Este es mi **portfolio personal** desarrollado con [React](https://react.dev) + [Vite](https://vite.dev) y estilizado con [Tailwind CSS](https://tailwindcss.com).  
Aquí muestro mis proyectos, habilidades y formas de contacto.

## Tecnologías utilizadas

- [Vite](https://vite.dev) – tooling rápido para desarrollo y build.
- [React](https://reactjs.org) – librería de componentes.
- [Tailwind CSS](https://tailwindcss.com) – para estilos utilitarios y responsivos.
- [React Icons](https://react-icons.github.io/react-icons/) – para los íconos de tecnologías y redes.
- [Node.js](https://nodejs.org) – entorno de backend.
- [Vercel](https://vercel.com) – deployment en producción.

## Inicio rápido

Para ejecutar el proyecto en tu máquina local:

```bash
# Instalar dependencias
npm install
# o
yarn
# o
pnpm install

# Levantar el servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev

Abre http://localhost:5173
 en tu navegador.
Edita `src/App.tsx` o los componentes en `src/components/` para ver los cambios en tiempo real.

# Generar build de producción
npm run build

# Previsualizar el build
npm run preview
```

Estructura del proyecto:
├─ src/                  # Código fuente principal
├─ src/components/   # Componentes reutilizables (Hero, Techs, Projects, Contact)
├─ src/hooks/        # Hooks y funciones de utilidad
├─ src/theme/        # Temas y estilos
├─ src/main.tsx      # Punto de entrada de React
├─ src/App.tsx       # Layout principal del portfolio
├─ public/           # Imágenes y assets estáticos
├─ index.html        # HTML base de Vite
├─ vite.config.ts    # Configuración de Vite
├─ package.json
└─ README.md

Secciones principales:
    Hero – Introducción y presentación personal.

    Tecnologías – Lista de skills y herramientas con filtro interactivo.

    Proyectos – Muestra de proyectos destacados con tarjetas interactivas.

    Contacto – Formas de contactarme ( email, telefono, mapa).

Deployment
    El proyecto se puede desplegar fácilmente en Vercel:

    Crear una cuenta en Vercel.

    Conectar tu repositorio de GitHub.

    Deploy automático al hacer push a main.

Hecho por [Inaki Fariñas](https://github.com/InakiFarinas)
