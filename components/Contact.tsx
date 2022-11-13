export default function Contact() {
  return (
    <section className="mt-20" id="contact">
      <h2 className="text-center text-4xl font-bold">Let&apos;s talk!</h2>
      <p className="mt-8">
        If you&apos;d like to talk about a project, or have something to share,
        you may tell me about it right here or shoot me an email at
        contact.subhoghosh@gmail.com
      </p>

      <form className="mt-6" action="">
        <div>
          <label className="block font-semibold" htmlFor="user_name">
            Name
          </label>
          <input className="mt-1 block w-full rounded" type="text" />
        </div>

        <div className="mt-4">
          <label className="block font-semibold" htmlFor="user_email">
            Email
          </label>
          <input className="mt-1 block w-full rounded" type="email" />
        </div>

        <div className="mt-4">
          <label className="block font-semibold" htmlFor="user_message">
            Message
          </label>
          <textarea
            className="mt-1 block w-full rounded"
            name="message"
            id="user_message"
            cols={30}
            rows={0}
          ></textarea>
        </div>

        <button className="mt-4 rounded bg-gray-900 py-2 px-8 text-white">
          SEND
        </button>
      </form>
    </section>
  );
}
