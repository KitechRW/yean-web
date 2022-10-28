import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import removeFile, { parseForm } from 'apis/utils/libForm';
import DB from 'apis/database';

const { SubCategories: SubCategory } = DB;

export default class SubCategoryController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'SubCategorys fetched successfuly',
        data: await SubCategory.findByPk(`${id}`),
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
        message: 'SubCategorys fetched successfuly',
        data: await SubCategory.findAndCountAll(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
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
        message: 'Subcategory created successfuly',
        data: await SubCategory.create(payload),
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
      const item = await SubCategory.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'SubCategory is not found',
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

      return Response.success(res, 200, {
        message: 'Subcategory updated successfuly',
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
      const item = await SubCategory.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'SubCategory is not found',
        });
      }
      removeFile(item.toJSON()?.image);
      return Response.success(res, 200, {
        message: 'Subcategorys deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
