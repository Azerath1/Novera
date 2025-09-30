// src/lib/session.ts
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// Ключ для подписи токенов. Должен быть длинным и храниться в .env.local
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// Тип для данных, хранящихся в сессии
type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

// Создание новой сессии (JWT токена) и сохранение в куки
export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Сессия на 7 дней

  // Создание JWT токена
  const session = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(encodedKey);

  // Сохранение токена в HTTP-only куки
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// Проверка валидности сессии и извлечение данных
export async function verifySession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) {
    return { isAuthenticated: false, userId: null };
  }

  try {
    const { payload } = await jwtVerify(sessionCookie, encodedKey, {
      algorithms: ["HS256"],
    });
    return { isAuthenticated: true, userId: payload.userId as string };
  } catch (error) {
    console.error("Invalid session token:", error);
    return { isAuthenticated: false, userId: null };
  }
}

// Удаление сессии (выход)
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
