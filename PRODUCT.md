# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Dos audiencias por igual: reclutadores/empresas que evalúan contratar a un Frontend Dev junior, y clientes freelance (dueños de negocios) que buscan a alguien que les construya un sitio como el de la inmobiliaria. Llegan a evaluar rápido si Iñaki es capaz y cómo contactarlo.

## Product Purpose
Portfolio personal de Iñaki Fariñas (Frontend Dev · Junior, GitHub: InakiFarinas). Existe para conseguir trabajo (remoto o Gran Buenos Aires) y clientes. Éxito: el visitante ve proyectos reales y contacta o revisa el CV.

## Positioning
Dos cosas a la vez: (1) la interfaz misma, con estilo dashboard/operador (paneles con aspecto de ventana, chat, feed de actividad), demuestra habilidad de UI; (2) hay proyectos reales en producción, incluido el sitio de un cliente (juliancabrerapropiedades.com).

## Operating Context
Una sola página con scroll: header solo de navegación e idioma (en móvil suma un ícono de mail), sidebar con perfil y actividad de GitHub, hero con titular, CTA por email con copiar y CV, tarjetas de proyecto con captura y preview en vivo, preguntas frecuentes (freelance, cómo empezar, tiempos, stack, experiencia, disponibilidad), stack en formato package.json y enlaces de contacto directos (email, WhatsApp, LinkedIn, GitHub). El chat simulado se eliminó. No hay formulario de contacto.

## Capabilities and Constraints
- Stack: React 19, Vite, Tailwind CSS 4 (tokens de color con `@theme` en `src/index.css`), TypeScript; deploy en Vercel.
- Copy actual en español rioplatense (voseo).
- Bilingüe español/inglés implementado en `src/i18n/` (diccionario, selector en el TopBar, `<html lang>`, título y descripción dinámicos).
- No mostrar métricas hardcodeadas (líneas de código, coverage, años de experiencia): se eliminaron. El único dato numérico por proyecto es el conteo de commits de GitHub, que se oculta si la API falla.

## Evidence on Hand
- Proyectos: Julian Cabrera Propiedades (juliancabrerapropiedades.com, en producción; repo `Inmobiliaria-Zanola`) y MigraScore (ranking de 8 países de destino migratorio, poblaciones-mundiales.vercel.app; repo `world-dashboard`; sin backend, datos estáticos; parte de los puntajes son estimaciones editoriales pendientes de validar, según su README).
- Actividad y commits reales vía GitHub (hooks `useGitHubActivity`, `useRepoCommits`).
- No hay testimonios ni métricas de negocio verificadas: no fabricar.

## Product Principles
- La interfaz es parte de la prueba: cada detalle debe demostrar oficio frontend.
- Lo real primero: proyectos en producción y actividad verificable por encima de cifras decorativas.
- Contactar debe ser fácil desde cualquier punto.
- Bilingüe de verdad: español e inglés con el mismo nivel de cuidado.
