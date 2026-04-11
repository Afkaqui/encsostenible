"use client";

import Link from "next/link";
import { ArrowLeft, Play, ExternalLink, Star } from "lucide-react";
import { url } from "inspector";

const featuredVideos = [
  {
    titulo: "Marca así por el Presidente: Eduardo Noriega al Parlamento Andino con Integridad Democrática",
    url: "https://youtube.com/shorts/kkK4ohrq2Qw",
  },
  {
    titulo: "Marca así por la Vicepresidenta: Eduardo Noriega N°1 al Parlamento Andino",
    url: "https://youtube.com/shorts/TQm8zWs2tyA",
  },
];

const videos = [
  {
    titulo: "Pacto mafioso y caviares corruptos, en mi gobierno los vamos a meter presos",
    url: "https://youtu.be/no8QOH5-lW0",
  },
  {
    titulo: "Voto2026 Wolfgang Grozo de Integridad Democrática criticó a la gran mayoría de los candidatos presidenciales en su mensaje final del debate",
    url: "https://youtu.be/p9uA39-l46Q",
  },
  {
    titulo: "#Voto2026 Wolfgang Grozo, candidato de Integridad Democrática, tildó de mentiroso a Jorge Nieto por demorar en llegar al debate presidencial",
    url: "https://youtu.be/8LvraFLmzpk",
  },
  {
    titulo: "Escucha el cruce tenso donde López Aliaga evade respuestas sobre 4 mil millones de deuda",
    url: "https://youtu.be/CLt1iekaH2I",
  },
  {
    titulo: "El pueblo informa - directo con Eduardo Noriega",
    url: "https://youtu.be/0ss0xhlxv28",
  },
  {
    titulo: "Chincha: Inauguración de local de campaña del candidato a Diputado por Integridad Democrática",
    url: "https://youtu.be/ZrMAsGk6IpQ",
  },
  {
    titulo: "Wolfgang Grozo en Arequipa",
    url: "https://youtu.be/I1hbOT3a8gQ",
  },
  {
    titulo: "Eduardo Noriega en RCN",
    url: "https://youtu.be/Ky3rgk2VPzs",
  },
  {
    titulo: "El candidato presidencial Wolfgang Grozo habló sobre su participación en el debate y sus propuestas en seguridad y lucha contra la corrupción",
    url: "https://youtu.be/nbCL3i8vv7E",
  },
  {
    titulo: "EN VIVO 16/03/2026 - Programa: No Se Diga Más",
    url: "https://youtu.be/cKc8_6kXm7w",
  },
  {
    titulo: "Exitosa Perú con Edi Moreno Sifuentes - La voz de los que no tienen voz",
    url: "https://youtu.be/msFiRIoYQ_s",
  },
  {
    titulo: "La Hora Clave con Kike Ponce",
    url: "https://youtu.be/5oKMMVVF4Po",
  },
  {
    titulo: "Contienda Electoral con Maritza Soto: Eduardo Noriega, Wellington P., Carlos Merino, Francis Paredes",
    url: "https://youtu.be/W7qAaVnArcw",
  },
  {
    titulo: "R&R Podcast - Gran Debate: Piero Astete (Cooperación Popular) vs Eduardo Noriega (Integridad Democrática)",
    url: "https://youtu.be/9VGLwfExxHM",
  },
  {
    titulo: "INTI Diplomatic - Candidato al Parlamento Andino Eduardo José Noriega Campos por Integridad Democrática presenta sus propuestas",
    url: "https://youtu.be/63ffOu6-do8",
  },
  {
    titulo: "Hoy Debate Keiko | Se mide contra adversarios | Punto Político",
    url: "https://youtu.be/5kgJKnBOh4U",
  },
  {
    titulo: "¿QUIÉN ES EDUARDO NORIEGA? CANDIDATO AL PARLAMENTO ANDINO POR INTEGRIDAD DEMOCRATICA",
    url: "https://youtu.be/1WhtnFXMtpU",
  },
  {
    titulo: "AMAZONÍA PERUANA WOLFGANG GROZO",
    url: "https://youtu.be/wFYDzfmcrpI",
  },
  {
    titulo:"DETRÁS DE LA VERDAD 7 DE ABRIL 2026 - Eduardo Noriega",
    url: "https://youtu.be/CGnsU0bYHSE"
  },
  {
    titulo: "Sobre el equipo Wolfgang - Integridad Democrática",
    url: "https://youtu.be/S8_Eh4OyPfE"
  },
  {
    titulo: "Sobre el equipo Integridad Democrática",
    url: "https://youtube.com/shorts/VvYpBhzdjjE",
  }
];

function getYouTubeId(url: string) {
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  if (shortsMatch) return shortsMatch[1];
  const longMatch = url.match(/youtube\.com\/watch\?v=([^?&]+)/);
  if (longMatch) return longMatch[1];
  return "";
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/80 hover:text-green-400 transition-colors shrink-0"
            >
              <ArrowLeft size={18} />
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                Volver al inicio
              </span>
            </Link>
            <h1 className="text-sm sm:text-lg font-bold text-white text-center">
              Videos
            </h1>
            <div className="w-[18px] sm:w-[100px] shrink-0" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Featured Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Star size={20} className="text-yellow-400" fill="currentColor" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Destacados
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {featuredVideos.map((video, index) => {
              const videoId = getYouTubeId(video.url);
              return (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-[calc(50%-12px)] bg-gradient-to-br from-yellow-500/10 to-green-500/10 border-2 border-yellow-400/40 rounded-xl overflow-hidden hover:border-yellow-400/70 hover:from-yellow-500/20 hover:to-green-500/20 transition-all duration-300 shadow-lg shadow-yellow-400/5"
                >
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-yellow-500 text-black text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    <Star size={12} fill="currentColor" />
                    DESTACADO
                  </div>

                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-black/40">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={video.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110">
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-white text-sm sm:text-base font-semibold line-clamp-3 group-hover:text-yellow-400 transition-colors">
                      {video.titulo}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-yellow-400/60 text-xs">
                      <ExternalLink size={12} />
                      <span>Ver en YouTube</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8 sm:mb-10" />

        {/* All Videos */}
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
          Todos los videos
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {videos.map((video, index) => {
            const videoId = getYouTubeId(video.url);
            return (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-green-400/40 hover:bg-white/10 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-black/40">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={video.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center transition-colors shadow-lg">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-white/90 text-sm sm:text-base font-medium line-clamp-3 group-hover:text-green-400 transition-colors">
                    {video.titulo}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-white/40 text-xs">
                    <ExternalLink size={12} />
                    <span>Ver en YouTube</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
