import { Request, Response } from 'express';
import { musicService } from '@services/index';

export const deleteMusicHandler = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const Music = await musicService.deleteMusic(id);
    res.status(200).json(Music);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
