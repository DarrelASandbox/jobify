import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';
import User from '../models/User.js';

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      throw new BadRequestError('please provide all values');

    const emailNotUnique = await User.findOne({ email });
    if (emailNotUnique) throw new BadRequestError('email already in use');

    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      user: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        location: user.location,
      },
      token,
      location: user.location,
    });
  } catch (err) {
    next(err);
  }
};

const login = (req, res) => {
  res.send('login user');
};
const updateUser = (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
