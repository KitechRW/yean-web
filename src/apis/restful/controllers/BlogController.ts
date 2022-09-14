import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import { paginate } from 'apis/utils/pagnation';
import DB from 'apis/database';

const { Articles: Article } = DB;

export default class BlogController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'articles fetched successfuly',
        articles: await Article.findByPk(`${id}`),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async getArticles(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    try {
      let {page = 1, limit = 3} = req.query ;
      page=Number(page);
      limit=Number(limit);
      const offset = (page - 1) * limit
      const { rows, count } = await Article.findAndCountAll({
          limit, offset,
          order: [
              ['id', 'asc']
          ]
      });
      const pagination = paginate(page, count, rows, limit);

      if (offset >= count) {
          return res.status(404).json({
              message: "page not found"
          })
      }
      return Response.success(res, 200, {
        message: 'articles fetched successfuly',
        pagination,
        count,
        articles: rows,
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      return Response.success(res, 200, {
        message: 'article created successfuly',
        artice: await Article.create(req.body),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const article = await Article.findByPk(`${id}`);
      if (!article) {
        return Response.error(res, 409, {
          message: 'Article is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'articles deleted successfuly',
        article: await Article.destroy({ where: { id } }),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
