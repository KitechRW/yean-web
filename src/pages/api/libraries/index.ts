import type { NextApiRequest, NextApiResponse } from 'next';
import LibraryControllers from 'apis/restful/controllers/LibraryControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
    LibraryControllers.create(req,res)
    }else if(req.method === 'GET'){
        LibraryControllers.getAllItems(req,res)
    } 
    else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  