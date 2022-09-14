import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import ArticleServices from 'apis/services/articleServices';
import DB from 'apis/database';

const { Articles: Article, Landings: Landing } = DB;
export default class LandingController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      let found = await Landing.findByPk(`${id}`);
      if (!found) {
        const landings = await Landing.findAll();
        if (landings?.length) {
          found = landings[0];
        } else {
          return Response.error(res, 404, {
            message: 'page not found',
          });
        }
      }
      const { slideIds } = found?.toJSON() || {};
      const ids = slideIds?.split(',');
      if (!ids?.length) {
        return Response.error(res, 409, {
          message: 'No slides',
        });
      }
      const slides = await Article.findAll({
        where: { id: ids },
      });

      return Response.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: { slideIds: ids, slides },
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message,
      });
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      return Response.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: await Landing.findAndCountAll(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async getSomeArticles(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    try {
      let attributes = req.query.attributes as string;
      const articles = await ArticleServices.findAndCountAll(
        undefined,
        attributes?.split(','),
      );
      return Response.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: articles.rows.slice(0, 16),
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message,
      });
    }
  }

  static async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      return Response.success(res, 200, {
        message: 'Landing created successfuly',
        data: await Landing.create(req.body),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async update(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      let item = await Landing.findByPk(`${id}`);
      const payload = {
        ...req.body,
        slideIds: req.body.slideIds?.toString(),
      };
      if (!item?.toJSON()) {
        item = await Landing.create(payload);
      } else {
        item.set({
          ...payload,
          slideIds: payload.slideIds || item?.toJSON()?.slideIds,
        });
      }
      return Response.success(res, 200, {
        message: 'Landing updated successfuly',
        data: await item.save(),
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
      const item = await Landing.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'Landing is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Landings deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
