import { getAuthStatus } from "@/lib/actions";
import { logout } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { isAuthenticated, userId } = await getAuthStatus();

  // Если пользователь не аутентифицирован, middleware его перенаправит,
  // но эта проверка добавляет дополнительную безопасность
  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Личный кабинет
          </h1>
          <form action={logout}>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Выйти
            </button>
          </form>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <p className="text-gray-700 dark:text-gray-300">
            Добро пожаловать в ваш личный кабинет! Ваш ID: {userId}
          </p>
          {/* Здесь будет контент вашего приложения */}
        </div>
      </div>
    </div>
  );
}
