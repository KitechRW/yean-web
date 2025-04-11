import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import removeFile, { parseForm } from 'apis/utils/libForm';
import { paginate } from 'apis/utils/pagnation';

import DB from 'apis/database';
import { Op, WhereOptions } from 'sequelize';

const { Users: User } = DB;

export default class UserController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'Users fetched successfuly',
        data: await User.findByPk(`${id}`),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    const attributes: string = req.query.attributes as string;
    try {
      let { page = 1, limit = 100000, search } = req.query;
      page = Number(page);
      limit = Number(limit);
      const offset = (page - 1) * limit;

      let where: WhereOptions<any> = {};

      if (search) {
        where = {
          ...where,
          [Op.or]: [
            { firstname: { [Op.like]: `%${search}%` } },
            { lastname: { [Op.like]: `%${search}%` } },
            { email: { [Op.like]: `%${search}%` } },
          ],
        };
      }

      const { count, rows } = await User.findAndCountAll({
        attributes: (attributes && attributes.split(',')) || [
          'id',
          'firstname',
          'lastname',
        ],
        order: [['id', 'DESC']],
        limit,
        offset,
        where,
      });

      const pagination = paginate(page, count, rows, limit);

      if (offset >= count) {
        return Response.success(res, 404, {
          message: 'page not found',
        });
      }

      return Response.success(res, 200, {
        message: 'Users fetched successfuly',
        data: rows,
        pagination,
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error.message,
      });
    }
  }

  static async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { fields, files } = await parseForm(req);
      if (!files.media) {
        return Response.error(res, 500, {
          message: 'Please upload profile',
        });
      }

      const file = files.media;
      let images = Array.isArray(file)
        ? file.map(f => `/uploads/${f.newFilename}`)
        : `/uploads/${file.newFilename}`;

      const payload = {
        ...fields,
        profile_image: images,
      };
      return Response.success(res, 200, {
        message: 'User created successfuly',
        data: await User.create(payload),
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
      const item = await User.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'User is not found',
        });
      }

      const { fields, files } = await parseForm(req);
      let images;
      if (files.media) {
        const file = files.media;
        images = Array.isArray(file)
          ? file.map(f => `/uploads/${f.newFilename}`)
          : `/uploads/${file.newFilename}`;

        if (images) {
          removeFile(item.toJSON()?.profile_image);
        }
      }

      const payload = {
        ...fields,
        profile_image: images || item.toJSON().profile_image,
      };

      item.set(payload);

      return Response.success(res, 200, {
        message: 'User updated successfuly',
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
      const item = await User.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'User is not found',
        });
      }
      removeFile(item.toJSON()?.profile_image);
      return Response.success(res, 200, {
        message: 'User deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
