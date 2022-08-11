import type { NextApiRequest, NextApiResponse } from 'next';
import LikeControllers from 'apis/restful/controllers/LikeControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      return LikeControllers.likeAndUnlike(req,res)
    //   CommentControllers.create(req,res)
    } else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  