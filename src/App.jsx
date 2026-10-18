import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] lg:gap-20 lg:py-28"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Web Developer
            </p>

            <h2 className="mb-3 text-lg font-semibold text-slate-700">
              Hi, I'm Nico.
            </h2>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Building web applications that solve real problems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build responsive web applications using React, Node.js, and
              PostgreSQL, with a focus on practical solutions and clean code.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 max-md:justify-center">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Explore my projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs md:max-w-none">
            <img
              src="/images/profile.png"
              alt="Nico, web developer at NicoDev Studio"
              className="aspect-square w-full rounded-3xl border-4 border-white object-cover shadow-xl ring-1 ring-slate-200"
            />
          </div>
        </section>

        <ProjectCard />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
