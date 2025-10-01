"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Временная проверка - замените на реальную проверку токена
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Добро пожаловать в Dashboard!
        </h1>
        <p className="text-gray-600">Вы успешно вошли в систему.</p>
      </div>
    </div>
  );
}
