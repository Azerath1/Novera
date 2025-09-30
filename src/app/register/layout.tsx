import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Novera",
  description: "Create your Novera account",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
