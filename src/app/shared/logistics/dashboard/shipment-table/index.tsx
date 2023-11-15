import cn from '@/utils/class-names';
import WidgetCard from '@/components/cards/widget-card';
import ShipmentTable from './shipment-table';

type ShipmentTableWidgetProps = {
  title: string;
  description: string;
  className?: string;
};

export default function ShipmentTableWidget({
  title,
  description,
  className,
}: ShipmentTableWidgetProps) {
  return (
    <WidgetCard
      title={title}
      description={description}
      descriptionClassName="mb-6 mt-2"
      className={cn(className)}
    >
      <ShipmentTable />
    </WidgetCard>
  );
}
