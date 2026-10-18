const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Building APIs and application logic.",
    skills: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database & Tools",
    description: "Working with data, version control, and deployment.",
    skills: ["PostgreSQL", "Git", "GitHub", "Vercel", "Render"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Technical Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Tools I use to build web applications.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          My current stack covers frontend development, backend APIs, databases,
          and the tools needed to develop and deploy full-stack applications.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
