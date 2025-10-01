import { RegisterFormData, LoginFormData } from "@/lib/schemas/auth-schemas";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
};

export class AuthAPI {
  static async register(
    data: RegisterFormData
  ): Promise<ApiResponse<{ userId: string }>> {
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Пробуем распарсить JSON независимо от статуса
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        return {
          success: false,
          error: "Ошибка формата ответа от сервера",
        };
      }

      if (!response.ok) {
        return {
          success: false,
          error:
            result.detail ||
            result.error ||
            `Ошибка регистрации: ${response.status}`,
        };
      }

      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Сетевая ошибка",
      };
    }
  }

  static async login(
    data: LoginFormData
  ): Promise<ApiResponse<{ userId: string; access_token: string }>> {
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Пробуем распарсить JSON независимо от статуса
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        return {
          success: false,
          error: "Ошибка формата ответа от сервера",
        };
      }

      if (!response.ok) {
        return {
          success: false,
          error:
            result.detail || result.error || `Ошибка входа: ${response.status}`,
        };
      }

      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Сетевая ошибка",
      };
    }
  }
}
