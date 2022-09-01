import SubCategoryController from 'apis/restful/controllers/SubCategoryController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return SubCategoryController.getOne(req, res);
    case 'PATCH':
      return SubCategoryController.update(req, res);
    case 'DELETE':
      return SubCategoryController.delete(req, res);
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
