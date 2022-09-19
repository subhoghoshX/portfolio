import Project from "./Project";

export default function Projects() {
  return (
    <article className="mt-20" id="projects">
      <h2 className="text-4xl font-bold text-center sm:text-5xl">Projects</h2>
      <h3 className="mt-8 text-sm text-blue-800">Personal projects:</h3>
      <p className="mt-2">
        I love to build something in my free time. Below are some of my
        tinkerings.
      </p>
      <div className="mt-10 space-y-14">
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus. Aliquam eleifend ut sem id interdum. Duis ornare mollis pretium. Vestibulum finibus sem non posuere accumsan. Ut elementum ornare suscipit."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus. Aliquam eleifend ut sem id interdum. Duis ornare mollis pretium. Vestibulum finibus sem non posuere accumsan. Ut elementum ornare suscipit."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus. Aliquam eleifend ut sem id interdum. Duis ornare mollis pretium. Vestibulum finibus sem non posuere accumsan. Ut elementum ornare suscipit."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
      </div>
      <h3 className="mt-20 text-sm text-blue-800">
        Open source contributions:
      </h3>
      <p className="mt-2">
        Apart from bringing my own ideas to life, I also enjoy exploring and
        participating in community projects.
      </p>
      <div className="mt-10 space-y-14">
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus. Aliquam eleifend ut sem id interdum. Duis ornare mollis pretium. Vestibulum finibus sem non posuere accumsan. Ut elementum ornare suscipit."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus. Aliquam eleifend ut sem id interdum. Duis ornare mollis pretium. Vestibulum finibus sem non posuere accumsan. Ut elementum ornare suscipit."
          previewUrl="https://via.placeholder.com/1600x900"
          alt="preview"
          liveUrl="#"
          codeUrl="https://github.com/subhoghoshX/portfolio"
          isOpenSource={false}
        />
        <Project
          title="An out of the world project"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex mi. Nulla a lacinia nisl. Quisque scelerisque velit elit, id imperdiet ipsum malesuada maximus. Aliquam eleifend ut sem id interdum. Duis ornare mollis pretium. Vestibulum finibus sem non posuere accumsan. Ut elementum ornare suscipit."
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
