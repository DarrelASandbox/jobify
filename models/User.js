import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide first name'],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 30,
    trim: true,
    default: undefined,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    maxlength: 30,
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: undefined,
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model('User', UserSchema);
