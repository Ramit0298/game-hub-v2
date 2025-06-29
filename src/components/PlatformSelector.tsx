import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/gameQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const { selectedPlatformId, setPlatformId } = useGameQueryStore((s) => ({
    selectedPlatformId: s.gameQuery.platformId,
    setPlatformId: s.setPlatformId,
  }));

  const selectedPlatform = usePlatform(selectedPlatformId || 0);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
