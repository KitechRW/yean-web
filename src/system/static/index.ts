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
    path: '/market',
    label: 'Farmers Market',
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
    label: 'Articles',
    path: '/admin/articles',
  },
  {
    icon: Extension,
    label: 'Extension Materials',
    path: '/admin/extension-materials',
  },
  {
    icon: Handshake,
    label: 'Partners',
    path: '/admin/partners',
  },
  {
    icon: Pageview,
    label: 'Home page',
    path: '/admin/edit-home-page',
  },
];
