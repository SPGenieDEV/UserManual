import { Image, Box } from "@chakra-ui/react";


export const Imagesection = () => {
  return (
    <Box w="800px" h="300px" overflow="hidden" m={5}>
        <Image src='' objectFit="cover" w="100%" h="100%" />
    </Box>
  );
}
