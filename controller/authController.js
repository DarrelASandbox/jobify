import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
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
