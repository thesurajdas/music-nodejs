// create saveMusicHandeler that will call MusicService saveMusic, ICreateMusicRequest

import { Request, Response } from 'express';
import { musicService } from '@services/index';
import { ICreateMusicRequest } from '@modules/music/model';

export const saveMusicHandeler = async (req: Request, res: Response): Promise<void> => {
    const {body}:{body: ICreateMusicRequest} = req;
  try {
    const newMusic = await musicService.saveMusic(body);
    res.status(201).json(newMusic);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};