export default function Contact() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center">Let&apos;s talk!</h2>
      <p className="mt-8">
        If you&apos;d like to talk about a project, or have something to share,
        you may tell me about it right here or shoot me an email at
        contact.subhoghosh@gmail.com
      </p>

      <form className="mt-6" action="">
        <div>
          <label className="font-semibold block" htmlFor="user_name">
            Name
          </label>
          <input className="block w-full rounded mt-1" type="text" />
        </div>

        <div className="mt-4">
          <label className="font-semibold block" htmlFor="user_email">
            Email
          </label>
          <input className="block w-full rounded mt-1" type="email" />
        </div>

        <div className="mt-4">
          <label className="font-semibold block" htmlFor="user_message">
            Message
          </label>
          <textarea
            className="block w-full rounded mt-1"
            name="message"
            id="user_message"
            cols={30}
            rows={0}
          ></textarea>
        </div>

        <button className="py-2 px-8 bg-gray-900 text-white mt-4 rounded">
          SEND
        </button>
      </form>
    </section>
  );
}
