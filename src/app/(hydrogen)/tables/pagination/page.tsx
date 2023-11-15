import { routes } from '@/config/routes';
import { productsData } from '@/data/products-data';
import { getColumns } from '@/app/shared/ecommerce/product/product-list/columns';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import TableLayout from '../table-layout';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Paginated Table'),
};

const pageHeader = {
  title: 'Pagination Table',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Tables',
    },
    {
      name: 'Pagination',
    },
  ],
};

export default function PaginationTablePage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={productsData}
      fileName="product_data"
      header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
    >
      <BasicTableWidget
        title="Pagination Table"
        noGutter
        variant="modern"
        data={productsData}
        // @ts-ignore
        getColumns={getColumns}
        enableSearch={false}
        enablePagination
        className="min-h-[480px] [&_.widget-card-header_h5]:font-medium"
      />
    </TableLayout>
  );
}
