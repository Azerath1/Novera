import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/lib/schemas/auth-schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Валидация данных
    const validatedData = loginSchema.parse(body);

    // Здесь должна быть логика проверки пользователя в БД
    // Например: const user = await verifyUser(validatedData);

    // Временная заглушка
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Симуляция проверки credentials
    if (
      validatedData.email === "user@example.com" &&
      validatedData.password === "password"
    ) {
      return NextResponse.json({
        success: true,
        data: {
          userId: "user_123",
          email: validatedData.email,
        },
      });
    } else {
      return NextResponse.json(
        { error: "Неверный email или пароль" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Ошибка при входе" }, { status: 500 });
  }
}
