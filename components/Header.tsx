import Link from "next/link";
import { useState } from "react";
import { MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 flex items-center justify-between relative">
      <Link href="/">
        <a className="font-bold">
          <img className="h-10 w-10 rounded-full border" src="https://avatars.githubusercontent.com/u/108616679?v=4" alt="" />
        </a>
      </Link>

      <div className="flex items-center gap-x-3">
        {/* TODO: make the menu better */}
        <nav
          className={`absolute right-0 top-16 bg-gray-300 dark:bg-gray-900 px-6 py-12 rounded flex-col gap-y-4 w-48 sm:block sm:p-1 sm:static sm:bg-transparent sm:w-auto sm:space-x-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="sm:hidden">
          <MoonIcon className="h-6 w-6" />
        </button>
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
      <button className="hidden sm:block">
        <MoonIcon className="h-6 w-6" />
      </button>
    </header>
  );
}
