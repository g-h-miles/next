import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartFill,
  PiHeadsetFill,
  PiPackageFill,
  PiChartBarFill,
  PiFileImageFill,
  PiCurrencyDollarFill,
  PiSquaresFourFill,
  PiGridFourFill,
  PiFeatherFill,
  PiChartLineUpFill,
  // PiImageFill,
  PiMapPinLineFill,
  PiUserGearFill,
  PiBellSimpleRingingFill,
  PiUserFill,
  PiEnvelopeSimpleOpenFill,
  PiStepsFill,
  PiCreditCardFill,
  PiStackFill,
  PiTableFill,
  PiBrowserFill,
  PiBoundingBoxFill,
  PiHourglassSimpleFill,
  PiUserCircleFill,
  PiShootingStarFill,
  PiRocketLaunchFill,
  PiFolderLockFill,
  PiBinocularsFill,
  PiHammerFill,
  PiNoteBlankFill,
  PiUserPlusFill,
  PiShieldCheckFill,
  PiLockKeyFill,
  PiChatCenteredDotsFill,
  PiMagicWandFill,
  PiCalendarPlusFill,
  PiMagicWandDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'File Manager',
    href: '/',
    // href: routes.file.dashboard,
    icon: <PiFileImageFill />,
  },
  {
    name: 'Logistics',
    href: routes.logistics.dashboard,
    icon: <PiPackageFill />,
  },
  {
    name: 'E-Commerce',
    href: routes.eCommerce.dashboard,
    icon: <PiShoppingCartFill />,
  },
  {
    name: 'Analytics',
    href: routes.analytics,
    icon: <PiChartBarFill />,
  },
  {
    name: 'Support',
    href: routes.support.dashboard,
    icon: <PiHeadsetFill />,
  },
  // label start
  {
    name: 'Apps Kit',
  },
  // label end
  {
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCartFill />,
    dropdownItems: [
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
    href: '#',
    icon: <PiHeadsetFill />,
    dropdownItems: [
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
    href: '#',
    icon: <PiCurrencyDollarFill />,
    dropdownItems: [
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
    href: '#',
    icon: <PiPackageFill />,
    dropdownItems: [
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
    href: routes.file.manager,
    icon: <PiFileImageFill />,
  },
  {
    name: 'Event Calendar',
    href: routes.eventCalendar,
    icon: <PiCalendarPlusFill />,
  },
  {
    name: 'Roles & Permissions',
    href: routes.rolesPermissions,
    icon: <PiFolderLockFill />,
  },
  {
    name: 'Point of Sale',
    href: routes.pos.index,
    icon: <PiCreditCardFill />,
  },
  // label start
  {
    name: 'Widgets',
  },
  // label end
  {
    name: 'Cards',
    href: routes.widgets.cards,
    icon: <PiSquaresFourFill />,
  },
  {
    name: 'Icons',
    href: routes.widgets.icons,
    icon: <PiFeatherFill />,
  },
  {
    name: 'Charts',
    href: routes.widgets.charts,
    icon: <PiChartLineUpFill />,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  //   icon: <PiImageFill />,
  // },
  {
    name: 'Maps',
    href: routes.widgets.maps,
    icon: <PiMapPinLineFill />,
  },
  // label start
  {
    name: 'Forms',
  },
  // label end
  {
    name: 'Account Settings',
    href: routes.forms.profileSettings,
    icon: <PiUserGearFill />,
  },
  {
    name: 'Notification Preference',
    href: routes.forms.notificationPreference,
    icon: <PiBellSimpleRingingFill />,
  },
  {
    name: 'Personal Information',
    href: routes.forms.personalInformation,
    icon: <PiUserFill />,
  },
  {
    name: 'Newsletter',
    href: routes.forms.newsletter,
    icon: <PiEnvelopeSimpleOpenFill />,
  },
  {
    name: 'Multi Step',
    href: routes.multiStep,
    icon: <PiStepsFill />,
  },
  {
    name: 'Payment Checkout',
    href: routes.eCommerce.checkout,
    icon: <PiCreditCardFill />,
  },
  // label start
  {
    name: 'Tables',
  },
  // label end
  {
    name: 'Basic',
    href: routes.tables.basic,
    icon: <PiGridFourFill />,
  },
  {
    name: 'Collapsible',
    href: routes.tables.collapsible,
    icon: <PiStackFill />,
  },
  {
    name: 'Enhanced',
    href: routes.tables.enhanced,
    icon: <PiTableFill />,
  },
  {
    name: 'Sticky Header',
    href: routes.tables.stickyHeader,
    icon: <PiBrowserFill />,
  },
  {
    name: 'Pagination',
    href: routes.tables.pagination,
    icon: <PiBoundingBoxFill />,
  },
  {
    name: 'Search',
    href: routes.tables.search,
    icon: <PiHourglassSimpleFill />,
  },
  // label start
  {
    name: 'Pages',
  },
  // label end
  {
    name: 'Search & Filters',
    href: '#',
    icon: <PiMagicWandDuotone />,
    dropdownItems: [
      {
        name: 'Real Estate',
        href: routes.search.realEstate,
      },
      {
        name: 'Flight Booking',
        href: routes.search.flightAndHotel,
      },
      {
        name: 'NFT',
        href: routes.search.nft,
      },
    ],
  },
  {
    name: 'Profile',
    href: routes.profile,
    icon: <PiUserCircleFill />,
  },
  {
    name: 'Welcome',
    href: routes.welcome,
    icon: <PiShootingStarFill />,
  },
  {
    name: 'Coming soon',
    href: routes.comingSoon,
    icon: <PiRocketLaunchFill />,
  },
  {
    name: 'Access Denied',
    href: routes.accessDenied,
    icon: <PiFolderLockFill />,
  },
  {
    name: 'Not Found',
    href: routes.notFound,
    icon: <PiBinocularsFill />,
  },
  {
    name: 'Maintenance',
    href: routes.maintenance,
    icon: <PiHammerFill />,
  },
  {
    name: 'Blank',
    href: routes.blank,
    icon: <PiNoteBlankFill />,
  },

  // label start
  {
    name: 'Authentication',
  },
  // label end
  {
    name: 'Sign Up',
    href: '#',
    icon: <PiUserPlusFill />,
    dropdownItems: [
      {
        name: 'Modern Sign up',
        href: routes.auth.signUp1,
      },
      {
        name: 'Vintage Sign up',
        href: routes.auth.signUp2,
      },
      {
        name: 'Trendy Sign up',
        href: routes.auth.signUp3,
      },
      {
        name: 'Elegant Sign up',
        href: routes.auth.signUp4,
      },
      {
        name: 'Classic Sign up',
        href: routes.auth.signUp5,
      },
    ],
  },
  {
    name: 'Sign In',
    href: '#',
    icon: <PiShieldCheckFill />,
    dropdownItems: [
      {
        name: 'Modern Sign in',
        href: routes.auth.signIn1,
      },
      {
        name: 'Vintage Sign in',
        href: routes.auth.signIn2,
      },
      {
        name: 'Trendy Sign in',
        href: routes.auth.signIn3,
      },
      {
        name: 'Elegant Sign in',
        href: routes.auth.signIn4,
      },
      {
        name: 'Classic Sign in',
        href: routes.auth.signIn5,
      },
    ],
  },
  {
    name: 'Forgot Password',
    href: '#',
    icon: <PiLockKeyFill />,
    dropdownItems: [
      {
        name: 'Modern Forgot password',
        href: routes.auth.forgotPassword1,
      },
      {
        name: 'Vintage Forgot password',
        href: routes.auth.forgotPassword2,
      },
      {
        name: 'Trendy Forgot password',
        href: routes.auth.forgotPassword3,
      },
      {
        name: 'Elegant Forgot password',
        href: routes.auth.forgotPassword4,
      },
      {
        name: 'Classic Forgot password',
        href: routes.auth.forgotPassword5,
      },
    ],
  },
  {
    name: 'OTP Pages',
    href: '#',
    icon: <PiChatCenteredDotsFill />,
    dropdownItems: [
      {
        name: 'Modern OTP page',
        href: routes.auth.otp1,
      },
      {
        name: 'Vintage OTP page',
        href: routes.auth.otp2,
      },
      {
        name: 'Trendy OTP page',
        href: routes.auth.otp3,
      },
      {
        name: 'Elegant OTP page',
        href: routes.auth.otp4,
      },
      {
        name: 'Classic OTP page',
        href: routes.auth.otp5,
      },
    ],
  },
];
