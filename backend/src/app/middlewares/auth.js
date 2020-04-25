import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (request, response, next) => {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authorization.split(' ');

  try {
    const result = await promisify(jwt.verify)(token, authConfig.secret)
    request.userId = result.id
    next();
  } catch (error) {
    return response.status(401).json({ error: 'Token is not valid!' });
  }
}