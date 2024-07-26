import { IMusic } from '@modules/music/model';
import musicModel from '@modules/music/schema';
import { FilterQuery } from 'mongoose';

export const updateMusic = async (
  id: string,
  updateData: Partial<IMusic>,
): Promise<IMusic | null> => {
  try {
    const filter: FilterQuery<IMusic> = { _id: id };
    const updatedMusic = await musicModel.findOneAndUpdate(filter, updateData, { new: true });
    return updatedMusic;
  } catch (error) {
    // Rethrow the error with more context
    throw new Error(`Failed to update Music with ID`);
  }
};
