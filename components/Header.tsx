import Link from "next/link";
import { useState } from "react";
import { MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="py-6 flex items-center justify-between relative">
      <Link href="/">
        <a className="font-bold">
          <img className="h-10 w-10 rounded-full border shadow-sm" src="https://avatars.githubusercontent.com/u/108616679?v=4" alt="" />
        </a>
      </Link>

      <div className="flex items-center gap-x-3">
        {/* TODO: make the menu better */}
        <nav
          className={`absolute right-0 top-16 bg-gray-300 border shadow-sm sm:rounded-full dark:bg-gray-900 px-6 py-12 rounded flex-col gap-y-4 w-48 sm:block sm:px-8 sm:py-2 sm:static sm:bg-transparent sm:w-auto sm:space-x-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/links">Links</a>
        </nav>
        <DarkToggleButton className="sm:hidden" />
        <button
          className={`p-1 hover:bg-gray-300 dark:hover:bg-gray-900 rounded relative sm:hidden ${
            isOpen ? "bg-gray-300" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <DarkToggleButton className="hidden sm:block" />
    </header>
  );
}

interface DarkToggleButtonProps {
  className: string;
}

function DarkToggleButton({className}: DarkToggleButtonProps) {
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
    <button className={`${className} border rounded-full p-1.5 shadow-sm`} onClick={toggleDark}>
      <MoonIcon className="h-6 w-6" />
    </button>
  )
}
