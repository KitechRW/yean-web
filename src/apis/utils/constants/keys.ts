const Keys = {
  DEFAULT_API: process.env.NEXT_PUBLIC_DEFAULT_API,
  DEFAULT_JWT_SECRET: process.env.DEFAULT_JWT_SECRET,
  REDIRECT_TO: process.env.NEXT_PUBLIC_REDIRECT_TO || 'lkslddklskl290309023',
  USER_INFO: process.env.NEXT_PUBLIC_USER_INFO || 'klsklksldklskdlskdlkdslklksl',
  REACT_APP_ACCESS_TOKEN:
    process.env.NEXT_PUBLIC_REACT_APP_ACCESS_TOKEN ||
    '092039,,lUYioiojsdklsd',
  ISSERVER: typeof window === 'undefined',
  SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  HOST: process.env.NEXT_PUBLIC_HOST,
};

export default Keys;
