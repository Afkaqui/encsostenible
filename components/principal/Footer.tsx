import { Linkedin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright / Texto Izquierda */}
          <div className="text-white/60 text-sm sm:text-base text-center md:text-left">
            © 2025 Eduardo Noriega Campos. Ingeniero de Soluciones Sostenibles.
          </div>
          
          {/* Redes Sociales / Iconos Derecha */}
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/ingeduardonoriegaperu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            {/* Estos enlaces están pendientes, puedes poner 'mailto:' o tu web */}
            <a 
              href="#" 
              className="text-white/60 hover:text-green-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="#" 
              className="text-white/60 hover:text-green-400 transition-colors"
              aria-label="Sitio Web"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}