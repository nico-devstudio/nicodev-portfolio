export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:gap-6 sm:text-left">
        <a
          href="#home"
          className="flex items-center transition hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="NicoDev Studio logo"
            className="h-5 w-auto object-contain"
          />
        </a>

        <p>
          © {new Date().getFullYear()} NicoDev Studio. Built with React and
          Tailwind CSS.
        </p>

        <a
          href="https://github.com/nico-devstudio"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-blue-600"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
