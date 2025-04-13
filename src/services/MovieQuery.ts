import { apolloClient } from '@/lib/graphql/apolloClient';
import { gql } from '@apollo/client';

export const GET_MOVIES_QUERY = gql`
  query GetMovies {
    movies {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_MOVIE_BY_ID_QUERY = gql`
  query GetMovieById($id: ID!) {
    movie(id: $id) {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_MOVIES_BY_GENRE_QUERY = gql`
  query GetMoviesByGenre($genre: String!, $limit: Int) {
    moviesByGenre(genre: $genre, limit: $limit) {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_FEATURED_MOVIES_QUERY = gql`
  query GetFeaturedMovies {
    featuredMovies {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_FEATURED_MOVIE_BY_ID_QUERY = gql`
  query GetFeaturedMovieById($id: ID!) {
    featuredMovie(id: $id) {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const getMoviesByGenre = async (
  genre: string,
  options?: { _limit?: number }
) => {
  const limit = options?._limit || 8;
  const { data } = await apolloClient.query({
    query: GET_MOVIES_BY_GENRE_QUERY,
    variables: { genre, limit },
  });
  return data.moviesByGenre;
};

export const getFeaturedMovie = async (id: string) => {
  const { data } = await apolloClient.query({
    query: GET_FEATURED_MOVIE_BY_ID_QUERY,
    variables: { id },
  });
  return data.featuredMovie;
};
