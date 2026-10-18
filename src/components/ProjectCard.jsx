export default function ProjectCard() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Featured Project
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          NixDock
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          A full-stack workspace management platform that helps freelancers
          organize clients, projects, tasks, and deliverables in one place.
        </p>

        <div className="mt-8 grid gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-md">
            <img
              src="/images/dashboard-desktop.png"
              alt="NixDock workspace management dashboard"
              className="block h-auto w-full"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Full-stack application
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Organize client work in one place.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              NixDock brings client management, projects, tasks, and
              deliverables together in a workspace built for freelancers and
              small service businesses.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">
                Key Features
              </h4>

              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Client and project management</li>
                <li>• Task and deliverable tracking</li>
                <li>• Secure authentication with JWT</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "PostgreSQL", "JWT"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://nix-dock.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
              >
                Live Demo ↗
              </a>

              <a
                href="https://github.com/nico-devstudio/NixDock"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Source Code ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
