import {
  Home,
  Grass,
  ShoppingBasket,
  LocalLibrary,
  Handshake,
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
    path: '/home',
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
