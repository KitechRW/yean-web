import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import DB from 'apis/database';

const {
  Articles: Article,
  Jobs: Job,
  Partners: Partner,
  Users: User,
  Libraries: Library,
} = DB;

export default class DashboardController {
  static async stat(req: NextApiRequest, res: NextApiResponse) {
    try {
      const articles = await Article.findAndCountAll();
      const users = await User.findAndCountAll();
      const books = await Library.findAndCountAll();
      const partners = await Partner.findAndCountAll();
      const jobs = await Job.findAndCountAll();
      return Response.success(res, 200, {
        message: 'App statistics',
        data: {
          articles: articles.count,
          users: users.count,
          books: books.count,
          partners: partners.count,
          jobs: jobs.count,
        },
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }
}
