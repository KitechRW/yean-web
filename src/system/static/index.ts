import {
  Home,
  Grass,
  ShoppingBasket,
  LocalLibrary,
  Handshake,
  Dashboard,
  Feed,
  Extension,
  Pageview,
  Category,
  Work,
  Group, UploadOutlined,
} from '@mui/icons-material';

export const navs = [
  {
    path: '/about',
    label: 'About us',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/contact',
    label: 'Contact us',
  },
  {
    path: '/login',
    label: 'Login',
  },
];

export const headerNavs = [
  {
    icon: Home,
    path: '/',
    label: 'Home',
    hasSub: false,
  },
  {
    icon: Grass,
    path: '/doings',
    label: 'What we do?',
    hasSub: true,
  },
  {
    icon: ShoppingBasket,
    path: '/farmer-platform',
    label: 'Farmer Platform',
    hasSub: false,
  },
  {
    icon: LocalLibrary,
    path: '/library',
    label: 'Library',
    hasSub: false,
  },
  {
    icon: Handshake,
    path: '/partner',
    label: 'Partner with Us',
    hasSub: false,
  },
];

export const memberNavs = [
  {
    icon: Dashboard,
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: UploadOutlined,
    label: 'Upload Files',
    path: '/admin/FileUpload',
  },
  {
    icon: Feed,
    label: 'Articles',
    path: '/dashboard/articles',
  },
];

export const adminNavs = [
  {
    icon: Dashboard,
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: Category,
    label: 'Categories',
    path: '/dashboard/categories',
  },
  {
    icon: Feed,
    label: 'Authors',
    path: '/dashboard/authors',
  },
  {
    icon: Feed,
    label: 'Articles',
    path: '/dashboard/articles',
  },
  {
    icon: LocalLibrary,
    label: 'Library',
    path: '/dashboard/libraries',
  },
  {
    icon: Extension,
    label: 'Services',
    path: '/dashboard/services',
  },
  {
    icon: Handshake,
    label: 'Partners',
    path: '/dashboard/partners',
  },
  {
    icon: Pageview,
    label: 'Home Page',
    path: '/dashboard/home',
  },
  {
    icon: Pageview,
    label: 'Innovation center',
    path: '/dashboard/innovation-center',
  },
  {
    icon: Pageview,
    label: 'About us',
    path: '/dashboard/about-us',
  },
  {
    icon: Pageview,
    label: 'Team',
    path: '/dashboard/team',
  },
  {
    icon: Work,
    label: 'Jobs',
    path: '/dashboard/job',
  },
  {
    icon: Work,
    label: 'Projects',
    path: '/dashboard/projects',
  },
  {
    icon: Group,
    label: 'Users',
    path: '/dashboard/users',
    onlyAdmin: true,
  },
  {
    icon: Group,
    label: 'Subscribers',
    path: '/dashboard/subscribers',
  },
];
