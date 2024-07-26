import { Request, Response } from 'express';
import { musicService } from '@services/index';

export const getRecommendationsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { mood, genre } = req.query as { mood?: string; genre?: string };
    const allMusic = await musicService.getRecommendations(mood, genre);
    res.status(200).json(allMusic);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};