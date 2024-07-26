// craete router useing express router and import musicController and createMusic validation

import { Router } from 'express';
import { musicController } from '@controllers/index';
import { createMusic } from '@validations/music/index';
import { validateUserAccessToken } from '@middleware/index';

const musicRouter = Router();

musicRouter.get('/', musicController.getMusicHandler);
musicRouter.get('/recommendations', validateUserAccessToken, musicController.getRecommendationsHandler);
musicRouter.post('/', validateUserAccessToken, createMusic, musicController.saveMusicHandeler);
musicRouter.get('/:id', validateUserAccessToken, musicController.getMusicId);
musicRouter.put('/:id', validateUserAccessToken, musicController.updateMusicId);

export { musicRouter };
