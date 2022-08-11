import type { NextApiRequest, NextApiResponse } from 'next';
import SubscriberController from 'apis/restful/controllers/SubscriberControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        SubscriberController.subscribe(req,res)
    }else if(req.method === 'GET'){
        SubscriberController.getAllSubscribers(req,res)
    } else if(req.method === 'DELETE'){
        SubscriberController.unSubscrible(req,res)
    }
    else {
      // Handle any other HTTP method
      return res.status(404).send('404 page not found');
    }
}
  