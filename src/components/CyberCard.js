export default function CyberCard({ title, description }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-cyan-500 hover:scale-105 transition duration-300">
      
      <h2 className="text-xl font-bold text-cyan-400 mb-2">
        {title}
      </h2>

      <p className="text-gray-400">
        {description}
      </p>

    </div>
  );
}


