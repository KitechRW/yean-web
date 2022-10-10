import withRoles from 'apis/middlewares/auth';
import InnovationController from 'apis/restful/controllers/InnovationController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return InnovationController.getOne(req, res);
    case 'PATCH':
      return InnovationController.update(req, res);
    case 'DELETE':
      return InnovationController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export default withSessionRoute(
  withRoles(handler, ['admin'], ['PATCH', 'DELETE']),
);

export const config = {
  api: {
    bodyParser: false,
  },
};
