import withRoles from 'apis/middlewares/auth';
import LibraryController from 'apis/restful/controllers/LibraryController';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'system/lib/withSession';

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return LibraryController.getAll(req, res);
    case 'POST':
      return LibraryController.create(req, res);
    default:
      return Response.error(res, 405, {
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
