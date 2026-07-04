"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">

        <div className="text-5xl mb-6">
          🛡️
        </div>

        <h1 className="text-3xl font-bold text-white">
          ZDS Secure AI
        </h1>

        <p className="text-gray-400 mt-4">
          Initializing AI Security...
        </p>

        <div className="mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>

      </div>
    </div>
  );
}
