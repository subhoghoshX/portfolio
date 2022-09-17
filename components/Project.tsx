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
    <div className="md:grid md:grid-cols-12 md:gap-x-8 md:items-center">
      <img
        className="rounded-lg aspect-video md:col-span-5 md:h-full"
        src={previewUrl}
        alt={alt}
      />
      <div className="md:col-span-7 mt-4 md:mt-0">
        <div>
          <h4 className="text-xl font-bold md:text-base">{title}</h4>
          <p className="mt-2 text-gray-700 md:text-sm">{desc}</p>
        </div>
        <div className="text-white mt-4 space-x-5">
          <a
            href={liveUrl}
            className="bg-gray-900 rounded px-12 py-2 inline-block"
          >
            View Live
          </a>
          <a
            href={codeUrl}
            className="bg-gray-900 rounded px-12 py-2 inline-block"
          >
            {isOpenSource ? "My Contrbutions" : "Code"}
          </a>
        </div>
      </div>
    </div>
  );
}
