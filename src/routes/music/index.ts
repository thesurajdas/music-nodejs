// craete router useing express router and import musicController and createMusic validation

import { Router } from 'express';
import { musicController } from '@controllers/index';
import { createMusic, updateMusic } from '@validations/music/index';
import { validateUserAccessToken } from '@middleware/index';
import { deleteMusicHandler } from '@controllers/music';

const musicRouter = Router();

musicRouter.get('/', musicController.getMusicHandler);
musicRouter.get('/recommendations', validateUserAccessToken, musicController.getRecommendationsHandler);
musicRouter.post('/', validateUserAccessToken, createMusic, musicController.saveMusicHandeler);
musicRouter.get('/:id', validateUserAccessToken, musicController.getMusicId);
musicRouter.put('/:id', validateUserAccessToken, updateMusic, musicController.updateMusicId);
musicRouter.delete('/:id', validateUserAccessToken, deleteMusicHandler);

export { musicRouter };
