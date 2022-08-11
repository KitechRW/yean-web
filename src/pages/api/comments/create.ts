import type { NextApiRequest, NextApiResponse } from 'next';
import CommentControllers from 'apis/restful/controllers/CommentControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      return CommentControllers.create(req,res)
    } else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  