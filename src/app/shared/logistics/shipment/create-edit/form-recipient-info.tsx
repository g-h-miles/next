import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { Checkbox } from '@/components/ui/checkbox';
import { PiEnvelopeSimple } from 'react-icons/pi';

interface FormRecipientInfoProps {
  className?: string;
}

export default function FormRecipientInfo({
  className,
}: FormRecipientInfoProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup
      title="Recipient's Info"
      description="Add recipient information here"
      className={cn(className)}
    >
      <Input
        label="Name"
        placeholder="Jane Cooper"
        labelClassName="font-medium text-gray-900"
        {...register('recipientName')}
        error={errors.recipientName?.message as string}
      />
      <Input
        label="Address"
        labelClassName="font-medium text-gray-900"
        placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486"
        {...register('recipientAddress')}
        error={errors.recipientAddress?.message as string}
      />
      <Input
        label="Email"
        labelClassName="font-medium text-gray-900"
        placeholder="kenzi.lawson@example.com"
        {...register('recipientEmail')}
        error={errors.recipientEmail?.message as string}
      />
      <Input
        label="Phone Number"
        labelClassName="font-medium text-gray-900"
        placeholder="(480) 555-0103"
        {...register('recipientPhone')}
        error={errors.recipientPhone?.message as string}
      />
      <Controller
        name="notifyRecipientViaSMS"
        render={({ field: { value, onChange } }) => (
          <Checkbox
            checked={value}
            value={value}
            onChange={onChange}
            label={
              <span className="flex items-center gap-1">
                Notify via SMS
                <PiEnvelopeSimple className="h-4 w-4" />
              </span>
            }
            size="sm"
            className="-mt-2"
          />
        )}
      />
    </FormGroup>
  );
}
