import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/lib/schemas/auth-schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Валидация данных
    const validatedData = registerSchema.parse(body);

    // Здесь должна быть логика создания пользователя в БД
    // Например: const user = await createUser(validatedData);

    // Временная заглушка
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Симуляция проверки существующего пользователя
    if (validatedData.email === "existing@email.com") {
      return NextResponse.json(
        { error: "Пользователь с таким email уже существует" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        userId: "user_" + Date.now(),
        email: validatedData.email,
        username: validatedData.username,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Ошибка при регистрации" },
      { status: 500 }
    );
  }
}
