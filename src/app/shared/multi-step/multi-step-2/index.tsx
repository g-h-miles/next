'use client';

import dynamic from 'next/dynamic';
import { atom, useAtom } from 'jotai';
import StepOne from './step-1';
const StepTwo = dynamic(() => import('./step-2'), {
  ssr: false,
});
const StepThree = dynamic(() => import('./step-3'), {
  ssr: false,
});
import Congratulations from '@/app/shared/multi-step/congratulations';

enum Step {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
}

const firstStep = Step.StepOne;

export const stepperAtomTwo = atom<Step>(firstStep);

export function useStepperTwo() {
  const [step, setStep] = useAtom(stepperAtomTwo);

  // function gotoStep(step: Step) {
  //   setStep(step);
  // }
  function gotoNextStep() {
    setStep(step + 1);
  }
  function gotoPrevStep() {
    setStep(step > firstStep ? step - 1 : step);
  }
  function resetStepper() {
    setStep(firstStep);
  }
  return {
    step,
    setStep,
    // gotoStep,
    resetStepper,
    gotoNextStep,
    gotoPrevStep,
  };
}

const MAP_STEP_TO_COMPONENT = {
  [Step.StepOne]: StepOne,
  [Step.StepTwo]: StepTwo,
  [Step.StepThree]: StepThree,
  [Step.StepFour]: Congratulations,
};

export const stepTwoTotalSteps = Object.keys(MAP_STEP_TO_COMPONENT).length;

export default function MultiStepFormOne() {
  const [step] = useAtom(stepperAtomTwo);
  const Component = MAP_STEP_TO_COMPONENT[step];

  return (
    <div className="flex min-h-screen justify-center py-20 md:items-center">
      <div className="mt-8 w-full max-w-2xl  px-4 md:mt-0 lg:px-6">
        <Component />
      </div>
    </div>
  );
}
