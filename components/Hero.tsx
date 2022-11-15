import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <article className="text-center md:flex md:items-center md:gap-10 md:py-14 md:text-left">
      <div>
        <h1 className="flex flex-col gap-5">
          <span className="hidden text-cyan-500 dark:text-cyan-400 md:block">
            Hi,
          </span>
          <span className="text-4xl font-bold sm:text-5xl">
            <span className="md:hidden">Hi, </span>I&apos;m Subho.
          </span>
        </h1>
        <p className="mt-5 text-zinc-600 dark:text-zinc-400">
          I am a full-stack software engineer who enjoy working with talented
          designers to build innovative user experiences with React.
        </p>
        <div className="mt-6 flex justify-center gap-8 text-zinc-600 dark:text-zinc-400 md:justify-start">
          <a href="https://twitter.com/subhoghosh_" target="_blank" rel="noopener norefferer">
            <SiTwitter className="h-5 w-5 hover:text-zinc-900 dark:hover:text-zinc-300" />
          </a>
          <a href="https://github.com/subhoghoshX" target="_blank" rel="noopener norefferer">
            <SiGithub className="h-5 w-5 hover:text-zinc-900 dark:hover:text-zinc-300" />
          </a>
          <a href="https://www.linkedin.com/in/subho-ghosh-7a59aa250/" target="_blank" rel="noopener norefferer">
            <SiLinkedin className="h-5 w-5 hover:text-zinc-900 dark:hover:text-zinc-300" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-md md:mx-0 md:max-w-none">
        <img src="programming.svg" alt="computer illustration" />
      </div>
    </article>
  );
}
