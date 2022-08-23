import Article from 'apis/database/models/article.model';
import Library from 'apis/database/models/library.model';
import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { Op } from 'sequelize';

export default class SearchController {
  static async search(req: NextApiRequest, res: NextApiResponse) {
    const { search } = req.body;
    try {
      const articles = await Article.findAll({
        attributes: ['id', 'title', 'image'],
        where: {
          title: {
            [Op.like]: `%${search}%`,
          },
        },
      });
      const books = await Library.findAll({
        attributes: ['id', 'name', 'link'],
        where: {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
        raw: true,
      });
      return Response.success(res, 200, { articles, books });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message,
      });
    }
  }
}
