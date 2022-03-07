import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide first name.'],
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
    required: [true, 'Please provide email.'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password.'],
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

export default mongoose.model('User', UserSchema);
