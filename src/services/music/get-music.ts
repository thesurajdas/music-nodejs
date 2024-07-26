import { IMusic } from "@modules/music/model";
import musicModel from "@modules/music/schema";

export const getMusic = async (): Promise<IMusic[]> => {
  const allMusics:IMusic[] = await musicModel.find();
  return allMusics;
};
