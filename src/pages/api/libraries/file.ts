import type { NextApiRequest, NextApiResponse } from 'next';
import LibraryController from 'apis/restful/controllers/LibraryController';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        LibraryController.readFile(req,res)
    } else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  