import BlogController from 'apis/restful/controllers/BlogController';
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
  return res.status(405).json({ message: 'method not allowed' });
}
