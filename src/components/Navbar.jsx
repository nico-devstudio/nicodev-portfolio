import { useState } from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="NicoDev Studio logo"
            className="h-5 w-auto object-contain"
          />
        </a>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>

          <a
            href="https://github.com/nico-devstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="text-slate-600 transition hover:text-blue-600"
          >
            <IconBrandGithub size={20} stroke={1.8} />
          </a>

          <a
            href="https://www.linkedin.com/in/nico-garilva-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="text-slate-600 transition hover:text-blue-600"
          >
            <IconBrandLinkedin size={20} stroke={1.8} />
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Contact
            </a>
            <div className="flex items-center gap-5 border-t border-slate-200 pt-4">
              <a
                href="https://github.com/nico-devstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-slate-600 transition hover:text-blue-600"
              >
                <IconBrandGithub size={22} stroke={1.8} />
              </a>

              <a
                href="https://www.linkedin.com/in/nico-garilva-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-slate-600 transition hover:text-blue-600"
              >
                <IconBrandLinkedin size={22} stroke={1.8} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
