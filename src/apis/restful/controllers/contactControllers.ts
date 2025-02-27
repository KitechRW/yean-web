import ContactService from 'apis/services/contactServices';
import { NextApiRequest, NextApiResponse } from 'next';
import Response from 'apis/utils/helpers/response';
import emailMocks from 'apis/utils/mocks';
import { emailSender } from 'apis/utils/sendEmail';

export default class ContactControllers {
  static async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      let { name, email, message } = req.body;
      const emailOptions = {
        email: process.env.SERVICE_USERNAME!,
        from: name,
        message: await emailMocks.contact({
          name,
          email,
          message,
        }),
        subject: 'New Contact',
      };
      await emailSender(emailOptions);
      await ContactService.create({ name, email, message })
        .then(rslt => {
          return Response.success(res, 201, {
            message: 'thank you for contacting us',
            data: rslt,
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'Fail to save this contact',
            error: error.message,
          });
        });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'server error',
        error: error.message,
      });
    }
  }

  static async getAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      await ContactService.findAll()
        .then(rslt => {
          return Response.success(res, 200, {
            message: 'List of all contacts',
            data: rslt,
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'Fail to retreive contacts',
            error: error.message,
          });
        });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'server error',
        error: error.message,
      });
    }
  }

  static async getOne(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { contact_id } = req.query;
      await ContactService.findByPk(contact_id)
        .then(rslt => {
          if (!rslt) {
            return Response.success(res, 200, {
              message: 'this contact is not found',
            });
          }
          return Response.success(res, 200, {
            message: 'able to retreive it',
            data: rslt,
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'Fail to retreive contacts',
            error: error.message,
          });
        });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'server error',
        error: error.message,
      });
    }
  }

  static async delete(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { contact_id } = req.query;
      const isContactExist = await ContactService.findByPk(
        contact_id,
      );
      if (!isContactExist) {
        return Response.error(res, 404, {
          message: 'This contact is not in system',
        });
      }
      await ContactService.destroy({ id: contact_id })
        .then(rslt => {
          return Response.success(res, 200, {
            message: 'Contact deleted successfully',
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'Fail to retreive contacts',
            error: error.message,
          });
        });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'server error',
        error: error.message,
      });
    }
  }
}
