import CategoryController from 'apis/restful/controllers/CategoryController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return CategoryController.getOne(req, res);
    case 'PATCH':
      return CategoryController.update(req, res);
    case 'DELETE':
      return CategoryController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
