import PartnerController from 'apis/restful/controllers/PartnerController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return PartnerController.getOne(req, res);
    case 'PATCH':
      return PartnerController.update(req, res);
    case 'DELETE':
      return PartnerController.delete(req, res);
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
