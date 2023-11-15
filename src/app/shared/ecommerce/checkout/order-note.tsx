import { useFormContext } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import cn from '@/utils/class-names';

interface OrderNoteProps {
  className?: string;
}

export default function OrderNote({ className }: OrderNoteProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className={cn(
        'border-t border-gray-200 pt-4 @xs:pt-6 @5xl:pt-7',
        className
      )}
    >
      <Textarea
        label="Order Note (optional)"
        placeholder="Notes about your order, e.g. special notes for delivery."
        {...register('note')}
        error={errors.note?.message as string}
        textareaClassName="h-20"
      />
    </div>
  );
}
