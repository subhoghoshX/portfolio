export default function Project({
  title,
  desc,
  liveUrl,
  codeUrl,
  previewUrl,
  alt,
  isOpenSource,
}) {
  return (
    <div className="md:grid md:grid-cols-12 md:items-center md:gap-x-8">
      <img
        className="aspect-video rounded-lg md:col-span-5 md:h-full"
        src={previewUrl}
        alt={alt}
      />
      <div className="mt-4 md:col-span-7 md:mt-0">
        <div>
          <h4 className="text-xl font-bold md:text-base">{title}</h4>
          <p className="mt-2 text-gray-700 md:text-sm">{desc}</p>
        </div>
        <div className="mt-4 space-x-5 text-white">
          <a
            href={liveUrl}
            className="inline-block rounded bg-gray-900 px-12 py-2"
          >
            View Live
          </a>
          <a
            href={codeUrl}
            className="inline-block rounded bg-gray-900 px-12 py-2"
          >
            {isOpenSource ? "My Contrbutions" : "Code"}
          </a>
        </div>
      </div>
    </div>
  );
}
