import type { NextApiRequest, NextApiResponse } from 'next';
import ContactControllers from 'apis/restful/controllers/contactControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        ContactControllers.create(req,res)
    }else if(req.method === 'GET'){
        ContactControllers.getAll(req,res)
    }
    else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  