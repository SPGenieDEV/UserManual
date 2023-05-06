import { Container, Heading , Text,ListItem, UnorderedList} from '@chakra-ui/react'
import { Codesection } from '../Codesection'

export const Installationback = () => {
    const code1 = `
    cd SPGenie
    pip install requirement.txt
    -m flask run 
  `;
    return(
        <div>
            <Container maxW="container.lg">

            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>SPGenie Tool - Backend Installation</Heading>
            <Text m={5} textAlign={'left'}>SPGenie backend is developed using Flask</Text>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Tech</Heading>
            <Text m={5} textAlign={'left'}>SP GENIE uses a number of open source projects to work properly:</Text>

            <UnorderedList ml={10} textAlign={'left'}>
                <ListItem>Flask - Flask</ListItem>
                <ListItem>JS - Java Script</ListItem>
                <ListItem>Tenser flow - Tenser Flow</ListItem>
                <ListItem>PyTorch - PyTorch libraries</ListItem>
            </UnorderedList>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Installation</Heading>
            <Text m={5} textAlign={'left'}>Install the dependencies and devDependencies and start the server.</Text>
            
            <Codesection code={code1}/>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Documentation</Heading>
            <Text m={5} textAlign={'left'}>After the run the application you can route to the below link.</Text>

            <UnorderedList ml={10} mb={10} textAlign={'left'}>
                <ListItem>http://localhost:5000/api/docs/ - SWAGGER DOC</ListItem>
            </UnorderedList>
            </Container>
        </div>
    )
}