import PartnerController from 'apis/restful/controllers/PartnerController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      return PartnerController.request(req, res);
    default:
      return Response.error(res, 405, {
        message: 'method is not allowed',
      });
  }
}
