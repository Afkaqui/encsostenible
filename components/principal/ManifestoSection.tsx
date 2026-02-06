export default function ManifestoSection() {
  return (
    <section id="manifiesto" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vi un Sistema Desconectado. Decidí Convertirme en el Puente.
          </h2>
        </div>
        
        {/* Contenedor del Texto (Carta) */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
          
          {/* Decoración de fondo (Brillo sutil) */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Contenido de Texto */}
          <div className="relative z-10 space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-white/90">
            <p>
              Mi viaje de más de dos décadas me llevó desde las profundidades de la Amazonía hasta los pasillos de las finanzas globales. En todas partes, vi lo mismo: un potencial extraordinario frenado por un <strong className="text-green-400 font-semibold">"fracaso de articulación"</strong>. Vi proyectos de bioeconomía brillantes morir por falta de capital, políticas públicas ambiciosas estancadas en la burocracia, y un talento joven lleno de energía sin un camino claro para actuar.
            </p>
            
            <p>
              No podía quedarme de brazos cruzados. <strong className="text-blue-400 font-semibold">Comprendí que la crisis ambiental era, en su raíz, una crisis de conexión</strong>.
            </p>
            
            <p>
              Mi propósito se volvió claro: dedicar mi vida a ser ese puente. A diseñar la <strong className="text-green-400 font-semibold">ingeniería de las soluciones sostenibles</strong>, tejiendo las redes que conectan la innovación con la inversión, la visión con la ejecución y el talento joven con las oportunidades para regenerar nuestro mundo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}