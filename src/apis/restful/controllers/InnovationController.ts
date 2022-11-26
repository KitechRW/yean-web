import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import removeFile, { parseForm } from 'apis/utils/libForm';
import DB from 'apis/database';

const { Innovation } = DB;

export default class InnovationController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'Innovations fetched successfuly',
        data: await Innovation.findByPk(`${id}`),
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
        message: 'Innovations fetched successfuly',
        data: await Innovation.findAll(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'Something went wrong',
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
        message: 'Innovation created successfuly',
        data: await Innovation.create(payload),
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
    try {
      const item = await Innovation.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'Innovation is not found',
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
        message: 'Innovation updated successfuly',
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
      const item = await Innovation.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'Innovation is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Innovations deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
