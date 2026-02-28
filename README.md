# 360 Los Ríos

Sitio web de portafolio y programas de desarrollo de software — [360losrios.cl](https://360losrios.cl)

## Stack

- **Next.js** 16 — Framework React con SSR
- **React** 19
- **TypeScript** 5
- **Tailwind CSS** 4 — Estilos utilitarios
- **Vercel** — Hosting y deploy automático

## Estructura del proyecto

```
src/app/
├── layout.tsx      # Layout raíz (metadata, fuentes, modo oscuro)
├── page.tsx        # Página principal
└── globals.css     # Estilos globales y tema Tailwind
```

## Secciones de la página

| Sección       | Descripción                                              |
|---------------|----------------------------------------------------------|
| Hero          | Nombre del proyecto y descripción                        |
| Proyectos     | Cards con nombre, descripción y badge de estado          |
| Sobre mí      | Bio de Eduardo Proboste Furet                            |
| Footer        | Íconos SVG con links a Instagram, TikTok, LinkedIn, GitHub |

### Proyectos incluidos

| Proyecto                | Estado        |
|-------------------------|---------------|
| Hotel Management        | En desarrollo |
| Sistema de Tareas       | En producción |
| Sistema de Reservas     | En desarrollo |
| Tarjeta de Fidelización | En producción |
| Sistema Gym             | En desarrollo |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Script          | Comando           | Descripción                  |
|-----------------|-------------------|------------------------------|
| `npm run dev`   | `next dev`        | Servidor de desarrollo       |
| `npm run build` | `next build`      | Build de producción          |
| `npm run start` | `next start`      | Servidor de producción       |
| `npm run lint`  | `eslint`          | Verificar código con ESLint  |

## Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → Importa el repo.
3. Deploy automático en cada push a `main`.

## Dominio 360losrios.cl

En Vercel → Project Settings → Domains:

- Agrega `360losrios.cl` y `www.360losrios.cl`.
- En Cloudflare, crea los registros DNS que indique Vercel:
  - Raíz: `A` → `76.76.21.21`
  - www: `CNAME` → `cname.vercel-dns.com`
