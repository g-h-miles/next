import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject(),
};

const boldRowClass = 'py-2';
const rowClass = 'py-2';
const PrivacyPolicy = () => (
  <div className='grid grow items-center px-6 xl:px-10'>
    <div className="px-auto text-center">
      <h1>Private Policy</h1>
      <div className="text-justify text-pretty p-6">
  <p className={boldRowClass} ><strong>We are committed to protecting your privacy</strong></p>
  <p className={rowClass} >We collect the minimum amount of information about you that is
    commensurate with providing you with a satisfactory service. This policy indicates the type of processes that may
    result in data being collected about you. Your use of this website gives us the right to collect that information.
  </p>
  <p className={boldRowClass} ><strong>Information Collected</strong></p>
  <p className={rowClass} >We may collect any or all of the information that you give us depending
    on the type of transaction you enter into, including your name, address, telephone number, and email address,
    together with data about your use of the website. Other information that may be needed from time to time to process
      a request may also be collected as indicated on the website.</p>
    <p className={boldRowClass} ><strong>Information Use</strong></p>
    <p className={rowClass} >We use the information collected primarily to process the task for which
      you visited the website. Data collected in the UK is held in accordance with the Data Protection Act. All reasonable
      precautions are taken to prevent unauthorized access to this information. This safeguard may require you to provide
      additional forms of identity should you wish to obtain information about your account details.</p>
    <p className={boldRowClass}><strong>Cookies</strong></p>
    <p className={rowClass} >Your Internet browser has the in-built facility for storing small files
      - &quot;cookies&quot; - that hold information which allows a website to recognize your account. Our website takes advantage of
      this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but,
    if you do, certain functionality on the website may be impaired.</p>
  <p className={boldRowClass} ><strong>Disclosing Information</strong></p>
  <p className={rowClass} >We do not disclose any personal information obtained about you from this
    website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition
    forms. We may also use the information to keep in contact with you and inform you of developments associated with
    us. You will be given the opportunity to remove yourself from any mailing list or similar device. If at any time in
    the future we should wish to disclose information collected on this website to any third party, it would only be
    with your knowledge and consent. </p>
  <p className={rowClass} >We may from time to time provide information of a general nature to
    third parties - for example, the number of individuals visiting our website or completing a registration form, but
    we will not use any information that could identify those individuals. </p>
  <p className={rowClass} >In addition Dummy may work with third parties for the purpose of
    delivering targeted behavioral advertising to the Dummy website. Through the use of cookies, anonymous information
    about your use of our websites and other websites will be used to provide more relevant adverts about goods and
    services of interest to you. For more information on online behavioral advertising and about how to turn this
    feature off, please visit your online choices.com/opt-out.</p>
  <p className={boldRowClass} ><strong>Changes to this Policy</strong></p>
  <p className={rowClass} >Any changes to our Privacy Policy will be placed here and will supersede
    this version of our policy. We will take reasonable steps to draw your attention to any changes in our policy.
    However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that
    it still meets with your approval.</p>
  <p className={boldRowClass} ><strong>Contacting Us</strong></p>
  <p className={rowClass} >If you have any questions about our Privacy Policy, or if you want to
    know what information we have collected about you, please email us at support@milesfamily.app. You can also
    correct any factual errors in that information or require us to remove your details form any list under our control.
  </p>
</div>
</div>
</div>
);

export default PrivacyPolicy;
