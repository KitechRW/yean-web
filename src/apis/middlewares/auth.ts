import { decode } from 'apis/utils/jwt';
import UserService from 'apis/services/userServices';

export const isloggedIn = async (req:any, res: any) => {
  let token = req.headers.authorization;
  if (!token) {
   return false
  }

  try {
    token = token.split(' ')[1]
    const decoded = decode(token);

    const freshUser:any = await UserService.findByPk(decoded.id);

    if (!freshUser.status) {
      return false
    }
    return freshUser.toJSON()
  } catch (error) {
    return false;
  }
};