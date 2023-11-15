import Header from '@/app/multi-step/form-two/header';

export default function MultiStepLayoutOne({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
