export default function Contact() {
  return (
    <section className="pt-20" id="contact">
      <article className="lg:hidden">
        <h2 className="text-center text-4xl font-bold">Let&apos;s talk!</h2>
        <p className="mt-8 text-center">
          Send me an{" "}
          <a
            href="mailto:contact.subhoghosh@gmail.com"
            className="text-cyan-400"
          >
            email
          </a>{" "}
          or please fill out the form below.
        </p>
      </article>

      <form
        className="mt-16 rounded-3xl border p-10 shadow-lg shadow-zinc-900/10 dark:border-zinc-700/50 dark:bg-zinc-800 sm:rounded-[3.5rem] md:p-28 lg:mt-0 lg:grid lg:grid-cols-12 lg:overflow-hidden lg:p-0"
        method="post"
        data-netlify="true"
        name="contact"
      >
        <div className="col-span-5 hidden bg-zinc-100 p-16 dark:bg-zinc-900/30 lg:block">
          <h2 className="text-4xl font-bold">Let&apos;s talk!</h2>
          <p className="mt-8">
            Send me an{" "}
            <a
              href="mailto:contact.subhoghosh@gmail.com"
              className="text-cyan-500 dark:text-cyan-400"
            >
              email
            </a>{" "}
            or please fill out the form below.
          </p>
        </div>

        <div className="col-span-7 lg:p-16">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block font-semibold" htmlFor="user_name">
              Name
            </label>
            <input
              className="mt-3 block w-full rounded-lg border-zinc-700 bg-transparent p-3 focus:border-cyan-400 focus:ring-0"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="mt-8">
            <label className="block font-semibold" htmlFor="user_email">
              Email address
            </label>
            <input
              className="mt-3 block w-full rounded-lg border-zinc-700 bg-transparent p-3 focus:border-cyan-400 focus:ring-0"
              type="email"
              name="email"
              required
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
              required
            ></textarea>
          </div>

          {/*          <button
            type="submit"
            className="mt-10 w-full rounded-lg bg-zinc-500 py-3 px-8 text-cyan-400 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            SEND
          </button>
*/}
          <button
            type="submit"
            className="mt-10 w-full rounded-lg border border-cyan-600 py-3 px-8 text-cyan-500 text-cyan-400 hover:bg-cyan-50 hover:bg-zinc-600 dark:border-cyan-800 dark:bg-cyan-900/10 dark:text-cyan-400 dark:hover:bg-zinc-600 dark:hover:bg-cyan-900/30"
          >
            SEND
          </button>
        </div>
      </form>
    </section>
  );
}
