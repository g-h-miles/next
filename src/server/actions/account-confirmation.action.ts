'use server';

import { render } from '@react-email/render';
import { sendEmail } from '@/utils/email';
import AccountConfirmationEmail from '@/email-templates/account-confirmation';

export const sendAccountConfirmationEmail = async (data: { email: string }) => {
  const to = `John Doe<${data.email}>`;

  console.log('data', data);

  await sendEmail({
    to: to,
    subject: 'Your Account is Created!',
    html: render(AccountConfirmationEmail(data.email)),
  });

  return true;
};
