import withRoles from 'apis/middlewares/auth';
import ProjectController from 'apis/restful/controllers/ProjectController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return ProjectController.getOne(req, res);
    case 'PATCH':
      return ProjectController.update(req, res);
    case 'DELETE':
      return ProjectController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export default withSessionRoute(
  withRoles(handler, ['admin'], ['POST', 'PATCH', 'DELETE']),
);

export const config = {
  api: {
    bodyParser: false,
  },
};
