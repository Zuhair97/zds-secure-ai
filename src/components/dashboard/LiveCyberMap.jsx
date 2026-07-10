"use client";

export default function LiveCyberMap() {
  return (
    <div className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-6 shadow-lg">

      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Global Cyber Attack Map
      </h2>

      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 to-slate-800 h-[420px]">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full h-full object-cover opacity-30"
        />

        {/* Nigeria */}
        <div className="absolute left-[48%] top-[58%]">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
        </div>

        {/* USA */}
        <div className="absolute left-[20%] top-[35%]">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
        </div>

        {/* China */}
        <div className="absolute left-[73%] top-[42%]">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-ping"></div>
        </div>

        {/* Europe */}
        <div className="absolute left-[50%] top-[28%]">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
        </div>

        {/* Live Attack Lines */}

        <div className="absolute left-[21%] top-[36%] w-[290px] h-[2px] bg-gradient-to-r from-red-500 to-transparent rotate-[22deg] animate-pulse"></div>

        <div className="absolute left-[50%] top-[29%] w-[170px] h-[2px] bg-gradient-to-r from-cyan-500 to-transparent rotate-[40deg] animate-pulse"></div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <p className="text-red-400 text-2xl font-bold">238</p>
          <p className="text-slate-400 text-sm">Active Attacks</p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <p className="text-green-400 text-2xl font-bold">2,614</p>
          <p className="text-slate-400 text-sm">Threats Blocked</p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <p className="text-cyan-400 text-2xl font-bold">99.98%</p>
          <p className="text-slate-400 text-sm">Protection</p>
        </div>

      </div>

    </div>
  );
}
