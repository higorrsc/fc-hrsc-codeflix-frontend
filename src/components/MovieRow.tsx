import { MovieCard } from './MovieCard';

type MovieRowProps = {
  sectionTitle: string;
};

export const MovieRow = ({ sectionTitle }: MovieRowProps) => {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='no-scrollbar -ml-6 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((i) => (
          <MovieCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
};
