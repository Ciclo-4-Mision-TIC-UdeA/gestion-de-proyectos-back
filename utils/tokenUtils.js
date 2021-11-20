import jwt from 'jsonwebtoken';

const validateToken = (token) => {
  if (token) {
    const ver = jwt.verify(token,process.env.JWT_SECRET, (err, data) => {
      return data;
    });
    return ver;
  } else {
    return null;
  }
};

const generateToken = (payload) => {
  if (payload.iat) {
    delete payload.iat;
    delete payload.exp;
  }
  return jwt.sign(payload,process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
};

export { validateToken, generateToken };
