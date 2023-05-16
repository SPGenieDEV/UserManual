import { Container, Heading , Text} from '@chakra-ui/react'
import { Codesection } from '../Codesection'
import { Imagesection } from '../imagesection'
import img13 from '../../Image/13.JPG'

export const Installationchrome= () => {
    const code1 = `
    git clone https://github.com/SPGenieDEV/Chrome-Plugin.git
  `;
    return(
        <div>
            <Container maxW="container.lg">
            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>Chrome Extension Installation</Heading>
            <Text m={5} textAlign={'left'}>Chrome Extension to predict story points for a given user story</Text>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Installation</Heading>
            <Text m={5} textAlign={'left'}>1. Clone the project from GitHub : The first step is to clone the chrome extension from GitHub. To do this, open your terminal and navigate to the directory where you want to store the project. Then, run the following command:</Text>
            <Codesection code={code1}/>

            <Text m={5} textAlign={'left'}>2. Open the Chrome browser and go to chrome://extensions/</Text>
            <Text m={5} textAlign={'left'}>3. Enable developer mode</Text>
            <Text m={5} textAlign={'left'}>4. Click on Load unpacked</Text>

            <Imagesection url={img13}/>

            <Text m={5} textAlign={'left'}>5. Select the cloned folder</Text>
            <Text m={5} textAlign={'left'}>6. The extension will be added to the browser</Text>
            </Container>
        </div>
    )
}