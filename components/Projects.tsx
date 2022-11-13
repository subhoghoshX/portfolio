import Project from "./Project";

export default function Projects() {
  return (
    <article className="mt-20" id="projects">
      <h2 className="text-center text-4xl font-bold sm:text-5xl">Projects</h2>
      <h3 className="mt-20 text-sm text-cyan-400 border border-cyan-800 inline-block px-4 py-1.5 rounded-full bg-cyan-900/30">Personal Projects</h3>
      <div className="mt-10 space-y-14">
        <Project
          title="Laurete"
          desc="A blazing fast application to convert your tweet into beautiful images. Have all the configuration options you need at your fingertip. Simple by default, powerful when neeeded."
          previewUrl="/laureate.png"
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
      <h3 className="mt-32 text-sm text-cyan-400 border border-cyan-800 inline-block px-4 py-1.5 rounded-full bg-cyan-900/30">Opensource Contributions</h3>
{/*      <h3 className="mt-20 text-sm text-blue-800">
        Open source contributions:
      </h3>
      <p className="mt-2">
        Apart from bringing my own ideas to life, I also enjoy exploring and
        participating in community projects.
      </p>
*/}      <div className="mt-10 space-y-14">
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
