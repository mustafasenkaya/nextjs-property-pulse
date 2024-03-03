const { authOptions } = require("@/utils/authOptions");
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// Sign in with Google
