import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="py-6 border-t border-gray-400 border-dotted">
        <p className="text-center">
          Copyright &copy; 2022. All rights reserved.
        </p>

        <div className="flex justify-center gap-x-8 mt-4">
          <a
            href="https://twitter.com/subhoghosh_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter className="w-8 h-6" />
          </a>
          <a
            href="https://github.com/subhoghoshX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/subho-ghosh-7a59aa250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
