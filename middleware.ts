// middleware.ts (в корне проекта)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySession } from './src/lib/session';

export async function middleware(request: NextRequest) {
  const { isAuthenticated } = await verifySession();
  const path = request.nextUrl.pathname;

  // Защищенные маршруты
  const protectedRoutes = ['/dashboard', '/profile'];
  // Публичные маршруты, недоступные для аутентифицированных пользователей
  const authRoutes = ['/login', '/register'];

  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  const isAuthRoute = authRoutes.includes(path);

  // Если пользователь не аутентифицирован и пытается получить доступ к защищенному маршруту
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Если пользователь аутентифицирован и пытается получить доступ к маршруту входа/регистрации
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  return NextResponse.next();
}

// Конфигурация Middleware - указывает, для каких маршрутов он должен выполняться
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};