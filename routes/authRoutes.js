import express from 'express';
import rateLimiter from 'express-rate-limit';
import { login, register, updateUser } from '../controller/authController.js';
import authenticateUser from '../middleware/auth.js';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message:
    'Too many requests from this IP address, please try again after 15 minutes',
});

const router = express.Router();

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(authenticateUser, updateUser);

export default router;
