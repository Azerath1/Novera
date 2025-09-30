import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Novera",
  description: "Login to your Novera account",
};

export default function LoginPage() {
  return <LoginForm />;
}
