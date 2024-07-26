import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  preferences: {
    genre: string;
    mood: string;
  };
}

export interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
  preferences: {
    genre: string;
    mood: string;
  };
}

export interface ILoginUserRequest {
  email: string;
  password: string;
}

export interface IUserTokens {
  name: string;
  email: string;
  accessToken: string;
  accessTokenExpiry: number;
  refreshToken: string;
  refreshTokenExpiry: number;
}

export interface IUserRequestObject {
  name: string;
  email: string;
  _id: Types.ObjectId;
  preferences: {
    genre: string;
    mood: string;
  };
}
