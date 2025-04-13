import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { MovieRow } from '@/components/movie/Row';
import { getFeaturedMovie, getMoviesByGenre } from '@/services/MovieQuery';

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('106');
  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];
  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );
  console.log(movies);

  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent to-black lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />
        {movies.map(({ sectionTitle, movies }) => (
          <MovieRow
            key={sectionTitle}
            sectionTitle={sectionTitle}
            movies={movies}
          />
        ))}
      </main>
    </div>
  );
}
