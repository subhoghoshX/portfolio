import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <article className="text-center md:text-left md:flex md:items-center md:gap-10 md:py-10">
      <div>
        <h1 className="flex flex-col gap-5">
          <span className="text-cyan-400 hidden md:block">Hi,</span>
          <span className="text-4xl font-bold sm:text-5xl"><span className="md:hidden">Hi, </span>I&apos;m Subho.</span>
        </h1>
        <p className="mt-5 dark:text-gray-400">
          I am a full-stack software engineer who enjoy working with talented
          designers to build innovative user experiences with React.
        </p>
        <div className="flex md:justify-start justify-center gap-8 mt-6 dark:text-gray-300">
          <a href="https://twitter.com/subhoghosh_">
            <SiTwitter className="h-5 w-5" />
          </a>
          <a href="https://github.com/subhoghoshX">
            <SiGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/subho-ghosh-7a59aa250/">
            <SiLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mt-10 max-w-md mx-auto md:max-w-none md:mx-0">
        <img src="programming.svg" alt="computer illustration" />
      </div>
    </article>
  );
}
