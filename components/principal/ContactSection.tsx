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
            ¿Estás listo para cerrar la brecha entre tu visión y la acción?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            El futuro de América Latina no se va a escribir en solitario. Se va a co-crear. Si eres un inversor, un líder público, un emprendedor o un joven investigador con un propósito, tenemos que hablar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Columna Izquierda: Datos de Contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-green-500/30 transition-colors duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-green-500/20 rounded-full flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Email</p>
                    <a href="mailto:eduardo.noriega@bancasostenible.la" className="text-white text-sm sm:text-base hover:text-green-400 transition-colors">
                      eduardo.noriega@bancasostenible.la
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-blue-500/20 rounded-full flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">LinkedIn</p>
                    <a 
                      href='https://www.linkedin.com/in/ingeduardonoriegaperu/' 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors"
                    >
                      Eduardo Noriega Campos
                    </a>
                  </div>
                </div>
                
                {/* Teléfono */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-purple-500/20 rounded-full flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Teléfono</p>
                    <a 
                      href='https://wa.link/1okcxk' 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:text-purple-400 transition-colors"
                    >
                      +51 926 770 972
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          {/* Columna Derecha: Call to Action (Calendly) */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center flex flex-col justify-center h-full hover:border-blue-500/30 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Agenda una reunión
            </h3>
            <p className="text-white/70 mb-8">
              Reserva 30 minutos conmigo para explorar sinergias y discutir cómo podemos colaborar.
            </p>
            
            <Button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.open('https://calendly.com/agronegocios-andenexbic/30min', '_blank')} 
            >
                <CalendarCheck className="w-6 h-6 mr-2" />
                Agendar Reunión
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}