'use client';

import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { PiArrowUpLight, PiCheck } from 'react-icons/pi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import {
  formDataAtom,
  initialFormData,
  stepperAtomOne,
  useStepperOne,
} from '@/app/shared/multi-step/multi-step-1';

interface FooterProps {
  formId?: number;
  className?: string;
  isLoading?: boolean;
}

function buttonLabel(formId?: number) {
  if (formId === 6) {
    return (
      <>
        Submit <PiCheck />
      </>
    );
  }
  if (formId === 7) {
    return 'Back to Home';
  }
  return (
    <>
      Next <PiArrowUpLight className="rotate-90" />
    </>
  );
}

export default function Footer({ isLoading, className }: FooterProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const setFormData = useSetAtom(formDataAtom);
  const { step, gotoPrevStep } = useStepperOne();
  const resetLocation = useResetAtom(stepperAtomOne);

  useEffect(() => {
    resetLocation();
    setFormData(initialFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  function buttonAttr() {
    if (step === 7) {
      return {
        onClick: () => push('/'),
      };
    }
    return { form: `rhf-${step?.toString()}` };
  }

  return (
    <footer
      className={cn(
        'fixed bottom-0 left-0 right-0 flex items-center justify-between gap-3 px-4 py-5 lg:px-8 4xl:px-10',
        className
      )}
    >
      {step > 0 && step < 7 && (
        <Button
          rounded="pill"
          variant="outline"
          onClick={gotoPrevStep}
          className="gap-1 text-white backdrop-blur-lg hover:enabled:border-white dark:border-gray-800 dark:hover:enabled:border-white"
        >
          <PiArrowUpLight className="-rotate-90" />
          Back
        </Button>
      )}
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        rounded="pill"
        {...buttonAttr()}
        type={'submit'}
        className="ml-auto gap-1 bg-gray-900/[.35] backdrop-blur-lg dark:bg-gray-0/[.35] dark:text-white dark:active:enabled:bg-gray-0/75"
      >
        {buttonLabel(step)}
      </Button>
    </footer>
  );
}
