import Article from 'apis/database/models/article.model';
import Job from 'apis/database/models/jobs.model';
import Library from 'apis/database/models/library.model';
import Partner from 'apis/database/models/partner.model';
import User from 'apis/database/models/user.model';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';

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
