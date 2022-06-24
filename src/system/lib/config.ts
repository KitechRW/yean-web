import Keys from 'apis/utils/constants/keys';

export const ironOptions = {
  cookieName: 'myapp_cookiename',
  password: `${Keys.SESSION_PASSWORD}`,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};
