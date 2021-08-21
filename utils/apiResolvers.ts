import { Media, MediaType, ImageType } from '../types';
import { genres } from '../config/genres';

export function parse(array: any[], type: MediaType): Media[] {
  const parsedResponse: Media[] = [];

  array.forEach((element: any): void => {
    const resolved: Media = {
      id: element.id,
      title: element.name || element.title,
      rating: element.vote_average,
      overview: element.overview,
      poster: getImageUrl(element.poster_path, 'poster'),
      banner: getImageUrl(element.backdrop_path, 'original'),
      genre: getGenre(element.genre_ids, type)
    };

    parsedResponse.push(resolved);
  });

  return parsedResponse;
}

function getImageUrl(path: string, type: ImageType): string {
  const dimension: string = type === 'poster' ? 'w500' : 'original';
  return `https://image.tmdb.org/t/p/${dimension}${path}`;
}

function getGenre(genreIds: number[], type: MediaType) {
  const result = genres[type].filter(item => genreIds.includes(item.id));
  if (result.length > 3) {
    return result.slice(0,3);
  }
  return result;
}
