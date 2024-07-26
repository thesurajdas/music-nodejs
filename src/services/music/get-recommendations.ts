import { IMusic } from "@modules/music/model";
import musicModel from "@modules/music/schema";

export const getRecommendations = async (mood?: string, genre?: string): Promise<IMusic[]> => {
  const query: { mood?: string; genre?: string } = {};
    if (mood) {
      query.mood = mood;
    }
    if (genre) {
      query.genre = genre;
    }
  const allMusics:IMusic[] = await musicModel.find(query);
  return allMusics;
};
