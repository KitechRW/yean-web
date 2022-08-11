import UserController from 'apis/restful/controllers/UserController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return UserController.getAll(req, res);
    case 'POST':
      return UserController.create(req, res);
    default:
      return Response.error(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
