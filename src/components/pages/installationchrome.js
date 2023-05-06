import { Container, Heading , Text} from '@chakra-ui/react'

export const Installationchrome= () => {
    return(
        <div>
            <Container maxW="container.lg">
            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>Chrome Extension Installation</Heading>
            <Text m={5} textAlign={'left'}>Chrome Extension to predict story points for a given user story</Text>
            </Container>
        </div>
    )
}