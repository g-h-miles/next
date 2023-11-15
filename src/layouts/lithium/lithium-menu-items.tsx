import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import FilesIcon from '@/components/icons/files';
import TruckIcon from '@/components/icons/truck';
import ShopIcon from '@/components/icons/shop';
import AnalyticsCircularIcon from '@/components/icons/analytics-circular';
import WalkmanIcon from '@/components/icons/walkman';
import UserPlusIcon from '@/components/icons/user-plus';
import UserLockIcon from '@/components/icons/user-lock';
import LockExclamationIcon from '@/components/icons/lock-exclamation';
import LockWildCardIcon from '@/components/icons/lock-wild-card';
import DicesIcon from '@/components/icons/dices';
import GreenLeafIcon from '@/components/icons/green-leaf';
import PieChartCurrencyIcon from '@/components/icons/pie-chart-currency';
import MapMarkerWithPathIcon from '@/components/icons/map-marker-with-path';
import UserSettingsIcon from '@/components/icons/user-settings';
import NotificationSettingsIcon from '@/components/icons/notification-settings';
import UserInfoIcon from '@/components/icons/user-info';
import NewsletterAnnouncement from '@/components/icons/newsletter-announcement';
import MultiStepArrowIcon from '@/components/icons/multi-step-arrow';
import OnlinePaymentIcon from '@/components/icons/online-payment';
import ShoppingCartIcon from '@/components/icons/shopping-cart';
import WalkmanWithExclamationIcon from '@/components/icons/walkman-with-exclamation';
import ShipIcon from '@/components/icons/ship';
import FileSettingsIcon from '@/components/icons/file-settings';
import InvoiceIcon from '@/components/icons/invoice';
import TableBasicIcon from '@/components/icons/table-basic';
import TableCollapsibleIcon from '@/components/icons/table-collapsible';
import TableEnhancedIcon from '@/components/icons/table-enhanced';
import TableStickyHeaderIcon from '@/components/icons/table-sticky-header';
import ArrowBothDirectionIcon from '@/components/icons/arrow-both-direction';
import TableSearchIcon from '@/components/icons/table-search';
import MagnifyingWithBarIcon from '@/components/icons/magnifying-with-bar';
import UserAvatarIcon from '@/components/icons/user-avatar';
import ShootingStarIcon from '@/components/icons/shooting-star';
import RocketFlamingIcon from '@/components/icons/rocket-flaming';
import BadgeNotAllowedIcon from '@/components/icons/badge-not-allowed';
import MagnifyingWithCrossIcon from '@/components/icons/magnifying-with-cross';
import SettingsWarningIcon from '@/components/icons/settings-warning';
import PageBlankIcon from '@/components/icons/page-blank';
import CalenderIcon from '@/components/icons/calendar';
import FolderLockIcon from '@/components/icons/folder-lock';
import PointOfSellIcon from '@/components/icons/point-of-sell';
import RealEstateIcon from '@/components/icons/real-estate';
import NftIcon from '@/components/icons/nft';
import FlightIcon from '@/components/icons/flight-icon';

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
}

export interface DropdownItemType {
  name: string;
  icon: JSX.Element;
  href?: string;
  description?: string;
  subMenuItems?: SubMenuItemType[];
}

export type menuType = 'link' | 'collapse' | 'enhance';

export interface MenuItemsType {
  id: string;
  name: string;
  type: menuType;
  popoverContentClassName?: string;
  dropdownItems?: DropdownItemType[];
}

