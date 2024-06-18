import jwt from 'jsonwebtoken';

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, 'secret');
  } catch (err) {
    throw new Error('Invalid token');
  }
};
