import useGenres from "./useGenres";

const useGenre = (genreId: number) => {
  const { data: genres } = useGenres();

  return genres?.find((genre) => genre.id === genreId);
};

export default useGenre;
