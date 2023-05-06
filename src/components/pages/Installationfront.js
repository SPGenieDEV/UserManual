import { Container, Heading , Text} from '@chakra-ui/react'
import { Codesection } from '../Codesection'

export const Installationfront = () => {
    const code1 = `
    cd $ node --version
    v16.13.2
    
    $ npm --version
    8.1.2
  `;
  const code2 = `
    git clone https://github.com/SPGenieDEV/SPGenie-Frontend.git
  `;
    const code3 = `
    npm install
    `;
    const code4 = `
    npm start
    `;
    return(
        <div>
            <Container maxW="container.lg" mb={10}>
            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>SPGenie Tool - Frontend Installation</Heading>
            <Text m={5} textAlign={'left'}>SPGenie frontend is developed using react JS</Text>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Prerequisites</Heading>
            <Text m={5} textAlign={'left'}>Node JS and NPM should be installed in the system</Text>
            <Codesection code={code1}/>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Installation</Heading>
            <Text m={5} textAlign={'left'}>1. Clone the project from GitHub : The first step is to clone the project from GitHub. To do this, open your terminal and navigate to the directory where you want to store the project. Then, run the following command:</Text>
            <Codesection code={code2}/>

            <Text m={5} textAlign={'left'}>2. Install dependencies: Once you have cloned the project, navigate to the project directory and install the necessary dependencies using the following command:</Text>
            <Codesection code={code3}/>

            <Text m={5} textAlign={'left'}>3. Start the React app: To start the React app, run the following command:</Text>
            <Codesection code={code4}/>

            </Container>
        </div>
    )
}