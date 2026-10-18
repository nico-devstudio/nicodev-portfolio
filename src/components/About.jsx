export default function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="mx-auto w-full max-w-sm">
          <img
            src="/images/about-me.png"
            alt="Nico, web developer at NicoDev Studio"
            className="aspect-4/5 w-full rounded-3xl border-4 border-white object-cover shadow-xl ring-1 ring-slate-200"
          />
        </div>

        <div className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Building useful software, one project at a time.
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              I'm a self-taught web developer focused on building practical,
              reliable web applications. I enjoy turning ideas into working
              products and understanding how each part of an application fits
              together.
            </p>

            <p>
              My projects give me hands-on experience with React, Node.js,
              Express, and PostgreSQL, from building user interfaces to
              implementing APIs, authentication, and database operations.
            </p>

            <p>
              I'm continuing to grow as a developer and looking for
              opportunities to contribute to a team, collaborate with clients,
              and build software that solves real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
