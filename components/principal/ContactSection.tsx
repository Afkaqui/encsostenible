"use client";

import { Button } from '@/components/ui/button';
import { 
  Mail,
  Linkedin,
  Phone,
  CalendarCheck // Cambié el icono 'Send' por uno más acorde a agendar
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-20 relative">
      {/* Fondo sutil para diferenciar la sección */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Hablemos sobre lo que se puede construir juntos
          </h2>
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Si eres inversor, líder público, emprendedor o investigador con un propósito claro, el siguiente paso es una conversación directa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Columna Izquierda: Datos de Contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-enc-gold-500/30 transition-colors duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-enc-gold-500/20 rounded-full flex-shrink-0 group-hover:bg-enc-gold-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-enc-gold-500" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Email</p>
                    <a href="mailto:contacto@encsust4in4ble.earth" className="text-white text-sm sm:text-base hover:text-enc-gold-500 transition-colors break-all">
                      contacto@encsust4in4ble.earth
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-enc-teal-600/25 rounded-full flex-shrink-0 group-hover:bg-enc-teal-600/40 transition-colors">
                    <Linkedin className="w-5 h-5 text-enc-teal-300" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">LinkedIn</p>
                    <a
                      href='https://www.linkedin.com/in/ingeduardonoriegaperu/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:text-enc-teal-300 transition-colors"
                    >
                      Eduardo Noriega Campos
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-enc-forest-700/40 rounded-full flex-shrink-0 group-hover:bg-enc-forest-700/60 transition-colors">
                    <Phone className="w-5 h-5 text-enc-teal-300" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Teléfono</p>
                    <a
                      href='https://wa.link/1okcxk'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:text-enc-teal-300 transition-colors"
                    >
                      +51 926 770 972
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          {/* Columna Derecha: Call to Action (Calendly) */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center flex flex-col justify-center h-full hover:border-enc-teal-300/30 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Solicitar evaluación de encaje
            </h3>
            <p className="text-white/70 mb-8">
              Trabajamos con un número limitado de iniciativas que cuentan con una decisión concreta, un responsable interno y presupuesto para su estructuración.
            </p>

            <Button
                className="w-full bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal py-6 rounded-xl font-bold text-lg shadow-lg hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.open('https://calendly.com/agronegocios-andenexbic/30min', '_blank')}
            >
                <CalendarCheck className="w-6 h-6 mr-2" />
                Solicitar evaluación
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}