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
  Group, UploadFileTwoTone, UploadOutlined,
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

export const adminNavs = [
  {
    icon: Dashboard,
    label: 'Dashboard',
    path: '/admin',
  },
  {
    icon: Category,
    label: 'Categories',
    path: '/admin/categories',
  },
  {
    icon: Feed,
    label: 'Authors',
    path: '/admin/authors',
  },
  {
    icon: UploadOutlined,
    label: 'Upload Files',
    path: '/admin/FileUpload',
  },
  {
    icon: Feed,
    label: 'Articles',
    path: '/admin/articles',
  },
  {
    icon: LocalLibrary,
    label: 'Library',
    path: '/admin/libraries',
  },
  {
    icon: Extension,
    label: 'Services',
    path: '/admin/services',
  },
  {
    icon: Handshake,
    label: 'Partners',
    path: '/admin/partners',
  },
  {
    icon: Pageview,
    label: 'Home Page',
    path: '/admin/home',
  },
  {
    icon: Pageview,
    label: 'Innovation center',
    path: '/admin/innovation-center',
  },
  {
    icon: Pageview,
    label: 'About us',
    path: '/admin/about-us',
  },
  {
    icon: Pageview,
    label: 'Team',
    path: '/admin/team',
  },
  {
    icon: Work,
    label: 'Jobs',
    path: '/admin/job',
  },
  {
    icon: Work,
    label: 'Projects',
    path: '/admin/projects',
  },
  {
    icon: Group,
    label: 'Users',
    path: '/admin/users',
    onlyAdmin: true,
  },
  {
    icon: Group,
    label: 'Subscribers',
    path: '/admin/subscribers',
  },
];
