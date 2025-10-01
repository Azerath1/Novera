import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  registerSchema,
  loginSchema,
  type RegisterFormData,
  type LoginFormData,
} from "@/lib/schemas/auth-schemas";
import { AuthAPI } from "@/lib/api/auth-api";

export const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setServerError(null);

    const result = await AuthAPI.register(data);

    if (result.success) {
      router.push("/dashboard");
    } else {
      setServerError(result.error || "Ошибка регистрации");
    }

    setIsLoading(false);
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    serverError,
    setServerError,
  };
};

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setServerError(null);

    const result = await AuthAPI.login(data);

    if (result.success) {
      router.push("/dashboard");
    } else {
      setServerError(result.error || "Ошибка входа");
    }

    setIsLoading(false);
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    serverError,
    setServerError,
  };
};
