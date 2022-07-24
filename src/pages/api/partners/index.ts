import PartnerController from 'apis/restful/controllers/PartnerController';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    return PartnerController.create(req, res);
  }
}
