import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  /*
   * ServerSide Environment variables, not available on the client.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === 'production'
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url()
    ),

    // SMTP_HOST: z.string().min(1),
    // SMTP_PORT: z.string().min(1),
    // SMTP_USER: z.string().min(1),
    // SMTP_PASSWORD: z.string().min(1),
    // SMTP_FROM_EMAIL: z.string().email(),

    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),

    // email
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.string().optional(),
    SMTP_USER: z.string().optional(),
    SMTP_PASSWORD: z.string().optional(),
    SMTP_FROM_EMAIL: z.string().email().optional(),
  },
  /*
   * Environment variables available on the client (and server).
   */
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional(),
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: z.string().optional(),
  },
  runtimeEnv: process.env,
});
