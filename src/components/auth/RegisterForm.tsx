// src/components/auth/RegisterForm.tsx
"use client";

import { useActionState } from "react";
import { register } from "@/lib/actions";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaVk } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(register, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 transition-colors duration-300">
      <div className="w-full max-w-[450px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl dark:shadow-2xl transition-all duration-300">
        <form action={formAction} className="space-y-6">
          <h1 className="text-4xl text-center mb-6 font-semibold text-gray-800 dark:text-white transition-colors">
            Register
          </h1>

          {/* Поле Email */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              className={`w-full h-12 bg-white/50 dark:bg-gray-800/50 border-2 rounded-full px-5 pr-12 text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors ${
                state?.errors?.email
                  ? "border-red-400 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 dark:text-gray-400 transition-colors" />
            {state?.errors?.email && (
              <span className="absolute -bottom-6 left-5 text-red-500 dark:text-red-400 text-sm font-medium">
                {state.errors.email[0]}
              </span>
            )}
          </div>

          {/* Поле Username */}
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Username"
              required
              className={`w-full h-12 bg-white/50 dark:bg-gray-800/50 border-2 rounded-full px-5 pr-12 text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors ${
                state?.errors?.username
                  ? "border-red-400 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 dark:text-gray-400 transition-colors" />
            {state?.errors?.username && (
              <span className="absolute -bottom-6 left-5 text-red-500 dark:text-red-400 text-sm font-medium">
                {state.errors.username[0]}
              </span>
            )}
          </div>

          {/* Поле Password */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Password"
              required
              className={`w-full h-12 bg-white/50 dark:bg-gray-800/50 border-2 rounded-full px-5 pr-24 text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors ${
                state?.errors?.password
                  ? "border-red-400 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            <FiLock className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 dark:text-gray-400 transition-colors" />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 bg-transparent border-none cursor-pointer text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {state?.errors?.password && (
              <span className="absolute -bottom-6 left-5 text-red-500 dark:text-red-400 text-sm font-medium">
                {state.errors.password[0]}
              </span>
            )}
          </div>

          {/* Поле Confirm Password */}
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Confirm Password"
              required
              className={`w-full h-12 bg-white/50 dark:bg-gray-800/50 border-2 rounded-full px-5 pr-24 text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors ${
                state?.errors?.confirmPassword
                  ? "border-red-400 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            <FiLock className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 dark:text-gray-400 transition-colors" />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 bg-transparent border-none cursor-pointer text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {state?.errors?.confirmPassword && (
              <span className="absolute -bottom-6 left-5 text-red-500 dark:text-red-400 text-sm font-medium">
                {state.errors.confirmPassword[0]}
              </span>
            )}
          </div>

          {/* Кнопка регистрации */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-purple-500 dark:bg-purple-600 border-none rounded-full shadow-lg cursor-pointer text-base font-semibold text-white hover:bg-purple-600 dark:hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            {isPending ? "Creating Account..." : "Register"}
          </button>

          {/* Разделитель */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative bg-white/90 dark:bg-gray-900/90 px-4 text-sm text-gray-500 dark:text-gray-400">
              Or continue with
            </div>
          </div>

          {/* Кнопки социальных сетей */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-lg cursor-pointer text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl" />
              Google
            </button>
            <button
              type="button"
              className="w-full h-12 bg-blue-600 border border-blue-600 rounded-full shadow-lg cursor-pointer text-base font-semibold text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaVk className="text-xl" />
              VK
            </button>
          </div>

          {/* Ссылка на вход */}
          <div className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400 transition-colors">
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-800 dark:hover:text-purple-300 hover:underline transition-all"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ThemeToggle />
    </div>
  );
}
