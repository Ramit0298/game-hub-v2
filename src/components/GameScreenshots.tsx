import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={2}
    >
      {screenshots.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={`Screenshot ${screenshot.id}`}
          style={{
            width: `${screenshot.width}`,
            height: `${screenshot.height}`,
          }}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
