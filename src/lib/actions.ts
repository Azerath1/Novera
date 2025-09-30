// src/lib/actions.ts
"use server";

import { z } from "zod";
import { createSession, deleteSession, verifySession } from "./session";
import { redirect } from "next/navigation";

// Схема валидации для входа
const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(1, "Пароль обязателен"),
});

// Действие для входа
export async function login(prevState: unknown, formData: FormData) {
  // Валидация полей формы
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Здесь должна быть проверка пользователя в вашей БД (PostgreSQL)
  // Для примера используем заглушку
  if (email !== "user@example.com" || password !== "password123") {
    return {
      errors: {
        email: ["Неверный email или пароль"],
      },
    };
  }

  // Если проверка пройдена, создаем сессию
  // В реальном приложении используйте ID пользователя из БД, например: user.id
  await createSession("user-id-from-database");

  // Перенаправляем в защищенную область
  redirect("/dashboard");
}

// Действие для выхода
export async function logout() {
  await deleteSession();
  redirect("/login");
}

// Проверка аутентификации (для использования в компонентах)
export async function getAuthStatus() {
  return await verifySession();
}

// Схема для регистрации
const registerSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export async function register(prevState: unknown, formData: FormData) {
  // Валидация данных
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const { email, username, password } = result.data;

  // Здесь должна быть логика создания пользователя в базе данных
  // Например: проверка, что email и username не заняты, хэширование пароля и т.д.

  try {
    // Имитация создания пользователя
    // const user = await createUser({ email, username, password });

    // После успешной регистрации создаем сессию и перенаправляем
    // await createSession(user.id);

    // Временно просто перенаправляем на dashboard
    redirect("/dashboard");
  } catch (error) {
    // Обработка ошибок (например, пользователь уже существует)
    if (error instanceof Error) {
      return { errors: { email: [error.message] } };
    }
    return { errors: { email: ["Something went wrong"] } };
  }
}
