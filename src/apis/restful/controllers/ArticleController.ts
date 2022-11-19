import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import ArticleServices from 'apis/services/articleServices';
import removeFile, { parseForm } from 'apis/utils/libForm';
import { paginate } from 'apis/utils/pagnation';
import DB from 'apis/database';

const { Articles: Article, Material } = DB;

export default class ArticleController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const material = Number(req.query.material) > 0;
    try {
      const materialParams = [];
      if (material) {
        materialParams.push(
          'category_id',
          'subcategory_id',
          'slug',
          'material',
        );
      }
      const query: any = {};
      if (material && !Number(id)) {
        query.slug = id;
      } else {
        query.id = id;
      }
      return Response.success(res, 200, {
        message: 'Articles fetched successfuly',
        data: await ArticleServices.findOne(
          query,
          [
            'id',
            'title',
            'image',
            'author_id',
            'text',
            'views',
            ...materialParams,
            'createdAt',
            'updatedAt',
          ],
          ['firstname', 'lastname', 'profile_image'],
          material,
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

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      let { page = 1, limit = 10, cat, sub } = req.query;
      const material = Number(req.query.material) > 0;
      const materialParams = [];
      if (material) {
        materialParams.push(
          'category_id',
          'subcategory_id',
          'slug',
          'material',
        );
      }
      page = Number(page);
      limit = Number(limit);
      const where: any = {};
      if (Number(cat)) {
        where.category_id = cat;
      }
      if (Number(sub)) {
        where.subcategory_id = sub;
      }
      const offset = (page - 1) * limit;
      const { rows, count } = await ArticleServices.findAndCountAll(
        where,
        [
          'id',
          'title',
          'image',
          'author_id',
          'views',
          ...materialParams,
          'createdAt',
          'updatedAt',
        ],
        ['firstname', 'lastname', 'profile_image'],
        limit,
        offset,
        material,
      );
      const pagination = paginate(page, count, rows, limit);

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
    const material = Boolean(req.query.material);
    try {
      const { fields, files } = await parseForm(req);
      console.log(fields.text);
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
        data: await ArticleServices.create(payload, material),
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message,
      });
    }
  }

  static async update(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const material = Number(req.query.material) > 0;
    try {
      const ArticleModel = !material ? Article : Material;
      const item = await ArticleModel.findByPk(`${id}`);

      if (!item?.toJSON()) {
        if (material) {
          const foundArticle = await Article.findByPk(`${id}`);
          if (foundArticle) {
            const { fields, files } = await parseForm(req);
            const file = files.media;
            let images: string | string[] | null = null;
            if (file) {
              images = Array.isArray(file)
                ? file.map(f => `/uploads/${f.newFilename}`)
                : `/uploads/${file.newFilename}`;
            }
            const data = await Material.create({
              ...fields,
              image: images || foundArticle.toJSON()?.image,
            });

            foundArticle.destroy();
            return Response.success(res, 200, {
              message: 'Article updated successfuly',
              data,
            });
          }
        }

        return Response.error(res, 404, {
          message: 'Article is not found',
        });
      }

      const { fields, files } = await parseForm(req);
      // if (!files.media) {
      //   return Response.error(res, 500, {
      //     message: 'Please upload image',
      //   });
      // }

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
    const material = Number(req.query.material) > 0;
    try {
      const item = await ArticleServices.findByPk(
        Number(id),
        material,
      );
      if (!item) {
        return Response.error(res, 409, {
          message: 'Article is not found',
        });
      }
      removeFile(item.toJSON()?.image);
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
