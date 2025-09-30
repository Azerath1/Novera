// src/components/auth/LoginForm.tsx
"use client";

import { useActionState } from "react";
import { login } from "@/lib/actions";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import BackgroundImage from "@/components/BackgroundImage";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <>
      <BackgroundImage />
      <div className="min-h-screen flex items-center justify-center p-4">
        {/* Улучшенный контейнер формы с лучшей читаемостью */}
        <div className="w-full max-w-[420px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-2xl p-8 shadow-2xl dark:shadow-gray-900/50 transition-all duration-300">
          <form action={formAction} className="space-y-6">
            <h1 className="text-4xl text-center mb-6 font-bold text-gray-900 dark:text-white">
              Login
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
                className={`w-full h-12 bg-white/80 dark:bg-gray-800/80 border-2 rounded-full px-5 pr-12 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors font-medium ${
                  state?.errors?.email
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-200 dark:border-gray-600"
                }`}
              />
              <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 dark:text-gray-300" />
              {state?.errors?.email && (
                <span className="absolute -bottom-6 left-5 text-red-600 dark:text-red-400 text-sm font-semibold bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded">
                  {state.errors.email[0]}
                </span>
              )}
            </div>

            {/* Поле Password */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Password"
                required
                className={`w-full h-12 bg-white/80 dark:bg-gray-800/80 border-2 rounded-full px-5 pr-24 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors font-medium ${
                  state?.errors?.password
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-200 dark:border-gray-600"
                }`}
              />
              <FiLock className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 dark:text-gray-300" />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300 bg-transparent border-none cursor-pointer text-lg hover:text-gray-800 dark:hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
              {state?.errors?.password && (
                <span className="absolute -bottom-6 left-5 text-red-600 dark:text-red-400 text-sm font-semibold bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded">
                  {state.errors.password[0]}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center text-sm -mt-2 mb-4">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200 font-medium">
                <input
                  type="checkbox"
                  className="accent-blue-600 dark:accent-blue-400 cursor-pointer w-4 h-4"
                />
                Remember Me
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium transition-all"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full h-12 bg-blue-600 dark:bg-blue-500 border-none rounded-full shadow-lg cursor-pointer text-base font-bold text-white hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>

            <div className="text-sm text-center mt-6 text-gray-700 dark:text-gray-300">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-all"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
