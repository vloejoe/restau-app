import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Import des données utilisateur
import UsersData from "@/data/users.data";

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};

        // Recherche de l'utilisateur dans UsersData
        const user = UsersData().users.find(
          (user: User) =>
            user.username === username && user.password === password
        );

        if (user) {
          // Retourner uniquement les données nécessaires
          return {
            id: user.id.toString(),
            name: user.username,
            role: user.role,
          };
        }
        return null; // Retourner null en cas d'échec de l'authentification
      },
    }),
  ],
  pages: {
    signIn: "/admin/login", // Page de connexion personnalisée
  },
  callbacks: {
    // Ajouter le rôle dans le JWT
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as unknown as User).role;
      }
      return token;
    },

    // Inclure le rôle dans la session
    async session({ session, token }) {
      if (token) {
        if (session?.user) {
          session.user.role = token.role as string;
        }
      }
      return session;
    },

    // Redirection conditionnelle en fonction du rôle
    async redirect({
      baseUrl,
      url,
      token,
    }: {
      baseUrl: string;
      url: string;
      token?: { role?: string };
    }) {
      if (url === baseUrl) {
        return baseUrl;
      }

      const role = token?.role;

      if (role === "ADMIN") {
        return "/admin";
      }

      return "/profile";
    },
  },
};

// Exporter le handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
