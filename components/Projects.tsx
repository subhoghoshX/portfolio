import Project from "./Project";

export default function Projects() {
  return (
    <article className="py-20" id="projects">
      <h2 className="text-center text-4xl font-bold sm:text-5xl">Projects</h2>
      <h3 className="mt-20 inline-block rounded-full border border-cyan-600 px-4 py-1.5 text-sm text-cyan-500 dark:border-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400">
        Personal Projects
      </h3>
      <div className="mt-10 space-y-20 md:space-y-14">
        <Project
          title="Laurete"
          desc="A blazing fast application to convert your tweet into beautiful images. Have all the configuration options you need at your fingertip. Simple by default, powerful when neeeded."
          previewUrl="/laureate.png"
          alt="preview"
          liveUrl="https://laureate.netlify.app"
          codeUrl="https://github.com/subhoghoshX/laureate"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
      </div>
      <h3 className="mt-32 inline-block rounded-full border border-cyan-600 px-4 py-1.5 text-sm text-cyan-500 dark:border-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400">
        Opensource Contributions
      </h3>
      <div className="mt-10 space-y-14">
        <Project
          title="Create Tailwind"
          desc="A commandline tool to get started with TailwindCSS and TypeScript. It uses popular scaffolding tools like create-next-app or create-vite to create and configure you project."
          previewUrl="/create-tw.gif"
          alt="preview"
          liveUrl="https://github.com/AndrejJurkin/create-tw"
          codeUrl="https://github.com/AndrejJurkin/create-tw/pulls?q=is%3Apr+is%3Aclosed+author%3AsubhoghoshX"
          isOpenSource={false}
        />
        <Project
          title="Defaang"
          desc="A website that curates recently-asked interview questions from FAANG+ to help people practice & prep! It can be seen as an alternative to LeetCode and Glassdoor."
          previewUrl="/defaang.png"
          alt="preview"
          liveUrl="https://defaang.io/"
          codeUrl="https://github.com/csdojo-defaang/defaang/pulls?q=is%3Apr+is%3Aclosed+author%3AsubhoghoshX"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
      </div>
    </article>
  );
}
