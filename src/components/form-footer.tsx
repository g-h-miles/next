import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';

interface FormFooterProps {
  className?: string;
  altBtnText?: string;
  submitBtnText?: string;
  isLoading?: boolean;
  handleAltBtn?: () => void;
}

export const negMargin = '-mx-4 md:-mx-5 lg:-mx-6 3xl:-mx-8 4xl:-mx-10';

export default function FormFooter({
  isLoading,
  altBtnText = 'Save as Draft',
  submitBtnText = 'Submit',
  className,
  handleAltBtn,
}: FormFooterProps) {
  return (
    <div
      className={cn(
        'sticky bottom-0 left-0 right-0 -mb-8 flex items-center justify-end gap-4 border-t bg-white px-4 py-4 dark:bg-gray-50 md:px-5 lg:px-6 3xl:px-8 4xl:px-10',
        className,
        negMargin
      )}
    >
      <Button
        variant="outline"
        className="w-full @xl:w-auto"
        onClick={handleAltBtn}
      >
        {altBtnText}
      </Button>
      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
      >
        {submitBtnText}
      </Button>
    </div>
  );
}
