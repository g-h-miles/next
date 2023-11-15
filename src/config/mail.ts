import { env } from '@/env.mjs';

export const MAIL = {
  service: 'gmail',
  name: env.SMTP_HOST || 'smtp.google.com',
  host: env.SMTP_HOST || 'smtp.google.com',
  port: parseInt(env.SMTP_PORT || '586'),
  secure: true,
  // host: 'smtp.google.com',
  // port: 465,
  // secure: true,
  auth: {
    user: env.SMTP_USER || 'user',
    pass: env.SMTP_PASSWORD || 'password',
  },
  from: env.SMTP_FROM_EMAIL || 'admin@location.dev',
  logger: true,
  debug: true,
};
