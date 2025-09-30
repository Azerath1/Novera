// src/app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Здесь будет основной контент главной страницы */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Добро пожаловать в Novera
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Крупнейшая библиотека ранобэ и фанфиков. Начните читать или
            создавайте свои произведения!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
