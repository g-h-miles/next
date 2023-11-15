import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

export default function ProductPricing() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Input
        label="Price"
        placeholder="10"
        {...register('price')}
        error={errors.price?.message as string}
        prefix={'$'}
        type="number"
      />
      <Input
        label="Cost Price"
        placeholder="15"
        {...register('costPrice')}
        error={errors.costPrice?.message as string}
        prefix={'$'}
        type="number"
      />
      <Input
        label="Retail Price"
        placeholder="10"
        {...register('retailPrice')}
        error={errors.retailPrice?.message as string}
        prefix={'$'}
        type="number"
      />
      <Input
        label="Sale Price"
        placeholder="20"
        {...register('salePrice')}
        error={errors.salePrice?.message as string}
        prefix={'$'}
        type="number"
      />
    </>
  );
}
