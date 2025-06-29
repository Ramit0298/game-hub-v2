import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = trailers.find((trailer) => trailer.data[480]);
  return firstTrailer ? (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
