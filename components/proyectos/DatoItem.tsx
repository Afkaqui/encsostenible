import { Check } from "lucide-react";
import type { Dato } from "@/lib/proyectos";

export default function DatoItem({ dato, accent = "text-enc-teal-300" }: { dato: Dato; accent?: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
      <Check size={15} className={`shrink-0 mt-1 ${accent}`} />
      <span>
        {dato.etiqueta && <strong className="text-white/90 font-semibold">{dato.etiqueta}: </strong>}
        {dato.resaltado && <strong className="text-white/90 font-semibold">{dato.resaltado} </strong>}
        {dato.texto}
      </span>
    </li>
  );
}
