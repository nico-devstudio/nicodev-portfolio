export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-12 text-center shadow-xl shadow-slate-900/10 sm:px-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Get in Touch
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's build something useful.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          I'm open to discussing developer opportunities, collaborating with
          teams, and helping clients build practical web applications.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:nicogarilva@gmail.com"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md"
          >
            Email Me
          </a>

          <a
            href="https://github.com/nico-devstudio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-800"
          >
            GitHub Profile ↗
          </a>

          <a
            href="https://www.linkedin.com/in/nico-garilva-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-800"
          >
            LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
