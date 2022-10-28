import withRoles from 'apis/middlewares/auth';
import AuthorController from 'apis/restful/controllers/AuthorController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return AuthorController.getOne(req, res);
    case 'PATCH':
      return AuthorController.update(req, res);
    case 'DELETE':
      return AuthorController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export default withSessionRoute(
  withRoles(handler, ['admin'], ['POST', 'PATCH', 'DELETE', 'GET']),
);

export const config = {
  api: {
    bodyParser: false,
  },
};
