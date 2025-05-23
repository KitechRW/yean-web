import withRoles from 'apis/middlewares/auth';
import ArticleController from 'apis/restful/controllers/ArticleController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return ArticleController.getOne(req, res);
    case 'PATCH':
      return ArticleController.update(req, res);
    case 'DELETE':
      return ArticleController.delete(req, res);
    default:
      return Response.success(res, 405, {
        message: 'method is not allowed',
      });
  }
}

export default withSessionRoute(
  withRoles(handler, ['admin', 'member'], ['PATCH', 'DELETE']),
);

export const config = {
  api: {
    bodyParser: false,
  },
};
