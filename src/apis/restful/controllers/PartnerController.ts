import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import Partner from 'apis/database/models/partner.model';
import removeFile, { parseForm } from 'apis/utils/libForm';

export default class PartnerController {
  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      return Response.success(res, 200, {
        message: 'Partners fetched successfuly',
        data: await Partner.findByPk(`${id}`),
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
        message: 'Partners fetched successfuly',
        data: await Partner.findAndCountAll(),
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
        message: 'Partner created successfuly',
        data: await Partner.create(payload),
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
      const item = await Partner.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return Response.error(res, 404, {
          message: 'Partner is not found',
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
        message: 'Partner updated successfuly',
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
      const item = await Partner.findByPk(`${id}`);
      if (!item) {
        return Response.error(res, 409, {
          message: 'Partner is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Partners deleted successfuly',
        data: await item.destroy(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async request(req: NextApiRequest, res: NextApiResponse){
    try {
      const {companyName,email,phone,address,message} = req.body;
      await Partner.create({companyName,email,phone,address,message}).then((resp)=>{
        return Response.success(res,201,{
          message:"request sent successfully",
          data:resp
        })
      }).catch((error)=>{
        return Response.error(res,403,{
          message:"Something failed",
          error:error.message
        })
      })
    } catch (error:any) {
      return Response.error(res,500,{
        message:'server error',
        error:error.message
      })      
    }
  }

}
