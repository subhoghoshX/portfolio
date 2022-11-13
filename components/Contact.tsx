export default function Contact() {
  return (
    <section className="mt-32" id="contact">
      <h2 className="text-center text-4xl font-bold">Let&apos;s talk!</h2>
      <p className="mt-8">
        If you&apos;d like to talk about a project, or have something to share,
        you may tell me about it right here or shoot me an email at
        contact.subhoghosh@gmail.com
      </p>

      <form className="mt-16 bg-zinc-800 sm:rounded-[3.5rem] p-28" action="">
        <div>
          <label className="block font-semibold" htmlFor="user_name">
            Name
          </label>
          <input className="mt-3 p-3 block w-full rounded-lg border-zinc-700 bg-transparent focus:border-cyan-400 focus:ring-0" type="text" />
        </div>

        <div className="mt-8">
          <label className="block font-semibold" htmlFor="user_email">
            Email address
          </label>
          <input className="mt-3 p-3 block w-full rounded-lg border-zinc-700 bg-transparent focus:border-cyan-400 focus:ring-0" type="email" />
        </div>

        <div className="mt-8">
          <label className="block font-semibold" htmlFor="user_message">
            Message
          </label>
          <textarea
            className="mt-3 p-3 h-32 block w-full rounded-lg border-zinc-700 bg-transparent focus:border-cyan-400 focus:ring-0"
            name="message"
            id="user_message"
            cols={30}
            rows={0}
          ></textarea>
        </div>

        <button className="mt-10 rounded-lg bg-zinc-700 py-3 px-8 text-white w-full">
          SEND
        </button>
      </form>
    </section>
  );
}
