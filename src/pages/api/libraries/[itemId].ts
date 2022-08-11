import type { NextApiRequest, NextApiResponse } from 'next';
import LibraryControllers from 'apis/restful/controllers/LibraryControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   if(req.method === 'GET'){
        LibraryControllers.getOneItem(req,res)
    } 
    else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  