import { Box, Heading } from "@chakra-ui/react";

interface DefinitionItemProps {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <Box as="dl" marginY={4}>
      <dt>
        <Heading as="span" fontSize="md" color="gray.600">
          {term}
        </Heading>
      </dt>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
