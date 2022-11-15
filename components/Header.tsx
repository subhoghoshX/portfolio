import Link from "next/link";
import { useState } from "react";
import { MoonIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between py-6">
      <Link href="/">
        <a className="font-bold">
          <img
            className="h-10 w-10 rounded-full border shadow-sm"
            src="https://avatars.githubusercontent.com/u/108616679?v=4"
            alt=""
          />
        </a>
      </Link>

      <div className="flex items-center gap-x-3">
        {/* TODO: make the menu better */}
        {isOpen && (
          <div
            onClick={() => setIsOpen((s) => !s)}
            className="fixed inset-0 bg-zinc-900/50 backdrop-blur"
          ></div>
        )}
        <nav
          className={`absolute -right-3 top-3 w-56 flex-col gap-y-4 rounded-3xl border bg-white px-6 pt-20 pb-12 text-sm shadow-sm dark:border-gray-700 dark:bg-[#2b2f37] sm:static sm:block sm:w-auto sm:space-x-6 sm:rounded-full sm:bg-transparent sm:px-8 sm:py-2.5 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a
            className="dark:hover:text-cyan-400"
            href="#skills"
            onClick={() => setIsOpen((s) => !s)}
          >
            Skills
          </a>
          <a
            className="dark:hover:text-cyan-400"
            href="#projects"
            onClick={() => setIsOpen((s) => !s)}
          >
            Projects
          </a>
          <a
            className="dark:hover:text-cyan-400"
            href="#contact"
            onClick={() => setIsOpen((s) => !s)}
          >
            Contact
          </a>
          <a
            className="dark:hover:text-cyan-400"
            href="/links"
            onClick={() => setIsOpen((s) => !s)}
          >
            Links
          </a>
        </nav>
        <DarkToggleButton className="z-10 sm:hidden" />
        <button
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border p-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 sm:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <DarkToggleButton className="hidden sm:flex" />
    </header>
  );
}

interface DarkToggleButtonProps {
  className: string;
}

function DarkToggleButton({ className }: DarkToggleButtonProps) {
  function toggleDark() {
    if (JSON.parse(localStorage.getItem("isDark") || "false")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDark", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDark", "true");
    }
  }

  return (
    <button
      className={`${className} flex h-10 w-10 items-center justify-center rounded-full border p-1.5 shadow-sm dark:border-gray-700`}
      onClick={toggleDark}
    >
      <MoonIcon className="h-6 w-6 stroke-zinc-700 dark:stroke-cyan-400" />
    </button>
  );
}
