"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitCounter({ page = "/" }: { page?: string }) {
  const [count, setCount] = useState<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    })
      .then((r) => r.json())
      .then((data) => {
        setCount(typeof data.count === "number" ? data.count : 0);
        setReady(true);
      })
      .catch(() => setReady(true));
  }, [page]);

  if (!ready) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
      <Eye size={14} className="text-green-400" />
      {count.toLocaleString("es-PE")} visitas
    </span>
  );
}
