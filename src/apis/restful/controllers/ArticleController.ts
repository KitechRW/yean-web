import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import ArticleServices from 'apis/services/articleServices';
import removeFile, { parseForm } from 'apis/utils/libForm';
import { paginate } from 'apis/utils/pagnation';
import DB from 'apis/database';
import { Op, WhereOptions } from 'sequelize';

const { Articles: Article } = DB;

export default class ArticleController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const where: WhereOptions<any> = {
        [Op.or]: [[{ id: `${id}` }], [{ slug: `${id}` }]],
      };
      return Response.success(res, 200, {
        message: 'Articles fetched successfuly',
        data: await ArticleServices.findOne(
          where,
          [
            'id',
            'title',
            'image',
            'author_id',
            'category_id',
            'slug',
            'type',
            'text',
            'views',
            'updatedAt',
            'createdAt',
          ],
          ['firstname', 'lastname', 'profile_image'],
        ),
      });
    } catch (error: any) {
      console.log(error);
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }

  static async UpdateViews(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const { id } = req.query;
    const { views }: any = req.body;
    try {
      const result = await Article.update(
        { views },
        { where: { id } },
      );
      if (result[0] === 0) {
        return res.status(404);
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      let { page = 1, limit = 10, cat, status } = req.query;
      page = Number(page);
      limit = Number(limit);
      const where: WhereOptions<any> = {};
      if (cat) {
        where.category_id = String(cat);
      }
      if (status) {
        where.status = String(status);
      }
      const offset = (page - 1) * limit;
      const { rows, count } = await ArticleServices.findAndCountAll(
        where,
        [
          'id',
          'title',
          'image',
          'views',
          'status',
          'slug',
          'is_slide',
          'type',
          'text',
          'category_id',
          'author_id',
          'createdAt',
          'updatedAt',
        ],
        ['firstname', 'lastname', 'profile_image', 'email'],
        limit,
        offset,
      );
      const pagination = paginate(page, count, rows, limit);

      return Response.success(res, 200, {
        message: 'Articles fetched successfully',
        pagination,
        data: rows,
      });
    } catch (error: any) {
      console.log(error);
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
        data: await ArticleServices.create(payload),
      });
    } catch (error: any) {
      console.log(error);
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message,
      });
    }
  }

  static async update(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const ArticleModel = Article;
      const item = await ArticleModel.findByPk(`${id}`);

      if (!item) {
        return Response.error(res, 409, {
          message: 'Article is not found',
        });
      }

      const { fields, files } = await parseForm(req);

      const file = files.media;
      let images: string | string[] | null = null;
      if (file) {
        images = Array.isArray(file)
          ? file.map(f => `/uploads/${f.newFilename}`)
          : `/uploads/${file.newFilename}`;
      }

      if (images) {
        removeFile(item.toJSON()?.image);
      }

      const payload = {
        ...fields,
        image: images || item.toJSON()?.image,
      };

      item.set(payload);
      const data = await item.save();
      return Response.success(res, 200, {
        message: 'Article updated successfully',
        data: data.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const material = Number(req.query.material) > 0;
    try {
      const item = await ArticleServices.findByPk(
        Number(id),
        //@ts-ignore
        material,
      );
      if (!item) {
        return Response.error(res, 409, {
          message: 'Article is not found',
        });
      }
      removeFile(item.toJSON()?.image);
      return Response.success(res, 200, {
        message: 'Articles deleted successfully',
        data: await item.destroy(),
      });
    } catch (error) {
      console.log(error);
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
