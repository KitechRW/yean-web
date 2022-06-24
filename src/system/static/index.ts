import DashboardIcon from 'modules/_partials/_drawable/icons/dashboardIcon';
import DesignIcon from 'modules/_partials/_drawable/icons/designIcon';
import OrderIcon from 'modules/_partials/_drawable/icons/orderIcon';
import ProductIcon from 'modules/_partials/_drawable/icons/productIcon';
import ReportIcon from 'modules/_partials/_drawable/icons/reportIcon';
import UserIcon from 'modules/_partials/_drawable/icons/userIcon';

export const navs = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    path: '/orders',
    label: 'Orders',
    icon: OrderIcon,
  },
  {
    path: '/products',
    label: 'Products',
    icon: ProductIcon,
  },
  {
    path: '/users',
    label: 'Users',
    icon: UserIcon,
  },
  {
    path: '/design',
    label: 'Design',
    icon: DesignIcon,
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: ReportIcon,
  },
];

export const totals = [
  {
    amount: '23 789',
    desc: 'Total orders',
    total: 20,
    bg: 'bg-[#C7F2FF]',
    icon: OrderIcon,
  },
  {
    amount: 'RWF 12 890,89',
    desc: 'This month',
    total: 20,
    bg: 'bg-[#FFE5EE]',
    icon: OrderIcon,
  },
  {
    amount: '23 789',
    desc: "Today's Orders",
    total: 25,
    bg: 'bg-[#C7F2FF]',
    icon: OrderIcon,
  },
  {
    amount: 'RWF 12 890,89',
    desc: 'Profit',
    total: 25,
    bg: 'bg-[#FFE5EE]',
    icon: OrderIcon,
  },
];

export const orderStatus = [
  {
    title: 'Total Order',
    count: 188,
    icon: '/assets/icons/cart.png',
  },
  {
    title: 'Order Pending',
    count: 38,
    icon: '/assets/icons/moreIcon.png',
  },
  {
    title: 'Order Processing',
    count: 66,
    icon: '/assets/icons/bikeIcon.png',
  },
  {
    title: 'Order Delivered',
    count: 68,
    icon: '/assets/icons/shipIcon.png',
  },
];
