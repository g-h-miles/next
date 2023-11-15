import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import NFTSearchPageView from '@/app/shared/explore-nft';
import NFTDrawer from '@/app/shared/explore-nft/nft-drawer';

const pageHeader = {
  title: 'Search & Filters',
  breadcrumb: [
    {
      name: 'Pages',
    },
    {
      href: routes.search.realEstate,
      name: 'Search & Filters',
    },
    {
      name: 'NFT',
    },
  ],
};

export default function NFTPage() {
  return (
    <div className="@container">
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <NFTDrawer />
      </PageHeader>
      <NFTSearchPageView />
    </div>
  );
}
