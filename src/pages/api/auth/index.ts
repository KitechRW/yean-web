import type { NextApiRequest, NextApiResponse } from 'next';
import AuthController from 'apis/restful/controllers/AuthController';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return AuthController;
  }