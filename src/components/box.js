import React from "react";
import { Box, Heading,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BoxComponent = ({w, headingText, bodyText,type,to }) => {
    let linkto = to;
    let border_color = 'green.300';
    if(type === 'installation'){
        linkto = '/installation/' + to;
    }
    else if(type === 'user-manual'){
        linkto = '/user-manual/' + to;
        border_color = 'blue.300';
    }
    return (
            <Box as={Link} to={linkto}  w={w} p={4} m={4} borderColor={border_color} borderWidth={3} textDecoration="none">
                <Heading as='h2' size='xl' mb={2}>
                    {headingText}
                </Heading>
                <Text mt={4}>
                    {bodyText}
                </Text>       
            </Box>       
    )
}
export default BoxComponent;