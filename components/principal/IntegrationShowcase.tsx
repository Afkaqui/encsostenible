export default function IntegrationShowcase() {
  return (
    <div className="text-center py-10 sm:py-20 mb-12 sm:mb-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
        Integración articulada en acción
      </h2>
      <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
        Un ejemplo concreto de cómo distintos actores colaboran dentro del mismo ecosistema sin competir entre sí.
      </p>
      
      {/* Contenedor Responsive para YouTube */}
      <div className="flex justify-center w-full max-w-5xl mx-auto">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/1vIV2-CUB_A?si=o2QaLtZsUIyJnNMq"
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div> 
    </div>
  );
}