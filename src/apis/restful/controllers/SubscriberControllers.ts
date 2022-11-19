import SubscribeService from 'apis/services/subscriberSrvices';
import { NextApiRequest, NextApiResponse } from 'next';
import Response from 'apis/utils/helpers/response';
import DB from 'apis/database';
import { emailSender } from 'apis/utils/sendEmail';

const { Subscribes } = DB;

export default class SubscriberController {
  static async sendEmails(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { title, subject, message } = req.body;
      const subscribers = await Subscribes.findAll({
        attributes: ['email'],
      });

      subscribers.forEach(item => {
        const email = item.toJSON().email;
        emailSender({ email, from: title, subject, message });
      });

      return Response.success(res, 200, {
        message: 'Email has been sent successfully',
      });
    } catch (error) {
      return Response.error(res, 500, {
        message: 'something went wrong',
      });
    }
  }

  static async subscribe(req: NextApiRequest, res: NextApiResponse) {
    try {
      let { email } = req.body;
      email = email.toLowerCase();
      const emailExist = await SubscribeService.findByEmail(email);
      if (emailExist) {
        return Response.error(res, 401, {
          message: 'email is already subscribed',
        });
      }
      await SubscribeService.create({ email })
        .then(reslt => {
          return Response.success(res, 201, {
            message: 'You subscribed successfull',
            data: reslt,
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'You failed to be our subscriber',
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

  static async unSubscrible(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    try {
      let { id } = req.query;
      const emailExist = await SubscribeService.findByPk(Number(id));
      if (!emailExist) {
        return Response.error(res, 404, {
          message: 'email is not subscribed before',
        });
      }
      await emailExist
        .destroy()
        .then(rslt => {
          return Response.success(res, 200, {
            message: 'User unsuscribed successful',
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'We fail to unsubscriber you',
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

  static async getAllSubscribers(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    try {
      await SubscribeService.findAll()
        .then(rsp => {
          return Response.success(res, 200, {
            message: 'List of All Subscribers',
            data: rsp,
          });
        })
        .catch(error => {
          return Response.error(res, 403, {
            message: 'Failed to retreive all subscribers',
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
