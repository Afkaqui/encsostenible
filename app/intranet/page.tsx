"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { grantAccess, checkAccess } from "@/lib/intranet-auth";
import { Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function IntranetLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Si ya tiene acceso, redirige directo
  useEffect(() => {
    if (checkAccess()) {
      const redirect = sessionStorage.getItem("enc_intranet_redirect") || "/intranet/hub";
      router.replace(redirect);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    setTimeout(() => {
      if (grantAccess(password)) {
        const redirect =
          sessionStorage.getItem("enc_intranet_redirect") || "/intranet/hub";
        sessionStorage.removeItem("enc_intranet_redirect");
        router.push(redirect);
      } else {
        setError(true);
        setPassword("");
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4">
      {/* Volver */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm"
      >
        <ArrowLeft size={16} />
        Volver al inicio
      </Link>

      <div className="w-full max-w-sm">
        {/* Icono */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <Lock size={28} className="text-green-400" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-white text-center mb-1">
          Área Privada
        </h1>
        <p className="text-white/40 text-sm text-center mb-8">
          Ingresa tu código de acceso para continuar
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Código de acceso"
              autoFocus
              className={`w-full bg-white/5 border ${
                error ? "border-red-500/60" : "border-white/10"
              } rounded-xl px-4 py-3.5 pr-12 text-white placeholder-white/30 text-sm focus:outline-none focus:border-green-400/50 transition-colors`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center">
              Código incorrecto. Intenta nuevamente.
            </p>
          )}

          <button
            type="submit"
            disabled={!password || loading}
            className="w-full py-3.5 bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
          >
            {loading ? "Verificando..." : "Acceder"}
          </button>
        </form>

        <p className="text-white/20 text-xs text-center mt-6">
          Acceso restringido · Integridad Democrática
        </p>
      </div>
    </div>
  );
}
