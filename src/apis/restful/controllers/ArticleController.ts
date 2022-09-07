import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import Article from 'apis/database/models/article.model';
import ArticleServices from 'apis/services/articleServices';
import removeFile, { parseForm } from 'apis/utils/libForm';
import { paginate } from 'apis/utils/pagnation';

export default class ArticleController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'Articles fetched successfuly',
        data: await ArticleServices.findOne(
          { id },
          ['id', 'title', 'image', 'author_id', 'text', 'category', 'createdAt'],
          ['firstname', 'lastname', 'phone', 'gender'],
        ),
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      let { page = 1, limit = 10, cat } = req.query;
      page = Number(page);
      limit = Number(limit);
      const where: any = {};
      if (Number(cat)) {
        where.category = cat;
      }
      const offset = (page - 1) * limit;
      const { rows, count } = await ArticleServices.findAndCountAll(
        where,
        ['id', 'title', 'image', 'author_id', 'category'],
        ['firstname', 'lastname', 'phone', 'gender'],
        limit,
        offset,
      );
      const pagination = paginate(page, count, rows, limit);

      if (offset >= count) {
        return Response.success(res, 404, {
          message: 'page not found',
        });
      }

      return Response.success(res, 200, {
        message: 'Articles fetched successfuly',
        pagination,
        data: rows,
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }

  static async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { fields, files } = await parseForm(req);
      if (!files.media) {
        return Response.error(res, 500, {
          message: 'Please upload image',
        });
      }

      const file = files.media;
      let images = Array.isArray(file)
        ? file.map(f => `/uploads/${f.newFilename}`)
        : `/uploads/${file.newFilename}`;

      const payload = {
        ...fields,
        image: images,
      };
      return Response.success(res, 200, {
        message: 'Article created successfuly',
        data: await Article.create(payload),
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
      const item = await Article.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'Article is not found',
        });
      }

      const { fields, files } = await parseForm(req);
      if (!files.media) {
        return Response.error(res, 500, {
          message: 'Please upload image',
        });
      }

      const file = files.media;
      let images = Array.isArray(file)
        ? file.map(f => `/uploads/${f.newFilename}`)
        : `/uploads/${file.newFilename}`;

      if (images) {
        removeFile(item.toJSON()?.image);
      }

      const payload = {
        ...fields,
        image: images,
      };

      item.set(payload);

      return Response.success(res, 200, {
        message: 'Article updated successfuly',
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
      const item = await Article.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'Article is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Articles deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
