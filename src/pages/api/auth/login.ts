import { withSessionRoute } from 'system/lib/withSession';
import type { NextApiRequest, NextApiResponse } from 'next';
import AuthController from 'apis/restful/controllers/AuthController';

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).send('404 page not found');
  }
  return AuthController.signIn(req, res);
}

export default withSessionRoute(loginRoute);
