import { withSessionRoute } from 'system/lib/withSession';

async function logoutRoute(req: any, res: any) {
  await req.session.destroy();
  res.send('Logged out');
}

export default withSessionRoute(logoutRoute);
