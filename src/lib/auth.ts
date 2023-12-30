import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { env } from '@/env.mjs';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
