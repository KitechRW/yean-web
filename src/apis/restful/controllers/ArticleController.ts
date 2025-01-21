import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import ArticleServices from 'apis/services/articleServices';
import removeFile, { parseForm } from 'apis/utils/libForm';
import { paginate } from 'apis/utils/pagnation';
import DB from 'apis/database';


const { Articles: Article } = DB;

export default class ArticleController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const material = Number(req.query.material) > 0;
    try {
      const materialParams = [];
      if (material) {
        materialParams.push(
          'category_name',
          'subcategory_name',
          'slug',
          
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
            'author_name',
            'text',
            'views',
            ...materialParams,
            'createdAt',
            'updatedAt',
          ],
          ['firstname', 'lastname', 'profile_image'],
          //@ts-ignore
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
          'category_name',
          'subcategory_name',
          'slug',
          // 'material',
        );
      }
      page = Number(page);
      limit = Number(limit);
      const where: any = {};
      if (String(cat)) {
        where.category_name = cat;
      }
      if (String(sub)) {
        where.subcategory_name = sub;
      }
      const offset = (page - 1) * limit;
      const { rows, count } = await ArticleServices.findAndCountAll(
        (cat && sub) ? where : undefined,
        [
          'id',
          'title',
          'image',
          'author_name',
          'views',
          'status',
          'slide',
          'Type',
          'category_name',
          'subcategory_name',
          'createdAt',
          'updatedAt',
        ],
        ['firstname', 'lastname', 'profile_image'],
        limit,
        offset,
        // //@ts-ignore
        // material,
      );
      const pagination = paginate(page, count, rows, limit);
      console.log(rows);
      return Response.success(res, 200, {
        message: 'Articles fetched successfuly',
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
      const { fields, files} = await parseForm(req);
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
        //@ts-ignore
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
    const material = Number(req.query.material) > 0;
    try {
      const ArticleModel =  Article;
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
            const data = await Article.create({
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
        message: 'Articles deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      console.log(error)
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
