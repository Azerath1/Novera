"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import BackgroundImage from "@/components/BackgroundImage";
import { useRegisterForm } from "@/lib/hooks/use-auth-form";
import FormError from "@/components/ui/FormError";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });

  const {
    register,
    onSubmit,
    formState: { errors, isValid },
    isLoading,
    serverError,
  } = useRegisterForm();

  const getInputClassName = (hasError: boolean) =>
    `w-full h-12 bg-white/80 dark:bg-gray-800/80 border-2 rounded-full px-5 pr-12 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none transition-colors font-medium ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
    }`;

  return (
    <>
      <BackgroundImage />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[450px] bg-backdrop-blur-xs dark:bg-gray-900/95 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-2xl p-8 shadow-2xl dark:shadow-gray-900/50 transition-all duration-300">
          <form onSubmit={onSubmit} className="space-y-4">
            <h1 className="text-4xl text-center mb-6 font-bold text-gray-100 dark:text-white">
              Регистрация
            </h1>

            {serverError && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3">
                <p className="text-red-500 text-sm text-center">
                  {serverError}
                </p>
              </div>
            )}

            {/* Email */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className={getInputClassName(!!errors.email)}
                />
                <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 dark:text-gray-300" />
              </div>
              <FormError message={errors.email?.message} />
            </div>

            {/* Username */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Никнейм"
                  {...register("username")}
                  className={getInputClassName(!!errors.username)}
                />
                <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 dark:text-gray-300" />
              </div>
              <FormError message={errors.username?.message} />
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <input
                  type={showPassword.password ? "text" : "password"}
                  placeholder="Пароль"
                  {...register("password")}
                  className={getInputClassName(!!errors.password)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      password: !prev.password,
                    }))
                  }
                >
                  {showPassword.password ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <FormError message={errors.password?.message} />
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="Подтвердите пароль"
                  {...register("confirmPassword")}
                  className={getInputClassName(!!errors.confirmPassword)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      confirm: !prev.confirm,
                    }))
                  }
                >
                  {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <FormError message={errors.confirmPassword?.message} />
            </div>

            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="w-full h-12 bg-purple-600 dark:bg-purple-500 border-none rounded-full shadow-lg cursor-pointer text-base font-bold text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? <LoadingSpinner /> : "Зарегистрироваться"}
            </button>

            <div className="text-sm text-center mt-6 text-gray-700 dark:text-gray-300">
              <p>
                Уже есть аккаунт?{" "}
                <Link
                  href="/login"
                  className="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-800 dark:hover:text-purple-300 hover:underline transition-all"
                >
                  Логин
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
