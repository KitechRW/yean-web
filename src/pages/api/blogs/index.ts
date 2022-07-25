import BlogController from 'apis/restful/controllers/BlogController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    return BlogController.getArticles(req, res);
  }
  if (req.method === 'POST') {
    return BlogController.create(req, res);
  }
  switch (req.method) {
    case 'GET':
      if (req.query.id) {
        return BlogController.getOne(req, res);
      }
      return BlogController.getArticles(req, res);

    case 'DELETE':
      return BlogController.delete(req, res);

    case 'PATCH':
      return BlogController.delete(req, res);

    case 'POST':
      return BlogController.create(req, res);

    default:
      return Response.error(res, 405, {
        message: 'method not allowed',
      });
  }
}
