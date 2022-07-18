import { NextApiResponse } from 'next';

export default class Response {
  static error(res: NextApiResponse, status: number, error: object) {
    return res.status(status).json(error);
  }

  static success(res: NextApiResponse, status: number, data: object) {
    return res.status(status).json(data);
  }
}
