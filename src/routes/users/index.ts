import { Router } from 'express';
import { userController } from '@controllers/index';
import { validateUserAccessToken } from '@middleware/index';

const userRouter = Router();

userRouter.get('/me', validateUserAccessToken, userController.getCurrentUser);
userRouter.put('/:id/preferences', validateUserAccessToken);


export { userRouter };
