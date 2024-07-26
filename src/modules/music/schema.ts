import mongoose, { Schema } from 'mongoose';
import { IMusic } from './model';

const MusicSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    mood: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IUser interface
export default mongoose.model<IMusic>('musicModel', MusicSchema, 'music');
