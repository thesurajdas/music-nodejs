import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './users';
import { musicRouter } from './music';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/users', userRouter);
v1Router.use('/music', musicRouter);
// All routes go here

export { v1Router };
