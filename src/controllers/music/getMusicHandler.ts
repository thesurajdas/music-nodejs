
import { Request, Response } from 'express';
import { musicService } from '@services/index';

export const getMusicHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const allMusic = await musicService.getMusic();
    res.status(200).json(allMusic);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};