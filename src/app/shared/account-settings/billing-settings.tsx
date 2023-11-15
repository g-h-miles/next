'use client';

import { useState } from 'react';
import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio-group';
import { useModal } from '@/app/shared/modal-views/use-modal';
import HorizontalFormBlockWrapper from './horiozontal-block';
import {
  PiCheckCircleFill,
  PiDownloadSimpleBold,
  PiFire,
  PiLightning,
  PiPlusBold,
  PiStackSimple,
} from 'react-icons/pi';
import { AdvancedRadio } from '@/components/ui/advanced-radio';
import BillingHistoryTable from './billing-history/table';
import AddBillingCardModalView from './modal/add-billing-card';
import MasterCardIcon from '@/components/icons/mastercard';
import VisaIcon from '@/components/icons/visa';
import ApplePayIcon from '@/components/icons/apple-pay';
import { billingHistoryData } from '@/data/billing-history';
import { exportToCSV } from '@/utils/export-to-csv';

const plansOptions = [
  {
    icon: <PiStackSimple className="h-4 w-4 text-gray-900" />,
    title: 'Basic plan $10/month',
    description:
      'Includes up to 10 users, 20GB individual data and access to all features.',
    value: 'basic',
  },
  {
    icon: <PiFire className="h-4 w-4 text-gray-900" />,
    title: 'Premium plan $20/month',
    description:
      'Includes up to 20 users, 40GB individual data and access to all features.',
    value: 'premium',
  },
  {
    icon: <PiLightning className="h-4 w-4 text-gray-900" />,
    title: 'Enterprise plan $40/month',
    description:
      'Unlimited users, unlimited individual data and access to all features.',
    value: 'enterprise',
  },
];

const cardsOptions = [
  {
    icon: <MasterCardIcon className="" />,
    title: 'Mastercard ending in 2321',
    expiry: '06/24',
    default: true,
    value: 'mastercard',
  },
  {
    icon: <VisaIcon className="" />,
    title: 'Visa ending in 22021',
    expiry: '06/23',
    default: false,
    value: 'visa',
  },
  {
    icon: <ApplePayIcon className="dark:invert" />,
    title: 'ApplePay ending in 2029',
    expiry: '06/24',
    default: false,
    value: 'applepay',
  },
];

export default function BillingSettingsView() {
  function handleExportData() {
    exportToCSV(
      billingHistoryData,
      'Title,Amount,Date,Status,Shared',
      'billing_history'
    );
  }

  return (
    <>
      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Account Plans"
        titleClassName="text-xl font-semibold"
        description="Pick an account plan that fits your workflow."
      />
      <HorizontalFormBlockWrapper
        title="Current Plan"
        description="We’ll credit your account if you need to downgrade during the billing cycle."
        descriptionClassName="max-w-md"
        childrenWrapperClassName="@3xl:grid-cols-1 max-w-5xl w-full"
      >
        <div>
          <CurrentPlans />
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Card Details"
        description="Update your billing details and address."
        descriptionClassName="max-w-md"
        childrenWrapperClassName="@3xl:grid-cols-1 max-w-5xl w-full"
      >
        <CardDetails />
      </HorizontalFormBlockWrapper>
      <div className="mt-8 xl:mt-10">
        <div className="mb-5 flex items-center justify-between">
          <Title as="h5" className="text-[17px] font-semibold">
            Billing History
          </Title>
          <Button
            onClick={() => handleExportData()}
            className="dark:bg-gray-200 dark:text-white"
          >
            <PiDownloadSimpleBold className="me-2 h-4 w-4" />
            Download
          </Button>
        </div>
        <BillingHistoryTable data={billingHistoryData} />
      </div>
    </>
  );
}

export function CurrentPlans() {
  const [currentPlan, setCurrentPlan] = useState('basic');

  return (
    <RadioGroup
      value={currentPlan}
      setValue={setCurrentPlan}
      className="flex flex-col gap-5"
    >
      {plansOptions.map((plan, index) => (
        <AdvancedRadio
          key={`plan-${index}`}
          name="current_plans"
          value={plan.value}
          onChange={() => setCurrentPlan(plan.value)}
          checked={plan.value === currentPlan}
          className="flex flex-col space-y-2 rounded-xl border border-gray-300 p-5 text-sm hover:cursor-pointer hover:border-gray-900"
          inputClassName="[&:checked~span_div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-gray-900 [&:checked~span]:!border-gray-900"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100">
              {plan.icon}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <Title
                  as="h6"
                  className="mb-1 text-sm font-medium text-gray-900"
                >
                  {plan.title}
                </Title>
                <PiCheckCircleFill className="icon hidden h-6 w-6 flex-shrink-0 text-gray-900" />
              </div>
              <Text className="text-gray-500">{plan.description}</Text>
            </div>
          </div>
        </AdvancedRadio>
      ))}
    </RadioGroup>
  );
}

export function CardDetails() {
  const [paymentMethod, setPaymentMethod] = useState('mastercard');
  const { openModal } = useModal();

  return (
    <div>
      <div className="flex flex-col gap-4">
        {cardsOptions.map((cards, index) => (
          <AdvancedRadio
            key={`cards-${index}`}
            name="card_details"
            onChange={() => setPaymentMethod(cards.value)}
            defaultChecked={cards.value === paymentMethod}
            value={cards.value}
            className="flex gap-3 rounded-xl border border-gray-300 p-5 text-sm hover:cursor-pointer hover:border-gray-900"
            inputClassName="[&:checked~span_div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-gray-900 [&:checked~span]:!border-gray-900"
          >
            <div className="flex h-8 w-12 shrink-0 items-center justify-center rounded-md border border-gray-100 px-2 py-1.5">
              {cards.icon}
            </div>
            <div className="block">
              <Title as="h6" className="mb-1 text-sm font-medium">
                {cards.title}
              </Title>
              <Text as="p">
                Expiry in <span className="font-medium">{cards.expiry}</span>
              </Text>
              <div className="mt-2 flex gap-3">
                <Button
                  variant="text"
                  className={cn(
                    'h-auto p-0',
                    cards.default && 'bg-transparent text-gray-500'
                  )}
                  disabled={cards.default}
                >
                  Set as Default
                </Button>
                <Button
                  variant="text"
                  className={cn('h-auto p-0 text-gray-900')}
                >
                  Edit
                </Button>
              </div>
            </div>
            {cards.value === paymentMethod ? (
              <PiCheckCircleFill className="icon ms-auto h-6 w-6 flex-shrink-0 text-gray-900" />
            ) : (
              <div className="relative ms-auto flex h-5 w-5 items-center justify-center rounded-full border border-gray-300"></div>
            )}
          </AdvancedRadio>
        ))}
      </div>

      <div>
        <Button
          type="button"
          variant="outline"
          className="mt-4"
          onClick={() =>
            openModal({
              view: <AddBillingCardModalView />,
            })
          }
        >
          <PiPlusBold className="me-2 h-4 w-4" />
          <span>Add new card</span>
        </Button>
      </div>
    </div>
  );
}
