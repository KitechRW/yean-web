import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import User from 'apis/database/models/user.model';
import removeFile, { parseForm } from 'apis/utils/libForm';

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
      return Response.success(res, 200, {
        message: 'Users fetched successfuly',
        data: await User.findAndCountAll({
          attributes: attributes.split(',') || [
            'id',
            'firstname',
            'lastname',
          ],
        }),
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
        profile_image: images,
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
      return Response.success(res, 200, {
        message: 'Users deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
