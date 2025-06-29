import { HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../models/Game";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <HStack key={publisher.id}>
            <Image
              src={getCroppedImageUrl(publisher.image_background)}
              boxSize={5}
            />
            <Text>{publisher.name}</Text>
          </HStack>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
