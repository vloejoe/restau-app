import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  interface User {
    name?: string;
    email?: string;
    image?: string;
    role: string;
  }

  if (!session?.user || (session.user as User).role !== "ADMIN") {
    console.warn("Access denied: Admins only");
    redirect("/login");
  }
  return <div>{children}</div>;
}
