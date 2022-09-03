import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import Job from 'apis/database/models/jobs.model';

export default class JobController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'Jobs fetched successfuly',
        data: await Job.findByPk(`${id}`),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const jobs = await Job.findAndCountAll();
      const categories: string[] = [];
      const keywords: string[] = [];
      const locations: string[] = [];
      jobs.rows.forEach(item => {
        categories.push(item.toJSON().category);
        keywords.push(item.toJSON().keyword);
        locations.push(item.toJSON().location);
      });
      return Response.success(res, 200, {
        message: 'Jobs fetched successfuly',
        data: { ...jobs, categories, keywords, locations },
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message,
      });
    }
  }

  static async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      return Response.success(res, 200, {
        message: 'Job created successfuly',
        data: await Job.create(req.body),
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
      const item = await Job.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'Job is not found',
        });
      }

      item.set(req.body);

      return Response.success(res, 200, {
        message: 'Job updated successfuly',
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
      const item = await Job.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'Job is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Jobs deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}
