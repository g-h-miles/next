import { Title } from '@/components/ui/text';
import { Input } from '@/components/ui/input';

export default function ShippingForm({ register, errors }: any) {
  return (
    <>
      <Title as="h4" className="mb-3 pt-9 font-medium @2xl:mb-5">
        Shipping Information
      </Title>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-2 @lg:gap-4 @2xl:gap-5">
        <Input
          label="Address Line 1"
          placeholder="address line 1"
          {...register('shippingAddressOne')}
          error={errors.shippingAddressOne?.message}
        />
        <Input
          label="Address Line 2"
          placeholder="address line 2"
          {...register('shippingAddressTwo')}
          error={errors.shippingAddressTwo?.message}
        />
        <Input
          label="City"
          placeholder="city"
          {...register('shippingCity')}
          error={errors.shippingCity?.message}
        />
        <Input
          label="Country"
          placeholder="country"
          {...register('shippingCountry')}
          error={errors.shippingCountry?.message}
        />
        <Input
          label="Zip/Postcode"
          placeholder="zip/postcode"
          {...register('shippingZip')}
          error={errors.shippingZip?.message}
        />
        <Input
          label="State"
          placeholder="state"
          {...register('shippingState')}
          error={errors.shippingState?.message}
        />
      </div>
    </>
  );
}
