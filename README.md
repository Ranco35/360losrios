# 360 Los Ríos

Página de portafolio y programas de desarrollo. Next.js + Tailwind CSS.

## Desarrollo local

```powershell
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

1. Sube el proyecto a GitHub (repositorio nuevo).
2. En [vercel.com](https://vercel.com) → **Add New Project** → Importa el repo.
3. Deploy automático en cada push a `main`.

## Dominio 360losrios.cl

En Vercel → Project Settings → Domains:

- Agrega `360losrios.cl` y `www.360losrios.cl`.
- En Cloudflare, crea los registros DNS que indique Vercel:
  - Raíz: A → `76.76.21.21`
  - www: CNAME → `cname.vercel-dns.com`
