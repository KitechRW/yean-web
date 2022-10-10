import withRoles from 'apis/middlewares/auth';
import InnovationController from 'apis/restful/controllers/InnovationController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return InnovationController.getAll(req, res);
    case 'POST':
      return InnovationController.create(req, res);
    default:
      return Response.error(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export default withSessionRoute(
  withRoles(handler, ['admin'], ['POST']),
);

export const config = {
  api: {
    bodyParser: false,
  },
};
