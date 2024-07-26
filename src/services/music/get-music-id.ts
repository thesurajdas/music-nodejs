import { IMusic } from '@modules/music/model';
import musicModel from '@modules/music/schema';

export const getMusicId = async (id:string): Promise<IMusic|null> => {
 const Music = await musicModel.findById(id);
 return Music;
};
