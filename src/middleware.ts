import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Si el host es ventas.360losrios.cl, servir la página de ventas en la raíz
  if (host === "ventas.360losrios.cl" || host === "ventas-360losrios.vercel.app") {
    // Solo redirigir la raíz — el resto (imágenes, etc.) pasan directo
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/ventas", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Excluir archivos estáticos, API y assets de Next.js
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
