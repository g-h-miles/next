import cn from '@/utils/class-names';

interface StepCounterProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export default function StepCounter({
  className,
  totalSteps,
  currentStep,
}: StepCounterProps) {
  return (
    <span
      className={cn('text-xs font-medium text-gray-500 lg:text-sm', className)}
    >
      Step {currentStep} of {totalSteps}
    </span>
  );
}
