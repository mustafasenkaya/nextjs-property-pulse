import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    // Invoked on successful sign in
    async signIn({ profile }) {
      // 1. Connect DB
      // 2. Check if user exists
      // 3. If not, then add user to database
      // 4. Return true to allow sign in
    },
    // Modifies the session object
    async session({ sesion }) {
      // 1. Get user from DB
      // 2. Assign the user id to the session
      // 3. Return session
    },
  },
};

export default NextAuth(authOptions);
