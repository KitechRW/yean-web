import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import Landing from 'apis/database/models/landing.model';
import Article from 'apis/database/models/article.model';

export default class LandingController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const found = await Landing.findByPk(`${id}`);
      if (!found) {
        return Response.error(res, 404, {
          message: 'page not found',
        });
      }
      const { slideIds, articleIds, extensionIds } =
        found?.toJSON() || {};
      const articles = await Article.findAll({
        where: { id: JSON.parse(articleIds) },
      });
      const slides = await Article.findAll({
        where: { id: JSON.parse(slideIds) },
      });
      const extensions = await Article.findAll({
        where: { id: JSON.parse(extensionIds) },
      });

      return Response.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: { slides, articles, extensions },
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
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

      if (!item?.toJSON()) {
        item = await Landing.create(req.body);
      } else {
        item.set(req.body);
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
