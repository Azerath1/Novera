// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiSun,
  FiMoon,
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
  FiBook,
} from "react-icons/fi";
import CatalogMenu from "./CatalogMenu";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const catalogItems = [
    { label: "Китайское", href: "/catalog/chinese" },
    { label: "Корейское", href: "/catalog/korean" },
    { label: "Английское", href: "/catalog/english" },
    { label: "Ранобэ", href: "/catalog/ranobe" },
    { label: "Фанфики", href: "/catalog/fanfiction" },
  ];

  const communityItems = [
    { label: "Новости", href: "/news" },
    { label: "Помощь", href: "/help" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Novera" width={32} height={32} />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Novera
            </span>
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-8">
            <CatalogMenu items={catalogItems} title="Каталог" />
            <Link
              href="/top"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20"
            >
              Топ
            </Link>
            <CatalogMenu items={communityItems} title="Сообщество" />

            {/* Поиск */}
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск произведений..."
                className="w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                aria-label="Поиск"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Правая часть - тема и авторизация */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label={isDarkMode ? "Светлая тема" : "Темная тема"}
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20"
              >
                Войти
              </Link>
              <Link
                href="/register"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Регистрация
              </Link>
            </div>
          </div>

          {/* Мобильное меню кнопки */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label={isDarkMode ? "Светлая тема" : "Темная тема"}
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск произведений..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                  aria-label="Поиск"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </div>

              {/* Каталог */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 dark:text-white px-2 flex items-center">
                  <FiBook className="w-4 h-4 mr-2" /> Каталог
                </div>
                <div className="flex flex-col space-y-1">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Топ */}
              <Link
                href="/top"
                className="px-4 py-2 font-semibold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Топ
              </Link>

              {/* Сообщество */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 dark:text-white px-2">
                  Сообщество
                </div>
                <div className="flex flex-col space-y-1">
                  {communityItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Авторизация */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/login"
                  className="px-4 py-2 text-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiUser className="w-4 h-4 mr-2 inline-block" /> Войти
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Регистрация
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
