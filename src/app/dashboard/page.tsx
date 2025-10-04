"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    // Очистка токена
    localStorage.removeItem("auth-token");
    sessionStorage.removeItem("auth-token");
    // Перенаправление на страницу логина
    router.push("/login");
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token =
        localStorage.getItem("auth-token") ||
        sessionStorage.getItem("auth-token");

      if (!token) {
        router.push("/login");
        return;
      }

      // Валидация токена через API
      try {
        const response = await fetch("http://127.0.0.1:8000/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          localStorage.removeItem("auth-token");
          sessionStorage.removeItem("auth-token");
          router.push("/login");
        }
      } catch (error) {
        console.error("Auth check error:", error);
        localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Добро пожаловать в Dashboard!
        </h1>
        <p className="text-gray-600 mb-6">Вы успешно вошли в систему.</p>
        <button
          onClick={handleLogout}
          className="w-40 h-12 bg-red-600 dark:bg-red-500 border-none rounded-full shadow-lg cursor-pointer text-base font-bold text-white hover:bg-red-700 dark:hover:bg-red-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
