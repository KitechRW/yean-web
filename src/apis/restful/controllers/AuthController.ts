import UserService from '../../services/userServices';
import bcrypt from 'bcryptjs';
import { signinToken, decode } from 'apis/utils/jwt';
import Response from 'apis/utils/helpers/response';
import { emailSender } from 'apis/utils/sendEmail';
import emailMocks from 'apis/utils/mocks';
import { NextApiRequest, NextApiResponse } from 'next';
import { isloggedIn } from '../../middlewares/auth';

export default class AuthController {
  /**
   * Create user account
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async signUp(req: NextApiRequest, res: NextApiResponse) {
    const newUser = req.body;
    try {
      newUser.email = newUser.email.toLowerCase();
      const userExist = await UserService.findByEmail(newUser.email);
      if (userExist) {
        return Response.error(res, 400, { message: 'user exists' });
      }
      newUser.password = await bcrypt.hash(newUser.password, 12);
      const user: any = await UserService.create(newUser);
      // const user = user.toJSON();
      const userData = {
        id: user.id,
        email: user.email,
      };
      const token = signinToken(userData);
      const emailOptions = {
        email: user.email,
        message: await emailMocks.verifyAccount({
          ...userData,
          token,
        }),
        subject: 'Account Verification Link',
      };
      await emailSender(emailOptions);
      return Response.success(res, 201, {
        message: `Dear ${user.email}, verify your email`,
        user: userData,
        token,
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        error: error.message,
        message: 'something went wrong',
      });
    }
  }

  //   /**
  //    * User signin
  //    * @param {Request} req Request
  //  * @param {Response} res Response
  //  */
  static async signIn(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    try {
      let user: any = await UserService.findByEmail(email);
      if (!user) {
        return Response.error(res, 404, {
          message: 'Invalid username or password',
        });
      }
      const foundUser = user.toJSON();
      const isEqual = await bcrypt.compare(
        password,
        foundUser.password,
      );
      if (!isEqual) {
        return Response.error(res, 404, {
          message: 'Invalid username or password',
        });
      }
      if (!foundUser.active) {
        return Response.error(res, 400, {
          message: 'email is not verified',
          active: foundUser.active,
        });
      }
      user.status = 1; // update login status
      user = await user.save();
      const inUser = user.toJSON();
      const userData = {
        id: inUser.id,
        email: inUser.email,
      };
      const token = signinToken(userData);

      req.session.user = user;
      req.session.token = token;
      await req.session.save();
      
      return Response.success(res, 200, {
        message: 'login successfully',
        user: userData,
        token,
      });
    } catch (error: any) {
      const message = error ? error.message : 'something went wrong';
      return Response.error(res, 500, { message });
    }
  }

  /**
   * Confirm user account
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async confirmAccount(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const { token } = req.body;
    try {
      const decodedToken: any = decode(token);
      console.log(decodedToken)
      if (!decodedToken) {
        return Response.error(res, 400, {
          message: 'Your verification link may have expired.',
        });
      }
      const user: any = await UserService.findByPk(decodedToken.id);
      if (!user) {
        return Response.error(res, 401, {
          message: 'user not found, signup first',
        });
      }

      const foundUser = user.toJSON();

      if (foundUser.active) {
        return Response.success(res, 200, {
          message: 'user verified, login',
          user: {
            active: true,
          },
        });
      }
      user.active = true;
      await user.save();

      return Response.success(res, 200, {
        message: 'verified successfully',
        user: {
          active: true,
        },
      });
    } catch (err:any) {
      const message = err.message || 'something went wrong';
      return Response.error(res, 500, { message });
    }
  }

  /**
   * User logout
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async logout(req: NextApiRequest, res: NextApiResponse) {
    const isLogged: any = await isloggedIn(req,res);
    if (!isLogged) {
      return Response.error(res, 404, {
        message: "you aren't logged in",
      });
    }
    try {
      let user: any = isLogged;
      user = await UserService.update({status:0},{email:user.email})
      // req.session.destroy();
      return Response.success(res, 201, {
        message: 'logout successfully',
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }

  /**
   * Forget password
   * @param {Request} req Request
   * @param {Response} res Response
   * @returns
   */
  static async forgettingPassword(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const { email } = req.body;
    try {
      const user: any = await UserService.findByEmail(email);
      if (!user) {
        return Response.error(res, 401, {
          message: 'user not found, signup',
        });
      }

      const inUser = user.toJSON();
      const userData = {
        id: inUser.id,
        email: inUser.email,
      };
      const token = signinToken(userData);
      const emailOptions = {
        email: inUser.email,
        message: await emailMocks.forgetPassword({
          ...inUser,
          token,
        }),
        subject: 'Reset Password Link',
      };
      await emailSender(emailOptions);
      return Response.success(res, 201, {
        message: 'check your email',
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }

  /**
   * Reset password
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async resetingPassword(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const { password, token } = req.body;
    try {
      const { id }: any = decode(token);
      let user: any = await UserService.findByPk(id);
      if (!user) {
        return Response.error(res, 401, {
          message: 'user not found, signup',
        });
      }
      user.password = await bcrypt.hash(password, 12);
      user = await user.save();
      return Response.success(res, 201, {
        message: 'password updated',
      });
    } catch (err: any) {
      if (
        err.message === 'jwt malformed' ||
        err.message === 'invalid token' ||
        err.message === 'jwt expired'
      ) {
        return Response.error(res, 400, {
          message: 'You are using Incorrect or Expired Link!',
          error: err.message,
        });
      }
      return Response.error(res, 500, {
        message: 'server errror',
        error: err.message,
      });
    }
  }

  /**
   * Get my profile
   * @param {object} req Request
   * @param {Response} res Response
   */
  static async getProfile(req: NextApiRequest, res: NextApiResponse) {
    const isLogged: any = await isloggedIn(req,res);
    if (!isLogged) {
      return Response.error(res, 404, {
        message: "you aren't logged in",
      });
    }
    
    try {
      isLogged.password = undefined;
      return Response.success(res, 201, {
        message: 'your profile',
        profile: isLogged,
      });
    } catch (error: any) {
      return Response.error(res, 500, {
        message: 'something went wrong',
        error: error.message,
      });
    }
  }
}
