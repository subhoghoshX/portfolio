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
          title="Laureate"
          desc="A blazing fast application to convert your tweet into beautiful images. Have all the configuration options you need at your fingertip. Simple by default, powerful when neeeded."
          previewUrl="/laureate.png"
          alt="preview"
          liveUrl="https://laureate.netlify.app"
          codeUrl="https://github.com/subhoghoshX/laureate"
          isOpenSource={false}
        />
        <Project
          title="Execute"
          desc="An editor that allows you to create HTML, CSS, and JS or React projects in your browser. Built with rapid prototyping and pair programming in mind Execute will allow you to bring you ideas to life in no time. Note: This project is still in its early stages."
          previewUrl="/execute.png"
          alt="preview"
          liveUrl="https://github.com/subhoghoshX/execute"
          codeUrl="https://github.com/subhoghoshX/execute"
          isOpenSource={false}
        />
        <Project
          title="Unreal Time"
          desc="A secure peer to peer video conferencing application with the ability to chat and share screen."
          previewUrl="/unrealtime.png"
          alt="preview"
          liveUrl="https://unrealtime.onrender.com"
          codeUrl="https://github.com/subhoghoshX/UnrealTime"
          isOpenSource={false}
        />
        <Project
          title="Teleport"
          desc="A secure peer to peer solution for filesharing. You can send any kind of file with anyone. Audio, video, pdf, images, music etc."
          previewUrl="/teleport.png"
          alt="preview"
          liveUrl="https://teleport-29ju.onrender.com"
          codeUrl="https://github.com/subhoghoshX/teleport"
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
          isOpenSource={true}
        />
        <Project
          title="Defaang"
          desc="A website that curates recently-asked interview questions from FAANG+ to help people practice & prep! It can be seen as an alternative to LeetCode and Glassdoor."
          previewUrl="/defaang.png"
          alt="preview"
          liveUrl="https://defaang.io/"
          codeUrl="https://github.com/csdojo-defaang/defaang/pulls?q=is%3Apr+is%3Aclosed+author%3AsubhoghoshX"
          isOpenSource={true}
        />
      </div>
    </article>
  );
}
