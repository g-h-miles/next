'use server';

import { render } from '@react-email/render';
import OrderConfirmationEmail from '@/email-templates/order-confirmation';
import { sendEmail } from '@/utils/email';

export const sendOrderConfirmationEmail = async (data: { email: string }) => {
  const to = `John Doe<${data.email}>`;

  sendEmail({
    to: to,
    subject: 'Your Order is Confirmed! - Isomorphic',
    html: render(OrderConfirmationEmail()),
  });

  return true;
};
