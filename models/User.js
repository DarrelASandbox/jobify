import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name.'],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name.'],
    minlength: 3,
    maxlength: 30,
    trim: true,
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
    default: 'my city',
  },
});

export default mongoose.model('User', UserSchema);
