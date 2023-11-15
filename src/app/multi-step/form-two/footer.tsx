'use client';

import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { useStepperTwo } from '@/app/shared/multi-step/multi-step-2';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const { gotoPrevStep } = useStepperTwo();
  return (
    <footer
      className={cn(
        'fixed bottom-0  left-0 z-40 flex w-full items-center justify-end gap-3 bg-gray-0/10 px-4 py-5 backdrop-blur md:px-5 lg:px-6 3xl:px-8 4xl:px-10',
        className
      )}
    >
      <Button onClick={gotoPrevStep} variant="outline" className="!w-[unset]">
        Back
      </Button>
      <Button className="!w-[unset]" type="submit">
        Next
      </Button>
    </footer>
  );
}
