import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Identidad */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-white font-semibold text-sm">Eduardo Noriega Campos</p>
            <p className="text-white/45 text-xs">Innovación financiera · Sostenibilidad · América Latina</p>
            <p className="text-white/30 text-xs">© 2026 · Todos los derechos reservados</p>
          </div>

          {/* Links centrales */}
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="mailto:contacto@encsust4in4ble.earth" className="hover:text-white/70 transition-colors">
              contacto@encsust4in4ble.earth
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href="/calculadora-fiscal" className="hover:text-white/70 transition-colors hidden sm:inline">
              Calculadora Fiscal
            </a>
          </div>

          {/* Iconos sociales */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/ingeduardonoriegaperu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors"
              aria-label="LinkedIn de Eduardo Noriega"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contacto@encsust4in4ble.earth"
              className="text-white/40 hover:text-white/80 transition-colors"
              aria-label="Correo electrónico"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}