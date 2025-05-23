import { MovieCard } from '@/components/movie/Card';
import { Movies } from '@/types/movie';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

export const MovieRow = ({ sectionTitle, movies }: MovieRowProps) => {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
