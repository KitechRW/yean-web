import type { NextApiRequest, NextApiResponse } from 'next';
import AuthController from 'apis/restful/controllers/AuthController';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
      return AuthController.resetingPassword(req,res);
    } else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  