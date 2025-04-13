import { apiRequest, RequestOptions } from '@/services/ApiRequest';
import { Movie, Movies } from '@/types/movie';

export const getMovieById = async (id: string): Promise<Movie> => {
  return await apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  return await apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movies> => {
  return await apiRequest(
    'movies',
    { genres_like: encodeURIComponent(genre) },
    options
  );
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {
    _limit: 100,
  }
): Promise<Movies> => {
  return await apiRequest(
    'movies',
    {
      title_like: encodeURIComponent(title),
      genres_like: encodeURIComponent(genre),
    },
    options
  );
};
