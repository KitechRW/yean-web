import {
  withIronSessionApiRoute,
  withIronSessionSsr,
} from 'iron-session/next';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import { ironOptions } from './config';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
      email: string;
      type: string;
    };
    token: string;
    data: any;
    error: any;
  }
}

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, ironOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
>(
  handler: (
    context: GetServerSidePropsContext,
  ) =>
    | GetServerSidePropsResult<P>
    | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, ironOptions);
}
