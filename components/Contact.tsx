export default function Contact() {
  return (
    <section className="pt-20" id="contact">
      <h2 className="text-center text-4xl font-bold">Let&apos;s talk!</h2>
      <p className="mt-8 text-center">
        Send me an{" "}
        <a href="mailto:contact.subhoghosh@gmail.com" className="text-cyan-400">
          email
        </a>{" "}
        or tell me about your project right here.
      </p>

      <form className="mt-16 bg-zinc-800 p-28 sm:rounded-[3.5rem]" method="post" data-netlify="true">
        <div>
          <label className="block font-semibold" htmlFor="user_name">
            Name
          </label>
          <input
            className="mt-3 block w-full rounded-lg border-zinc-700 bg-transparent p-3 focus:border-cyan-400 focus:ring-0"
            type="text"
          />
        </div>

        <div className="mt-8">
          <label className="block font-semibold" htmlFor="user_email">
            Email address
          </label>
          <input
            className="mt-3 block w-full rounded-lg border-zinc-700 bg-transparent p-3 focus:border-cyan-400 focus:ring-0"
            type="email"
          />
        </div>

        <div className="mt-8">
          <label className="block font-semibold" htmlFor="user_message">
            Message
          </label>
          <textarea
            className="mt-3 block h-32 w-full rounded-lg border-zinc-700 bg-transparent p-3 focus:border-cyan-400 focus:ring-0"
            name="message"
            id="user_message"
            cols={30}
            rows={0}
          ></textarea>
        </div>

        <button className="mt-10 w-full rounded-lg bg-zinc-700 py-3 px-8 text-white">
          SEND
        </button>
      </form>
    </section>
  );
}
