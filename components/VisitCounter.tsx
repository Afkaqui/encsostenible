"use client";

import { useEffect, useState } from "react";
import { Eye, WifiOff } from "lucide-react";

type Status = "loading" | "ok" | "offline";

export default function VisitCounter({ page = "/" }: { page?: string }) {
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    })
      .then((r) => {
        if (!r.ok) throw new Error("error");
        return r.json();
      })
      .then((data) => {
        setCount(typeof data.count === "number" ? data.count : 0);
        setStatus("ok");
      })
      .catch(() => setStatus("offline"));
  }, [page]);

  if (status === "loading") return null;

  if (status === "offline") {
    return (
      <span className="inline-flex items-center gap-1.5 text-white/35 text-sm">
        <WifiOff size={13} />
        contador offline
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium">
      <Eye size={14} className="text-green-400" />
      {count.toLocaleString("es-PE")} visitas
    </span>
  );
}
