import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { Checkbox } from '@/components/ui/checkbox';
import { PiEnvelopeSimple } from 'react-icons/pi';

interface FormSenderInfoProps {
  className?: string;
}

export default function FormSenderInfo({ className }: FormSenderInfoProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup
      title="Sender's Info"
      description="Add sender information here"
      className={cn(className)}
    >
      <Input
        label="Name"
        placeholder="Jane Cooper"
        labelClassName="font-medium text-gray-900"
        {...register('senderName')}
        error={errors.senderName?.message as string}
      />
      <Input
        label="Address"
        labelClassName="font-medium text-gray-900"
        placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486"
        {...register('senderAddress')}
        error={errors.senderAddress?.message as string}
      />
      <Input
        label="Email"
        labelClassName="font-medium text-gray-900"
        placeholder="kenzi.lawson@example.com"
        {...register('senderEmail')}
        error={errors.senderEmail?.message as string}
      />
      <Input
        label="Phone Number"
        labelClassName="font-medium text-gray-900"
        placeholder="(480) 555-0103"
        {...register('senderPhone')}
        error={errors.senderPhone?.message as string}
      />
      <Controller
        name="notifySenderViaSMS"
        render={({ field: { value, onChange } }) => (
          <Checkbox
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
