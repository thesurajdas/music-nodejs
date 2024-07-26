import mongoose, { Schema } from 'mongoose';
import { IUser } from './model';

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    preferences: {
      genres: String,
      moods: String
    }
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IUser interface
export default mongoose.model<IUser>('userModel', UserSchema, 'users');
