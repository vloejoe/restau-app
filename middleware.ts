import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ token }) {
      return token?.role === "ADMIN";
    },
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
