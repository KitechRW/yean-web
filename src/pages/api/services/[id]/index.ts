import withRoles from 'apis/middlewares/auth';
import ServiceController from 'apis/restful/controllers/ServiceController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return ServiceController.getOne(req, res);
    case 'PATCH':
      return ServiceController.update(req, res);
    case 'DELETE':
      return ServiceController.delete(req, res);
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
