import { Document, Types } from 'mongoose';

export interface IMusic extends Document {
  title: string;
  artist: string;
  genre: string;
  mood: string;
}

export interface ICreateMusicRequest {
  title: string;
  artist: string;
  genre: string;
  mood: string;
}

export interface IMusicRequestObject {
  title: string;
  artist: string;
  genre: string;
  mood: string;
  _id: Types.ObjectId;
}
