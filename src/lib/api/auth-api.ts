import { RegisterFormData, LoginFormData } from "@/lib/schemas/auth-schemas";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
};

export class AuthAPI {
  static async register(
    data: RegisterFormData
  ): Promise<ApiResponse<{ access_token: string }>> {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        // Обновлённый путь
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          username: data.username,
          password: data.password,
          password_confirm: data.confirmPassword,
        }),
      });

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

      localStorage.setItem("auth-token", result.access_token);
      return {
        success: true,
        data: { access_token: result.access_token },
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
  ): Promise<ApiResponse<{ access_token: string }>> {
    try {
      const formData = new FormData();
      formData.append("username", data.email); // Используем username вместо email
      formData.append("password", data.password);

      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        // Обновлённый путь
        method: "POST",
        body: formData, // Отправляем FormData вместо JSON
      });

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

      if (data.rememberMe) {
        localStorage.setItem("auth-token", result.access_token);
      } else {
        sessionStorage.setItem("auth-token", result.access_token);
      }

      return {
        success: true,
        data: { access_token: result.access_token },
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
