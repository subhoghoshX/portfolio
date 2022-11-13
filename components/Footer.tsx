import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="border-t border-dotted border-gray-400 py-6">
        <p className="text-center">
          Copyright &copy; 2022. All rights reserved.
        </p>

        <div className="mt-4 flex justify-center gap-x-8">
          <a
            href="https://twitter.com/subhoghosh_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter className="h-6 w-8" />
          </a>
          <a
            href="https://github.com/subhoghoshX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/subho-ghosh-7a59aa250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
