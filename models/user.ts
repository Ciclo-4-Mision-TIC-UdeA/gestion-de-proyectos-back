import { Schema, model } from 'mongoose';
import { Enum_UserRole, Enum_UserStatus } from './enums';

// const Customer = require('./customer');

export interface User {
  name: string;
  lastName: string;
  email: string;
  document: string;
  role: Enum_UserRole;
  status: Enum_UserStatus;
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async (email) => {
        if (!(email.includes('@') && email.includes('.'))) {
          return false;
        }
      },
      message: 'Please enter a valid email',
    },
    // validate: {
    //   validator: function (v) {
    //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
    //   },
    //   message: 'Please enter a valid email',
    // },
  },
  document: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: Enum_UserRole,
  },
  status: {
    type: String,
    required: true,
    enum: Enum_UserStatus,
    default: Enum_UserStatus.pendiente,
  },
});

const UserModel = model('User', UserSchema);

export default UserModel;
