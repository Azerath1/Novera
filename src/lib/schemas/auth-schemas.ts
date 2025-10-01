import { z } from "zod";
import { VALIDATION_MESSAGES } from "@/lib/utils/constants";

export const emailSchema = z
  .string()
  .min(1, VALIDATION_MESSAGES.EMAIL_REQUIRED)
  .email(VALIDATION_MESSAGES.EMAIL_INVALID);

export const usernameSchema = z
  .string()
  .min(1, VALIDATION_MESSAGES.USERNAME_REQUIRED)
  .min(3, VALIDATION_MESSAGES.USERNAME_MIN)
  .max(20, VALIDATION_MESSAGES.USERNAME_MAX)
  .regex(/^[a-zA-Z0-9_]+$/, VALIDATION_MESSAGES.USERNAME_INVALID);

export const passwordSchema = z
  .string()
  .min(1, VALIDATION_MESSAGES.PASSWORD_REQUIRED)
  .min(6, VALIDATION_MESSAGES.PASSWORD_MIN);

export const registerSchema = z
  .object({
    email: emailSchema,
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(1, VALIDATION_MESSAGES.CONFIRM_PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: VALIDATION_MESSAGES.PASSWORDS_MATCH,
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, VALIDATION_MESSAGES.PASSWORD_REQUIRED),
  rememberMe: z.boolean(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;