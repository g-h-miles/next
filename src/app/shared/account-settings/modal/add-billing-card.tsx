import { useState } from 'react';
import { PiLockSimple } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { usePatternFormat, NumberInputProps } from 'rizzui';
import { Text, Title } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { NumberInput } from '@/components/ui/number-input';
import { Button } from '@/components/ui/button';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Form } from '@/components/ui/form';
import {
  creditCardSchema,
  CreditCardSchema,
} from '@/utils/validators/credit-card.schema';

type CardExpiryType = NumberInputProps & {
  isMask?: boolean;
};

export default function AddBillingCardModalView() {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreditCardSchema> = (data) => {
    // set timeout ony required to display loading state of the create product button
    setLoading(true);
    closeModal();
    setTimeout(() => {
      setLoading(false);
      console.log(' data ->', data);
      setReset({
        cardHolder: '',
      });
    }, 600);
  };

  return (
    <div className="m-auto p-6">
      <Title as="h3" className="mb-6 text-lg">
        Add New Card
      </Title>
      <Form<CreditCardSchema>
        validationSchema={creditCardSchema}
        resetValues={reset}
        onSubmit={onSubmit}
      >
        {({ register, control, formState: { errors } }) => (
          <>
            <BillingForm
              control={control}
              register={register}
              errors={errors}
            />
            <Text
              as="span"
              className="mt-5 flex items-center gap-1 text-sm text-gray-500"
            >
              <PiLockSimple className="h-5 w-5 text-gray-700" />
              Your transaction is secured with SSL encryption
            </Text>
            <div className="mt-8 flex justify-end gap-3">
              <Button
                className="w-auto"
                variant="outline"
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-auto dark:bg-gray-100 dark:text-white"
              >
                Add
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}

export function BillingForm({ register, control, errors }: any) {
  function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
    const { format } = usePatternFormat({
      ...props,
      format: '##/##',
    });
    const _format = (val: string) => {
      let month = val.substring(0, 2);
      const year = val.substring(2, 4);

      if (month.length === 1 && parseInt(month[0]) > 1) {
        month = `0${month[0]}`;
      } else if (month.length === 2) {
        if (Number(month) === 0) {
          month = '01';
        } else if (Number(month) > 12) {
          month = '12';
        }
      }
      return isMask ? format(`${month}${year}`) : `${month}/${year}`;
    };
    return <NumberInput {...props} format={_format} />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        label="Card Holder"
        placeholder="John Doe"
        labelClassName="text-sm font-medium text-gray-900"
        {...register('cardHolder')}
        error={errors?.cardHolder?.message}
      />
      <Controller
        name="cardNumber"
        control={control}
        render={({ field: { onChange, value } }) => (
          <NumberInput
            formatType="pattern"
            format="#### #### #### ####"
            value={value}
            mask="_"
            customInput={Input as React.ComponentType<unknown>}
            onChange={onChange}
            {...{
              label: 'Card Number',
              variant: 'outline',
              labelClassName: 'text-sm font-medium text-gray-900',
              error: errors?.cardNumber?.message,
            }}
          />
        )}
      />
      <div className="grid grid-cols-2 gap-2">
        <Controller
          name="expiryDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <CardExpiry
              isMask
              formatType="custom"
              placeholder="MM/YY"
              mask={['M', 'M', 'Y', 'Y']}
              allowEmptyFormatting
              customInput={Input as React.ComponentType<unknown>}
              onChange={onChange}
              {...{
                label: 'Expiry Date',
                variant: 'outline',
                labelClassName: 'text-sm font-medium text-gray-900',
                error: errors?.expiryDate?.message,
              }}
            />
          )}
        />
        <Controller
          name="cvc"
          control={control}
          render={({ field: { onChange, value } }) => (
            <NumberInput
              formatType="pattern"
              format="###"
              mask={['C', 'V', 'C']}
              allowEmptyFormatting
              customInput={Input as React.ComponentType<unknown>}
              onChange={onChange}
              value={value}
              {...{
                label: 'CVC',
                variant: 'outline',
                labelClassName: 'text-sm font-medium text-gray-900',
                error: errors?.cvc?.message,
              }}
            />
          )}
        />
      </div>
    </div>
  );
}
