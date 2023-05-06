import { Container, Heading , Text} from '@chakra-ui/react'

export const Installationjira = () => {
    return(
        <div>
            <Container maxW="container.lg">
            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>Jira plugin Installation</Heading>
            <Text m={5} textAlign={'left'}>Jira Plugin is a plugin to predict story points for a given user story in Jira.</Text>
            </Container>
        </div>
    )
}