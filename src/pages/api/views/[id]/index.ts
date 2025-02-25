import withRoles from 'apis/middlewares/auth';
import ArticleController from 'apis/restful/controllers/ArticleController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PATCH':
      return ArticleController.UpdateViews(req, res);
    default:
      return Response.error(res, 405, {
        message: 'method is not allowed',
      });
  }
}

// export default withSessionRoute(
//   withRoles(handler, ['admin','member' ], ['PATCH']),
// );

export const config = {
  api: {
    bodyParser: true,
  },
};
