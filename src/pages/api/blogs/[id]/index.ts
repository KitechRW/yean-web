import BlogController from 'apis/restful/controllers/BlogController';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'method not allowed' });
  }
  return BlogController.delete(req, res);
}
