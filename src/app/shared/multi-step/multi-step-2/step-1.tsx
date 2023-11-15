'use client';

import { Button } from '@/components/ui/button';
import { useStepperTwo } from '@/app/shared/multi-step/multi-step-2';
import { PiClipboardBold, PiClipboardTextBold } from 'react-icons/pi';

export default function StepOne() {
  const { gotoNextStep } = useStepperTwo();
  return (
    <>
      <h3 className="mb-4 text-lg font-semibold md:mb-7 md:text-2xl">
        Start a new listing
      </h3>
      <div className="grid gap-2 lg:gap-5">
        <Button
          onClick={gotoNextStep}
          variant="outline"
          className="flex !h-[unset] w-full items-center justify-start gap-5 px-6 py-5 lg:px-12 lg:py-11 lg:text-lg"
        >
          <PiClipboardBold className="!h-6 !w-6 md:!h-8 md:!w-8" />
          Create a new listing
        </Button>
        <Button
          onClick={gotoNextStep}
          variant="outline"
          className="flex !h-[unset] w-full items-center justify-start gap-5 px-6 py-5 lg:px-12 lg:py-11 lg:text-lg"
        >
          <PiClipboardTextBold className="!h-6 !w-6 md:!h-8 md:!w-8" />
          Duplicate an existing listing
        </Button>
      </div>
    </>
  );
}
