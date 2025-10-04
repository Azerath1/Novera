import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Защищённые маршруты
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Публичные маршруты
  const authRoutes = ["/login", "/register"];
  const isAuthRoute = authRoutes.includes(pathname);

  // Проверяем наличие токена в cookies (опционально, если будете хранить токен там)
  const token = request.cookies.get("auth-token")?.value;

  // Если пользователь пытается зайти на защищённый маршрут без токена
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Если пользователь авторизован и пытается зайти на страницы логина/регистрации
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/register",
  ],
};
