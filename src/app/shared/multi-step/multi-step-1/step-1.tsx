import Image from 'next/image';
import { useForm } from 'react-hook-form';
import homeFront from '@public/home-front.png';
import FormSummary from '@/app/shared/multi-step/multi-step-1/form-summary';
import { useStepperOne } from '@/app/shared/multi-step/multi-step-1';

export default function StepOne() {
  const { step, gotoNextStep } = useStepperOne();

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    gotoNextStep();
  };

  return (
    <>
      <div className="col-span-full flex flex-col justify-center @4xl:col-span-5">
        <FormSummary
          descriptionClassName="@7xl:me-10"
          title="Tell us about your place"
          description="In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room"
        />
      </div>

      <form
        id={`rhf-${step.toString()}`}
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-full grid aspect-[4/3] gap-4 @3xl:grid-cols-12 @4xl:col-span-7 @5xl:gap-5 @7xl:gap-8"
      >
        <Image
          src={homeFront}
          alt="home front part 1"
          className="mt-auto rounded-lg object-cover object-left-top @3xl:col-span-4 @3xl:h-96 @6xl:h-5/6"
        />
        <Image
          src={homeFront}
          alt="home front part 2"
          className="my-auto hidden rounded-lg object-cover @3xl:col-span-4 @3xl:block @3xl:h-96 @6xl:h-5/6"
        />
        <Image
          src={homeFront}
          alt="home front part 3"
          className="mb-auto hidden rounded-lg object-cover object-right-bottom @3xl:col-span-4 @3xl:block @3xl:h-96 @6xl:h-5/6"
        />
      </form>
    </>
  );
}
