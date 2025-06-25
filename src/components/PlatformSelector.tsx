import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  selectedPlatformId: number;
  onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({
  selectedPlatformId,
  onSelectPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.find(
    (platform) => platform.id === selectedPlatformId
  );

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
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
