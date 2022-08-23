import SearchController from 'apis/restful/controllers/SearchController';
import Response from 'apis/utils/helpers/response';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      return SearchController.search(req, res);
    default:
      return Response.error(res, 405, {
        message: 'method is not allowed',
      });
  }
}
