import { Header } from '@/components/Header';
import { Player } from '@/components/Player';
import { getMovieById } from '@/services/MovieService';

export interface WatchPageProps {
  params: {
    id: string;
  };
}
export default async function WatchPage({ params }: WatchPageProps) {
  const watchParams = await params;
  const movie = await getMovieById(watchParams.id);

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }

  return <Player movie={movie} />;
}
