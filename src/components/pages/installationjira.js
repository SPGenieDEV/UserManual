import { Container, Heading , Text} from '@chakra-ui/react'
import { Codesection } from '../Codesection'

export const Installationjira = () => {
    const code1 = `
    git clone https://github.com/SPGenieDEV/jira-Plugin.git
  `;


    return(
        <div>
            <Container maxW="container.lg">
            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>Jira plugin Installation</Heading>
            <Text m={5} textAlign={'left'}>Jira Plugin is a plugin to predict story points for a given user story in Jira.</Text>
            
            <Text m={5} textAlign={'left'}>1. Clone the project from GitHub : The first step is to clone the Jira plugin from GitHub. To do this, open your terminal and navigate to the directory where you want to store the project. Then, run the following command:</Text>
            <Codesection code={code1}/>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Atlassian SDK Installation</Heading>
            <Text m={5} textAlign={'left'} color={'blue.400'}><a href='https://marketplace.atlassian.com/download/plugins/atlassian-plugin-sdk-windows'>1. Download the latest version of SDK from here</a></Text>

            <Text m={5} textAlign={'left'}>2. Locate the downloaded file and double-click to launch the installer</Text>
            <Text m={5} textAlign={'left'}>3. Follow the prompts to install the SDK</Text>

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Jira plugin Installation</Heading>
            <Text m={5} textAlign={'left'}>1. After installing Atlassian SDK, create new project</Text>
            <Text m={5} textAlign={'left'}>2. Select Apps and go to Manage apps</Text>
            <Text m={5} textAlign={'left'}>3. Select Upload app</Text>
            <Text m={5} textAlign={'left'}>4. Select the Jar file which is cloned earlier</Text>
            <Text m={5} textAlign={'left'}>5. The plugin will be added to the Jira</Text>
            
            </Container>
        </div>
    )
}