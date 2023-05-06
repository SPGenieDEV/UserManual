import { Heading } from '@chakra-ui/react'
import Tabbar from './tabbar';

export const Homepage = () => {
    return(
        <div>
            <Heading as='h2' size='xl' m={4} color={'green.600'}>SPGenie Documentation</Heading>
        <Tabbar />
        </div>
    )
}
