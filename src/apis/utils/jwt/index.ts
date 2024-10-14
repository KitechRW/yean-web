import jwt from 'jsonwebtoken';

export const signinToken = (
  params: object,
  time = process.env.EXPIRES_IN || '24h',
  secret = process.env.JWT_SECRET,
) => {
  if(!secret) {
    throw new Error("JWT_SECRET is not defined please add it on .env file");
  }
  const token = jwt.sign(params, secret, { expiresIn: time });
  return token;
};

export const decode = (
  token: string,
  secret = process.env.JWT_SECRET,
) => {
  if(!secret) {
    throw new Error("JWT_SECRET is not defined please add it on .env file");
  }
  const payload = jwt.verify(token, secret);
  return payload;
};