export const menuItems: MenuItemsType[] = [
  {
    id: '1',
    name: 'Dashboard',
    type: 'link',
    popoverContentClassName: 'flex flex-col',
    dropdownItems: [
      {
        name: 'File Manager',
        href: '/',
        icon: (
          <span>
            <FilesIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Logistics',
        href: routes.logistics.dashboard,
        icon: (
          <span>
            <TruckIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'E-Commerce',
        href: routes.eCommerce.dashboard,
        icon: (
          <span>
            <ShopIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Analytics',
        href: routes.analytics,
        icon: (
          <span>
            <AnalyticsCircularIcon className="h-5 w-5" />
          </span>
        ),
        // icon: <TruckIcon className="h-5 w-5" />,
      },
      {
        name: 'Support',
        href: routes.support.dashboard,
        icon: (
          <span>
            <WalkmanIcon className="h-5 w-5" />
          </span>
        ),
      },
    ],
  },
  {
    id: '2',
    name: 'Apps Kit',
    type: 'enhance',
    popoverContentClassName: 'w-[670px] min-h-[336px]',
    dropdownItems: [
      {
        name: 'E-Commerce',
        description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
        icon: <ShoppingCartIcon className="h-5 w-5" />,
        subMenuItems: [
          {
            name: 'Products',
            href: routes.eCommerce.products,
          },
          {
            name: 'Product Details',
            href: routes.eCommerce.productDetails(DUMMY_ID),
          },
          {
            name: 'Create Product',
            href: routes.eCommerce.createProduct,
          },
          {
            name: 'Edit Product',
            href: routes.eCommerce.ediProduct(DUMMY_ID),
          },
          {
            name: 'Categories',
            href: routes.eCommerce.categories,
          },
          {
            name: 'Create Category',
            href: routes.eCommerce.createCategory,
          },
          {
            name: 'Edit Category',
            href: routes.eCommerce.editCategory(DUMMY_ID),
          },
          {
            name: 'Orders',
            href: routes.eCommerce.orders,
          },
          {
            name: 'Order Details',
            href: routes.eCommerce.orderDetails(DUMMY_ID),
          },
          {
            name: 'Create Order',
            href: routes.eCommerce.createOrder,
          },
          {
            name: 'Edit Order',
            href: routes.eCommerce.editOrder(DUMMY_ID),
          },
          {
            name: 'Reviews',
            href: routes.eCommerce.reviews,
          },
          {
            name: 'Shop',
            href: routes.eCommerce.shop,
          },
          {
            name: 'Cart',
            href: routes.eCommerce.cart,
          },
          {
            name: 'Checkout & Payment',
            href: routes.eCommerce.checkout,
          },
        ],
      },
      {
        name: 'Support',
        description: '"Effortless Assistance at your Fingertips!"',
        icon: <WalkmanWithExclamationIcon className="h-5 w-5" />,
        subMenuItems: [
          {
            name: 'Inbox',
            href: routes.support.inbox,
          },
          {
            name: 'Snippets',
            href: routes.support.snippets,
          },
          {
            name: 'Templates',
            href: routes.support.templates,
          },
        ],
      },
      {
        name: 'Invoice',
        description: 'Professional-looking invoices for each customer order',
        icon: <InvoiceIcon className="h-5 w-5" />,
        subMenuItems: [
          {
            name: 'List',
            href: routes.invoice.home,
          },
          {
            name: 'Details',
            href: routes.invoice.details(DUMMY_ID),
          },
          {
            name: 'Create',
            href: routes.invoice.create,
          },
          {
            name: 'Edit',
            href: routes.invoice.edit(DUMMY_ID),
          },
        ],
      },
      {
        name: 'Logistics',
        description:
          '"Streamline Shipments: Discover Efficiency with our Logistics!"',
        icon: <ShipIcon className="h-5 w-5" />,
        subMenuItems: [
          {
            name: 'Shipment List',
            href: routes.logistics.shipmentList,
          },
          {
            name: 'Shipment Details',
            href: routes.logistics.shipmentDetails(DUMMY_ID),
          },
          {
            name: 'Create Shipment',
            href: routes.logistics.createShipment,
          },
          {
            name: 'Edit Shipment',
            href: routes.logistics.editShipment(DUMMY_ID),
          },
          {
            name: 'Customer Profile',
            href: routes.logistics.customerProfile,
          },
          {
            name: 'Tracking',
            href: routes.logistics.tracking(DUMMY_ID),
          },
        ],
      },
      {
        name: 'File Manager',
        description:
          '"Organize, Access, and Share: Simplify your Digital World with us!"',
        icon: <FileSettingsIcon className="h-5 w-5" />,
        subMenuItems: [
          {
            name: 'Files',
            href: routes.file.dashboard,
          },
          {
            name: 'Manage Files',
            href: routes.file.manager,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Widgets',
    type: 'link',
    popoverContentClassName: 'flex flex-col',
    dropdownItems: [
      {
        name: 'Cards',
        href: routes.widgets.cards,
        icon: (
          <span>
            <DicesIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Icons',
        href: routes.widgets.icons,
        icon: (
          <span>
            <GreenLeafIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Charts',
        href: routes.widgets.charts,
        icon: (
          <span>
            <PieChartCurrencyIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Maps',
        href: routes.widgets.maps,
        icon: (
          <span>
            <MapMarkerWithPathIcon className="h-5 w-5" />
          </span>
        ),
      },
    ],
  },
  {
    id: '4',
    name: 'Forms',
    type: 'link',
    popoverContentClassName: 'grid grid-cols-2 w-[460px] gap-x-2',
    dropdownItems: [
      {
        name: 'Account Settings',
        href: routes.forms.profileSettings,
        icon: (
          <span>
            <UserSettingsIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Notification Preference',
        href: routes.forms.notificationPreference,
        icon: (
          <span>
            <NotificationSettingsIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Personal Information',
        href: routes.forms.personalInformation,
        icon: (
          <span>
            <UserInfoIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Newsletter',
        href: routes.forms.newsletter,
        icon: (
          <span>
            <NewsletterAnnouncement className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Multi Step',
        href: routes.multiStep,
        icon: (
          <span>
            <MultiStepArrowIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Payment Checkout',
        href: routes.eCommerce.checkout,
        icon: (
          <span>
            <OnlinePaymentIcon className="h-5 w-5" />
          </span>
        ),
      },
    ],
  },
  {
    id: '5',
    name: 'Tables',
    type: 'link',
    popoverContentClassName: 'grid grid-cols-2 w-[330px] gap-x-1',
    dropdownItems: [
      {
        name: 'Basic',
        href: routes.tables.basic,
        icon: (
          <span className="text-gray-500">
            <TableBasicIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Collapsible',
        href: routes.tables.collapsible,
        icon: (
          <span>
            <TableCollapsibleIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Enhanced',
        href: routes.tables.enhanced,
        icon: (
          <span>
            <TableEnhancedIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Sticky Header',
        href: routes.tables.stickyHeader,
        icon: (
          <span>
            <TableStickyHeaderIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Pagination',
        href: routes.tables.pagination,
        icon: (
          <span className="dark:text-white">
            <ArrowBothDirectionIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Search',
        href: routes.tables.search,
        icon: (
          <span>
            <TableSearchIcon className="h-5 w-5" />
          </span>
        ),
      },
    ],
  },
  {
    id: '6',
    name: 'Pages',
    type: 'collapse',
    popoverContentClassName:
      'grid grid-cols-1 2xl:grid-cols-2 w-[220px] 2xl:w-[420px]  gap-x-1 p-3',
    dropdownItems: [
      {
        name: 'Real Estate',
        icon: (
          <span>
            <RealEstateIcon className="h-5 w-5" />
          </span>
        ),
        href: routes.search.realEstate,
      },
      {
        name: 'Find Flight',
        icon: (
          <span>
            <FlightIcon className="h-5 w-5" />
          </span>
        ),
        href: routes.search.flightAndHotel,
      },
      {
        name: 'Point of Sell',
        href: routes.pos.index,
        icon: (
          <span>
            <PointOfSellIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'NFT',
        icon: (
          <span>
            <NftIcon className="h-5 w-5" />
          </span>
        ),
        href: routes.search.nft,
      },
      {
        name: 'Event Calendar',
        href: routes.eventCalendar,
        icon: (
          <span>
            <CalenderIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Roles & Permissions',
        href: routes.rolesPermissions,
        icon: (
          <span>
            <FolderLockIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Profile',
        href: routes.profile,
        icon: (
          <span>
            <UserAvatarIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Welcome',
        href: routes.welcome,
        icon: (
          <span>
            <ShootingStarIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Coming Soon',
        href: routes.comingSoon,
        icon: (
          <span>
            <RocketFlamingIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Access Denied',
        href: routes.accessDenied,
        icon: (
          <span>
            <BadgeNotAllowedIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Not Found',
        href: routes.notFound,
        icon: (
          <span>
            <MagnifyingWithCrossIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Maintenance',
        href: routes.maintenance,
        icon: (
          <span>
            <SettingsWarningIcon className="h-5 w-5" />
          </span>
        ),
      },
      {
        name: 'Blank',
        href: routes.blank,
        icon: (
          <span>
            <PageBlankIcon className="h-5 w-5" />
          </span>
        ),
      },
    ],
  },
  {
    id: '7',
    name: 'Authentication',
    popoverContentClassName: 'w-[710px] min-h-[280px]',
    type: 'enhance',
    dropdownItems: [
      {
        name: 'Sign Up',
        icon: (
          <span>
            <UserPlusIcon className="h-5 w-5" />
          </span>
        ),
        description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
        subMenuItems: [
          {
            name: 'Modern Sign Up',
            href: routes.auth.signUp1,
          },
          {
            name: 'Vintage Sign Up',
            href: routes.auth.signUp2,
          },
          {
            name: 'Trendy Sign Up',
            href: routes.auth.signUp3,
          },
          {
            name: 'Elegant Sign Up',
            href: routes.auth.signUp4,
          },
          {
            name: 'Classic Sign Up',
            href: routes.auth.signUp5,
          },
        ],
      },
      {
        name: 'Sign In',
        icon: (
          <span>
            <UserLockIcon className="h-5 w-5" />
          </span>
        ),
        description: '"Effortless Assistance at your Fingertips!"',
        subMenuItems: [
          {
            name: 'Modern Sign In',
            href: routes.auth.signIn1,
          },
          {
            name: 'Vintage Sign In',
            href: routes.auth.signIn2,
          },
          {
            name: 'Trendy Sign In',
            href: routes.auth.signIn3,
          },
          {
            name: 'Elegant Sign In',
            href: routes.auth.signIn4,
          },
          {
            name: 'Classic Sign In',
            href: routes.auth.signIn5,
          },
        ],
      },
      {
        name: 'Forgot Password',
        icon: (
          <span>
            <LockExclamationIcon className="h-5 w-5" />
          </span>
        ),
        description:
          '"Streamline Shipments: Discover Efficiency with our Logistics!"',
        subMenuItems: [
          {
            name: 'Modern Forgot Password',
            href: routes.auth.forgotPassword1,
          },
          {
            name: 'Vintage Forgot Password',
            href: routes.auth.forgotPassword2,
          },
          {
            name: 'Trendy Forgot Password',
            href: routes.auth.forgotPassword3,
          },
          {
            name: 'Elegant Forgot Password',
            href: routes.auth.forgotPassword4,
          },
          {
            name: 'Classic Forgot Password',
            href: routes.auth.forgotPassword5,
          },
        ],
      },
      {
        name: 'OTP Pages',
        icon: (
          <span>
            <LockWildCardIcon className="h-5 w-5" />
          </span>
        ),
        description:
          '"Organize, Access, and Share: Simplify your Digital World with us!"',
        subMenuItems: [
          {
            name: 'Modern OTP Page',
            href: routes.auth.otp1,
          },
          {
            name: 'Vintage OTP Page',
            href: routes.auth.otp2,
          },
          {
            name: 'Trendy OTP Page',
            href: routes.auth.otp3,
          },
          {
            name: 'Elegant OTP Page',
            href: routes.auth.otp4,
          },
          {
            name: 'Classic OTP Page',
            href: routes.auth.otp5,
          },
        ],
      },
    ],
  },
];
