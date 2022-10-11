import withRoles from 'apis/middlewares/auth';
import TeamController from 'apis/restful/controllers/TeamController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return TeamController.getAll(req, res);
    case 'POST':
      return TeamController.create(req, res);
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
