"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitCounter({ page = "/" }: { page?: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Registra la visita y obtiene el total actualizado
    fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    })
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? null))
      .catch(() => setCount(null));
  }, [page]);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-white/25 text-xs">
      <Eye size={12} />
      {count.toLocaleString("es-PE")} visitas
    </span>
  );
}
