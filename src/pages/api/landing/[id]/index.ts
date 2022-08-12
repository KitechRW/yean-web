import LandingController from 'apis/restful/controllers/LandingController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return LandingController.getOne(req, res);
    case 'PATCH':
      return LandingController.update(req, res);
    case 'DELETE':
      return LandingController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}
