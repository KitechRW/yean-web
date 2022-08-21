import Keys from 'apis/utils/constants/keys';
import Secure from 'system/helpers/secureLs';

export const graphqlOption = (token = Secure.getToken()) => ({
  method: 'POST',
  url: `${process.env.HOST}/api/v1/graphql`,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export const publicGraphqlOption = () => ({
  method: 'POST',
  url: `${Keys.DEFAULT_API}/api/v1/graphql`,
  headers: {
    'content-type': 'application/json',
  },
});
