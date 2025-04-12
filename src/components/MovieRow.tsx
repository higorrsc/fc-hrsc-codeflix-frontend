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
      <div className='no-scrollbar -ml-6 flex space-x-4 overflow-x-scroll p-6'>
        {movies.map((movie, index) => (
          <h1 key={index}>{movie.title}</h1>
        ))}
      </div>
    </div>
  );
};
