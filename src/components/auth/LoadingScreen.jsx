"use client";

import Image from "next/image";

export default function LoadingScreen() {

  return (

    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">

      <div className="text-center">

        <Image
          src="/logo.png"
          alt="ZDS Secure AI"
          width={120}
          height={120}
          className="mx-auto mb-6"
          priority
        />

        <h1 className="text-3xl font-bold text-white">
          ZDS Secure AI
        </h1>

        <p className="text-gray-400 mt-3">
          Initializing Secure Session...
        </p>

        <div className="mt-8">

          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>

        </div>

      </div>

    </div>

  );

}
