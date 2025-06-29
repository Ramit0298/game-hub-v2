import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameQueryStore";

const GameHeading = () => {
  const { selectedGenreId, selectedPlatformId } = useGameQueryStore((s) => ({
    selectedGenreId: s.gameQuery.genreId,
    selectedPlatformId: s.gameQuery.platformId,
  }));

  const selectedGenre = useGenre(selectedGenreId || 0);
  const selectedPlatform = usePlatform(selectedPlatformId || 0);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
