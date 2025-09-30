// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  FiSun,
  FiMoon,
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
  FiUser,
  FiBookmark,
  FiBook,
  FiLogOut,
} from "react-icons/fi";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Данные для меню
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
          {/* Логотип и название */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Novera" width={32} height={32} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Novera
              </span>
            </Link>
          </div>

          {/* Десктопная навигация - скрыта на мобильных */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Каталог с Headless UI меню */}
            <Menu as="div" className="relative">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20">
                Каталог
                <FiChevronDown className="-mr-1 size-5 text-gray-400" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:ring-white/10"
              >
                <div className="py-1">
                  {catalogItems.map((item) => (
                    <MenuItem key={item.label}>
                      {({ focus }) => (
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-sm ${
                            focus
                              ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            {/* Топ */}
            <Link
              href="/top"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20"
            >
              Топ
            </Link>

            {/* Сообщество с Headless UI меню */}
            <Menu as="div" className="relative">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20">
                Сообщество
                <FiChevronDown className="-mr-1 size-5 text-gray-400" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:ring-white/10"
              >
                <div className="py-1">
                  {communityItems.map((item) => (
                    <MenuItem key={item.label}>
                      {({ focus }) => (
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-sm ${
                            focus
                              ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

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
            {/* Переключение темы */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label={
                isDarkMode
                  ? "Переключить на светлую тему"
                  : "Переключить на темную тему"
              }
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            {/* Кнопки авторизации */}
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

          {/* Мобильное меню - видно только на мобильных */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Переключение темы на мобильных */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label={
                isDarkMode
                  ? "Переключить на светлую тему"
                  : "Переключить на темную тему"
              }
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            {/* Кнопка открытия мобильного меню */}
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

        {/* Мобильное меню (выпадающее) */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-4">
              {/* Поиск в мобильном меню */}
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

              {/* Каталог для мобильных */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 dark:text-white px-2 flex items-center">
                  <FiBook className="w-4 h-4 mr-2" />
                  Каталог
                </div>
                <div className="flex flex-col space-y-1">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Топ для мобильных */}
              <Link
                href="/top"
                className="px-2 py-2 font-semibold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Топ
              </Link>

              {/* Сообщество для мобильных */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 dark:text-white px-2 flex items-center">
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

              {/* Авторизация для мобильных */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/login"
                  className="px-4 py-2 text-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiUser className="w-4 h-4 mr-2" />
                  Войти
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
