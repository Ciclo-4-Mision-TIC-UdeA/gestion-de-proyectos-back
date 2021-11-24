import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
  return jwt.sign(payload, 'secret', {
    expiresIn: '24h',
  });
};

export { generateToken };