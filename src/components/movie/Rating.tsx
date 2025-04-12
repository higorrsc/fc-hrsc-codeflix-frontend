const textColor = (rating: string) => {
  switch (rating.toUpperCase()) {
    case 'PG':
      return 'text-green-500';
    case 'PG-13':
      return 'text-yellow-500';
    case 'R':
      return 'text-red-500';
    case 'NC-17':
      return 'text-red-700';
    default:
      return 'text-white';
  }
};
export const MovieRating = ({ rating }: { rating: string }) => {
  return (
    <span
      className={`border-1 border-gray-700 px-2 text-xs uppercase ${textColor(rating)}`}
    >
      {rating}
    </span>
  );
};
