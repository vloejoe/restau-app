"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Liste des credentials pour la phase de test
const credentials = {
  admin: "aj@next.com",
  user: "123",
};

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleTestLogin = (role: keyof typeof credentials) => {
    // Remplir les champs avec les credentials prédéfinis
    setUsername(role);
    setPassword(credentials[role]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/admin");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
      {/* Boutons pour tester les utilisateurs prédéfinis */}
      <div className="mt-4 space-x-4">
        <Button onClick={() => handleTestLogin("admin")}>Login as Admin</Button>
        <Button onClick={() => handleTestLogin("user")}>Login as User</Button>
      </div>
    </div>
  );
}
