"use client";

import { useState } from "react";
import Image from "next/image";

const VIDEO_ID = "1vIV2-CUB_A";

export default function IntegrationShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="text-center py-10 sm:py-20 mb-12 sm:mb-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
        Integración articulada en acción
      </h2>
      <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
        Un ejemplo concreto de cómo distintos actores colaboran dentro del mismo ecosistema sin competir entre sí.
      </p>

      <div className="flex justify-center w-full max-w-5xl mx-auto">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">

          {playing ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full group focus:outline-none"
              aria-label="Reproducir video"
            >
              {/* Miniatura */}
              <Image
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Miniatura del video: Integración articulada en acción"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                unoptimized
              />
              {/* Overlay oscuro */}
              <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              {/* Botón play */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
