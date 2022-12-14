import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import {
  SiGithub,
  SiGitlab,
  SiLeetcode,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Footer from "../components/Footer";
import Link from "../components/Link";
import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Subho Ghosh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-zinc-50 dark:bg-black">
        <div className="container relative flex min-h-screen flex-col border-l border-r border-zinc-200 bg-white text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
          <header className="py-10">
            <NextLink href="/">
              <a className="rounded-full bg-zinc-800 px-5 py-2 hover:bg-zinc-700">
                Go Back
              </a>
            </NextLink>
          </header>
          <main className="mt-10 flex-grow">
            <section className="flex justify-center">
              <div className="divide-y divide-zinc-900 overflow-hidden rounded-xl bg-zinc-800">
                <Link label="Portfolio" href="https://subhoghosh.co">
                  <BsGlobe className="h-7 w-7" />
                </Link>
                <Link label="Twitter" href="https://twitter.com/subhoghosh_">
                  <SiTwitter className="h-7 w-7 fill-[#1DA1F2]" />
                </Link>
                <Link label="GitHub" href="https://github.com/subhoghoshX">
                  <SiGithub className="h-7 w-7" />
                </Link>
                <Link
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/subho-ghosh"
                >
                  <SiLinkedin className="h-7 w-7 fill-[#0A66C2]" />
                </Link>
                <Link label="LeetCode" href="https://leetcode.com/subhoghosh">
                  <SiLeetcode className="h-7 w-7 fill-[#FFA116]" />
                </Link>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
