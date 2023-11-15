import StepCounter from '@/app/shared/multi-step/step-counter';

export default function FormPart({
  title,
  children,
  totalSteps,
  currentStep,
  description,
}: {
  title: string;
  description: string;
  totalSteps?: number;
  currentStep?: number;
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className="mb-6 md:mb-10">
        {currentStep && totalSteps ? (
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900 md:text-2xl">
              {title}
            </h3>
            <StepCounter totalSteps={totalSteps} currentStep={currentStep} />
          </div>
        ) : (
          <h3 className="text-lg font-semibold text-gray-900 md:mb-2 md:text-2xl">
            {title}
          </h3>
        )}

        <p className="mt-1 text-xs leading-5 text-gray-500 md:mt-2 md:text-sm">
          {description}
        </p>
      </header>
      {children}
    </section>
  );
}
