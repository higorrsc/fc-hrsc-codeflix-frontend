import { Header } from '@/components/Header';
import { MovieCard } from '@/components/movie/Card';
import { searchMovies } from '@/services/MovieService';

export interface SearchPageProps {
  title?: string;
  genre?: string;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchPageProps>;
}) {
  const { title, genre } = await searchParams;
  const movies = await searchMovies(title, genre);

  if (movies.length === 0) {
    return (
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Header />
          <main className='relative mt-28 mb-48 h-screen pl-4 lg:pl-16'>
            <h1 className='mb-4 text-2xl font-bold'>
              Search results for: <span className='text-red-600'>{title}</span>
            </h1>
            <p className='text-xl'>No movies found</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative mt-28 mb-48 h-screen pl-4 lg:pl-16'>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for: <span className='text-red-600'>{title}</span>
          </h1>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
