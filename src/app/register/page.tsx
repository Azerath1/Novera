import RegisterForm from "@/components/auth/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Novera",
  description: "Create your Novera account",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
