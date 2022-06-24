import { withSessionRoute } from 'system/lib/withSession';
import DefaultApi from 'apis/restful';
import endpoints from 'apis/utils/constants/endpoints';

async function loginRoute(req: any, res: any) {
  const { data, error } = await DefaultApi.OpenRoute.postRoute(
    endpoints.LOGIN_ENDPOINT,
    req.body,
  );
  req.session.user = data?.user;
  req.session.token = data?.token;
  await req.session.save();
  if (error) {
    return res.status(404).json({
      error,
    });
  }
  return res.status(200).json({
    data,
  });
}

export default withSessionRoute(loginRoute);
