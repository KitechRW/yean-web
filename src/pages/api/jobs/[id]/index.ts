import withRoles from 'apis/middlewares/auth';
import JobController from 'apis/restful/controllers/JobController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return JobController.getOne(req, res);
    case 'PATCH':
      return JobController.update(req, res);
    case 'DELETE':
      return JobController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export default withSessionRoute(
  withRoles(handler, ['admin'], ['PATCH', 'DELETE']),
);
