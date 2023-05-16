import { Image, Box } from "@chakra-ui/react";

export const Imagesection = ({url}) => {
  return (
    <Box w="800px" h="300px" overflow="hidden" m={5}>
        <Image src={url} objectFit="cover" h="100%" />
    </Box>
  );
}
