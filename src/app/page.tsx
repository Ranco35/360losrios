interface Project {
  title: string;
  description: string;
  status: "producción" | "desarrollo";
  href?: string;
}

const projects: Project[] = [
  {
    title: "Hotel Management 🏨",
    description: "Sistema de gestión hotelera.",
    status: "desarrollo",
  },
  {
    title: "Sistema de Tareas ✅",
    description:
      "Plataforma de gestión de tareas y productividad para equipos.",
    status: "producción",
  },
  {
    title: "Sistema de Reservas 📅",
    description:
      "Motor de reservas para hoteles y espacios (day use, hospedaje, grupos).",
    status: "desarrollo",
  },
  {
    title: "Tarjeta de Fidelización 💳",
    description:
      "Programa de puntos digital para negocios, sin papel ni plástico.",
    status: "producción",
  },
  {
    title: "Sistema Gym 🏋️",
    description:
      "Gestión de membresías, asistencia y pagos para gimnasios.",
    status: "desarrollo",
  },
];

function StatusBadge({ status }: { status: Project["status"] }) {
  const isProduction = status === "producción";
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${
        isProduction
          ? "bg-green-500/15 text-green-400"
          : "bg-neutral-500/15 text-neutral-400"
      }`}
    >
      {isProduction ? "En producción" : "En desarrollo"}
    </span>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52V6.94a4.85 4.85 0 0 1-1-.25z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.instagram.com/eduardo_proboste_furet/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.tiktok.com/@eduardoprobostefuret",
    label: "TikTok",
    icon: TikTokIcon,
  },
  {
    href: "https://www.linkedin.com/in/eduardo-proboste-furet-38267314/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/Ranco35",
    label: "GitHub",
    icon: GitHubIcon,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <section className="mb-20">
          <p className="mb-2 text-sm font-medium text-neutral-400">
            360 Los Ríos
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Desarrollo de Software
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Programas y proyectos de desarrollo. Minimalista y funcional.
          </p>
        </section>

        {/* Proyectos */}
        <section className="mb-20">
          <h2 className="mb-6 text-sm font-medium text-neutral-400">
            Proyectos
          </h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="rounded-lg border border-neutral-800 p-5 transition-colors hover:border-neutral-700 hover:bg-neutral-900/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        {project.description}
                      </p>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Parcelas en Venta */}
        <section className="mb-20">
          <h2 className="mb-6 text-sm font-medium text-neutral-400">
            Propiedades
          </h2>
          <a
            href="/ventas"
            className="block rounded-lg border border-neutral-800 p-5 transition-colors hover:border-neutral-600 hover:bg-neutral-900/50 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-neutral-100 group-hover:text-white">
                  Parcelas Dollinco, Futrono 🌿
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Parcelas agrícolas de agrado — ideales para construir tu casa
                  de veraneo. A solo 10 minutos de Playa Coique, en un entorno
                  natural tranquilo en la Región de Los Ríos.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-blue-300">
                  Ver parcelas disponibles →
                </span>
              </div>
              <span className="inline-block rounded-full px-3 py-0.5 text-xs font-medium bg-blue-500/15 text-blue-400 shrink-0">
                En venta
              </span>
            </div>
          </a>
        </section>

        {/* Sobre mí */}
        <section className="mb-20">
          <h2 className="mb-4 text-sm font-medium text-neutral-400">
            Sobre mí
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            <span className="font-medium text-neutral-100">
              Eduardo Proboste Furet
            </span>{" "}
            — Desarrollador de software desde la Región de Los Ríos, Chile.
            Construyendo herramientas simples y funcionales para negocios
            reales.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-800">
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-neutral-500 hover:text-neutral-100 transition-colors"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
