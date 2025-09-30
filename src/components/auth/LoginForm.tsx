"use client";

import { useActionState } from "react";
import { login } from "@/lib/actions";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 transition-colors duration-300">
      <div className="w-full max-w-[420px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl dark:shadow-2xl transition-all duration-300">
        <form action={formAction} className="space-y-6">
          <h1 className="text-4xl text-center mb-6 font-semibold text-gray-800 dark:text-white transition-colors">
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
              className={`w-full h-12 bg-white/50 dark:bg-gray-800/50 border-2 rounded-full px-5 pr-12 text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors ${
                state?.errors?.email
                  ? "border-red-400 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 dark:text-gray-400 transition-colors" />
            {state?.errors?.email && (
              <span className="absolute -bottom-6 left-5 text-red-500 dark:text-red-400 text-sm font-medium">
                {state.errors.email[0]}
              </span>
            )}
          </div>

          {/* Поле Пароль */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              required
              className={`w-full h-12 bg-white/50 dark:bg-gray-800/50 border-2 rounded-full px-5 pr-24 text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors ${
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

          <div className="flex justify-between items-center text-sm -mt-2 mb-4">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300 transition-colors">
              <input
                type="checkbox"
                className="accent-blue-500 dark:accent-blue-400 cursor-pointer w-4 h-4 transition-colors"
              />
              Remember Me
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-all"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-12 bg-blue-500 dark:bg-blue-600 border-none rounded-full shadow-lg cursor-pointer text-base font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>

          <div className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400 transition-colors">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-all"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ThemeToggle />
    </div>
  );
}
