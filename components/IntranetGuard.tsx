"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAccess } from "@/lib/intranet-auth";

export default function IntranetGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (checkAccess()) {
      setAuthorized(true);
    } else {
      // Guarda la URL actual para redirigir después del login
      sessionStorage.setItem(
        "enc_intranet_redirect",
        window.location.pathname
      );
      router.replace("/intranet");
    }
  }, [router]);

  if (!authorized) return null;
  return <>{children}</>;
}
