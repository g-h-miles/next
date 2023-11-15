import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';

export default function ProductSeo({ className }: { className?: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Search Engine Optimization"
      description="Add your product's seo info here"
      className={cn(className)}
    >
      <Input
        label="Page Title"
        placeholder="page title"
        {...register('pageTitle')}
        error={errors.pageTitle?.message as string}
      />
      <Input
        label="Meta Keywords"
        placeholder="meta keywords"
        {...register('metaKeywords')}
        error={errors.metaKeywords?.message as string}
      />
      <Input
        label="Meta Description"
        placeholder="meta description"
        {...register('metaDescription')}
        error={errors.metaDescription?.message as string}
      />
      <Input
        label="Product URL"
        type="url"
        placeholder="https://"
        {...register('productUrl')}
        error={errors.productUrl?.message as string}
      />
    </FormGroup>
  );
}
