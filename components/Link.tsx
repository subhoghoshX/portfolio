import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Link({ children, label, href }) {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="group flex justify-between px-8 py-6 hover:bg-zinc-700/70"
    >
      <div className="flex">
        {children}
        <div className="ml-4 text-xl">{label}</div>
      </div>
      <ChevronRightIcon className="ml-24 h-8 w-8 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
