import { ICreateMusicRequest, IMusic } from '@modules/music/model';
import musicModel from '@modules/music/schema';

export const saveMusic = async (musicDetails: ICreateMusicRequest): Promise<IMusic> => {
  const newMusic: IMusic = new musicModel(musicDetails);
  await newMusic.save();
  return newMusic;
};
