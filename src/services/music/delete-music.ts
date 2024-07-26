import { IMusic } from '@modules/music/model';
import musicModel from '@modules/music/schema';

export const deleteMusic = async (id:string): Promise<IMusic|null> => {
 const Music = await musicModel.findByIdAndDelete(id);
 return Music;
};
