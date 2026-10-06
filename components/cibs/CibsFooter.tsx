import Link from "next/link";
import { SITE_URL } from "@/lib/proyectos";

export default function CibsFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45 text-center sm:text-left">
        <p>
          CIBS Pucallpa · una iniciativa del ecosistema{" "}
          <a href={SITE_URL} className="text-white/70 hover:text-enc-gold-500 transition-colors">
            ENC Sust4in4ble
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link href="/proyectos" className="hover:text-white/80 transition-colors">
            Portafolio de proyectos
          </Link>
          <a href="mailto:contacto@encsust4in4ble.earth" className="hover:text-white/80 transition-colors">
            contacto@encsust4in4ble.earth
          </a>
        </div>
      </div>
    </footer>
  );
}
