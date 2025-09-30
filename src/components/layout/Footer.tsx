"use client";
import Image from "next/image";
import { FaTelegram, FaVk, FaDiscord, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Бренд и миссия */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="Novera" width={32} height={32} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Novera
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Крупнейшая библиотека ранобэ и фанфиков. Наша миссия создать
              комфортное пространство для читателей и авторов, где каждый может
              найти произведения по душе и поделиться своим творчеством.
            </p>

            {/* Соцсети */}
            <div className="flex space-x-4">
              {/* Telegram */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Наш канал в Telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a>

              {/* VK */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Мы ВКонтакте"
              >
                <FaVk className="w-5 h-5" />
              </a>

              {/* Discord */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Наш Discord сервер"
              >
                <FaDiscord className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Наш аккаунт в TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Навигация
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/catalog"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="/top"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Топ произведений
                </a>
              </li>
              <li>
                <a
                  href="/new"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Новинки
                </a>
              </li>
              <li>
                <a
                  href="/authors"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Авторы
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Информация
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  О проекте
                </a>
              </li>
              <li>
                <a
                  href="/rules"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Правила сайта
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Для авторов */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Для авторов
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/publish"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Опубликовать работу
                </a>
              </li>
              <li>
                <a
                  href="/guide"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Руководство по форматированию
                </a>
              </li>
              <li>
                <a
                  href="/monetization"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Монетизация
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Сообщество авторов
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Свяжитесь с нами
              </h4>
              <a
                href="mailto:support@novera.ru"
                className="text-blue-500 hover:text-blue-600 text-sm transition-colors"
              >
                support@novera.uz
              </a>
            </div>
            <a
              href="/feedback"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20 transition-colors"
            >
              Форма обратной связи
            </a>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Novera. Все права защищены.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/terms"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
