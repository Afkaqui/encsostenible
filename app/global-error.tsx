"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "system-ui", padding: "2rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", paddingTop: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Algo salió mal</h2>
          <p style={{ color: "#94a3b8", marginBottom: "0.5rem" }}>
            {error.message}
          </p>
          <pre style={{
            color: "#f87171",
            fontSize: "0.75rem",
            textAlign: "left",
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: "1rem",
            borderRadius: "0.5rem",
            overflow: "auto",
            maxHeight: "200px",
            marginBottom: "1.5rem"
          }}>
            {error.stack}
          </pre>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}
