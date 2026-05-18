export default function AssetCard({
  title,
  type,
  status,
  risk,
}) {
  return (
    <div className="border border-cyan-500 bg-zinc-900 p-6 rounded-2xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-2">
        {title}
      </h2>

      <p className="text-gray-400 mb-2">
        Type: {type}
      </p>

      <p className="text-green-400 mb-2">
        Status: {status}
      </p>

      <p className="text-red-400">
        Risk Level: {risk}
      </p>

    </div>
  );
}

