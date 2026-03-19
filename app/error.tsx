"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Algo salió mal</h2>
        <p className="text-red-400 text-sm mb-2">{error.message}</p>
        <pre className="text-red-300 text-xs text-left bg-white/5 p-4 rounded-lg overflow-auto max-h-40 mb-6">
          {error.stack}
        </pre>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
