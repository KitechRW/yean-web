import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import Library from 'apis/database/models/library.model';
import LibraryServices from 'apis/services/libraryServices';
import removeFile, { parseForm } from 'apis/utils/libForm';
import { paginate } from 'apis/utils/pagnation';

export default class LibraryController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'Librarys fetched successfuly',
        data: await Library.findByPk(`${id}`),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      let {page = 1, limit = 20} = req.query ;
      page=Number(page);
      limit=Number(limit);
      const offset = (page - 1) * limit
      const { rows, count } = await LibraryServices.findAndCountAll(undefined,undefined,limit, offset)
      const pagination = paginate(page, count, rows, limit);

      if (offset >= count) {
          return Response.success(res, 404, {
            message: 'page not found',
          });
      }
      return Response.success(res, 200, {
        message: 'Librarys fetched successfuly',
        pagination,
        data: { rows },
      });
    } catch (error) {
        console.log(error)
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
          message: 'Please upload book',
        });
      }

      const file = files.media;
      let images = Array.isArray(file)
        ? file.map(f => `/uploads/${f.newFilename}`)
        : `/uploads/${file.newFilename}`;

      const payload = {
        ...fields,
        link: images,
      };
      return Response.success(res, 200, {
        message: 'Library created successfuly',
        data: await Library.create(payload),
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
      const item = await Library.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'Library is not found',
        });
      }

      const { fields, files } = await parseForm(req);
      if (!files.media) {
        return Response.error(res, 500, {
          message: 'Please upload book',
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
        link: images,
      };

      item.set(payload);

      return Response.success(res, 200, {
        message: 'Library updated successfuly',
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
      const item = await Library.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'Library is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Librarys deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
