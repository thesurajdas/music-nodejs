import { Request, Response } from 'express';
import { musicService } from '@services/index';

export const updateMusicId = async (req: Request, res: Response): Promise<void> => {
  try {
    const pid = req.params.id;
    const updateData = req.body;
    const updatedMusic = await musicService.updateMusic(pid, updateData);
    res.status(200).json(updatedMusic);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
