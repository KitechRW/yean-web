import Response from 'apis/utils/helpers/response';
import { NextApiRequest, NextApiResponse } from 'next';
import Partner from 'apis/database/models/partner.model';

export default class PartnerController {
  static async getPartners(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    try {
      return Response.success(res, 200, {
        message: 'Partners fetched successfuly',
        partners: await Partner.findAndCountAll(),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async create(req: NextApiRequest, res: NextApiResponse) {
    const { email, phone, companyName, image } = req.body;
    try {
      return Response.success(res, 200, {
        message: 'Partner created successfuly',
        partner: await Partner.create({
          email,
          phone,
          companyName,
          image,
        }),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async edit(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const { email, phone, companyName, image } = req.body;
    try {
      const partner = await Partner.findByPk(`${id}`);
      if (!partner) {
        return Response.error(res, 404, {
          message: 'patner is not found',
        });
      }
      const prev = partner.toJSON();
      partner.set({
        email: email || prev.email,
        phone: phone || prev.phone,
        companyName: companyName || prev.companyName,
        image: image || prev.companyName,
      });
      return Response.success(res, 200, {
        message: 'Partner edited successfuly',
        partner: await partner.save(),
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
      const partner = await Partner.findByPk(`${id}`);
      if (!partner) {
        return Response.error(res, 409, {
          message: 'Partner is not found',
        });
      }
      return Response.success(res, 200, {
        message: 'Partners deleted successfuly',
        partner: await Partner.destroy({ where: { id } }),
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }
}