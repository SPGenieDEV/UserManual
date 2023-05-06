import { Heading } from '@chakra-ui/react'
import { Box, Code } from "@chakra-ui/react";

export const Codesection = ({code}) => {
    return(
        <div>  
            <Box mt={4} ml={5} backgroundColor="blackAlpha.800" borderRadius="md" p={3} textAlign="left">
                <Code fontSize="sm" color="white" backgroundColor="transparent">
                <pre style={{ whiteSpace: "pre-wrap" }} backgroundColor="transparent">
                    {code}
                </pre>
                </Code>
            </Box>

        </div>
    )
}