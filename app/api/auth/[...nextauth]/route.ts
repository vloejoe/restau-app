import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};

        // Exemple de logique d'autorisation
        if (username === "aj@next.com" && password === "123") {
          return { id: 1, name: "Admin" }; // Retourner un utilisateur valide
        }
        return null; // Retourne null si l'authentification échoue
      },
    }),
  ],
  pages: {
    signIn: "/login", // Page de connexion personnalisée
  },
  session: {
    strategy: "jwt", // Utilisation de JWT pour la session
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirection après connexion réussie
      if (url === "/admin") {
        return `${baseUrl}/admin`; // Redirige vers la page admin
      }
      return baseUrl; // Sinon, redirige vers la page d'accueil
    },
  },
});
