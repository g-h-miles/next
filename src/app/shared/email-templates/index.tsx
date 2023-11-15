import logo from '@public/newsletter-3.svg';
import newsletterImg1 from '@public/newsletter-1.svg';
import TemplatePreview from '@/app/shared/email-templates/template-preview';

export default function EmailTemplates() {
  return (
    <div className="mt-10 grid grid-cols-1 place-content-center gap-6 @container lg:grid-cols-2 lg:gap-8 ">
      <TemplatePreview
        icon={logo}
        title="Account Email"
        preview="https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/public/account-confirmation.png"
      />
      <TemplatePreview
        icon={newsletterImg1}
        title="Order Email"
        preview="https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/public/order-confirmation.png"
      />
    </div>
  );
}
