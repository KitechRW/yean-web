import SubCategoryController from 'apis/restful/controllers/SubCategoryController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return SubCategoryController.getAll(req, res);
    case 'POST':
      return SubCategoryController.create(req, res);
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
