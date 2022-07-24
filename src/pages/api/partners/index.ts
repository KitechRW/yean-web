import PartnerController from 'apis/restful/controllers/PartnerController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
  }
  switch (req.method) {
    case 'POST':
      return PartnerController.create(req, res);
    case 'GET':
      return PartnerController.getPartners(req, res);
    case 'PATCH':
      return PartnerController.edit(req, res);
    default:
      return Response.error(res, 405, {
        message: 'method not allowed',
      });
  }
}
