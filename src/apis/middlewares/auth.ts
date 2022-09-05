import { decode } from 'apis/utils/jwt';
import UserService from 'apis/services/userServices';
import { NextApiRequest, NextApiResponse } from 'next';

export const isloggedIn = async (req: any, res: any) => {
  let token = req.headers.authorization;
  if (!token) {
    return false;
  }

  try {
    token = token.split(' ')[1];
    const decoded = decode(token);

    const freshUser: any = await UserService.findByPk(decoded.id);

    if (!freshUser.status) {
      return false;
    }
    return freshUser.toJSON();
  } catch (error) {
    return false;
  }
};

const withRoles = (
  handler: (arg0: NextApiRequest, arg1: NextApiResponse<any>) => any,
  roles: string[],
  methods: string[],
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (methods.includes(req.method as string)) {
      if (!roles.includes(req.session.user?.type as string)) {
        return res.status(403).json({
          success: false,
          message:
            'You do not have permission to perform this action.',
        });
      }
    }

    return handler(req, res);
  };
};

export default withRoles;
