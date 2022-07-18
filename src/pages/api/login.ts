import { withSessionRoute } from 'system/lib/withSession';
import DefaultApi from 'apis/restful';
import endpoints from 'apis/utils/constants/endpoints';
import sequelize from 'system/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'


async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
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
