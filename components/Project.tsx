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
    <div>
      <img className="rounded-lg aspect-video" src={previewUrl} alt={alt} />
      <div>
        <h4 className="text-xl font-bold mt-4">{title}</h4>
        <p className="mt-2 text-gray-700">{desc}</p>
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
  );
}
