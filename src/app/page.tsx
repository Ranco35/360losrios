interface Project {
  title: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    title: "Hotel Management",
    description: "Sistema de gestión hotelera",
    href: "https://github.com/Ranco35/hotelmanagement",
  },
  // Agrega más proyectos aquí
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <section className="mb-20">
          <p className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            360 Los Ríos
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Desarrollo de Software
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Programas y proyectos de desarrollo. Minimalista y funcional.
          </p>
        </section>

        {/* Proyectos */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Proyectos
          </h2>
          <ul className="space-y-6">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900/50"
                >
                  <h3 className="font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <a
            href="https://github.com/Ranco35"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
          >
            GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}
