import { routes } from '@/config/routes';
import { Title } from '@/components/ui/text';
import PageHeader from '@/app/shared/page-header';
import MetricCardsWithIcon from '@/app/shared/support/dashboard/stat-cards';
import MetricCardWithBarChart from '@/app/shared/analytics-dashboard/stat-cards';
import { FileStatGrid } from '@/app/shared/file/dashboard/file-stats';
import cn from '@/utils/class-names';
import ParticipantsList from './participants-list';
import TransactionsList from './transactions-list';
import TopProductList from './top-product-list';
import RecentAppList from './recent-app-list';
import CircleProgressBars from './circle-progressbars';
import AreaChartList from './area-chart-list';
import BarChartList from './bar-chart-list';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Cards'),
};

const pageHeader = {
  title: 'Cards',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.widgets.cards,
      name: 'Widgets',
    },
    {
      name: 'Cards',
    },
  ],
};

function SectionBlock({
  title,
  titleClassName,
  children,
  className,
}: React.PropsWithChildren<{
  title?: string;
  titleClassName?: string;
  className?: string;
}>) {
  return (
    <section className={className}>
      <header className="mb-2.5 lg:mb-3">
        <Title
          as="h5"
          className={cn(
            'mb-2 text-sm font-normal text-gray-700 sm:text-base',
            titleClassName
          )}
        >
          {title}
        </Title>
      </header>

      {children}
    </section>
  );
}

export default function CardsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <div className="grid grid-cols-1 gap-6 @container 3xl:gap-8">
        <SectionBlock title={'MetricCard + Icon'}>
          <MetricCardsWithIcon className="@2xl:grid-cols-2 @6xl:grid-cols-4 4xl:gap-8" />
        </SectionBlock>

        <SectionBlock title={'MetricCard + ProgressBar'}>
          <div className="grid grid-cols-1 gap-5 @xl:grid-cols-2 @6xl:grid-cols-4 3xl:gap-8">
            <FileStatGrid />
          </div>
        </SectionBlock>

        <SectionBlock title={'MetricCard + BarChart'}>
          <MetricCardWithBarChart className="grid-cols-1 @xl:grid-cols-2 @6xl:grid-cols-4 4xl:gap-8" />
        </SectionBlock>

        <SectionBlock title={'WidgetCard + List + Chart'}>
          <div className="grid grid-cols-1 gap-5 @2xl:grid-cols-2 @[90rem]:grid-cols-4 3xl:gap-8">
            <BarChartList />
            <ParticipantsList />
            <RecentAppList />
            <TransactionsList />
            <TopProductList />
            <AreaChartList />
            <CircleProgressBars />
          </div>
        </SectionBlock>

        {/* <SectionBlock title={'Ecommerce Product Card'}>
          <div className="grid grid-cols-1 gap-5 @2xl:grid-cols-2 @[90rem]:grid-cols-5 3xl:gap-8">
            {minimalProducts.map((product) => (
              <ProductMinimalCard key={product.id} product={product} />
            ))}
          </div>
        </SectionBlock> */}
      </div>
    </>
  );
}
