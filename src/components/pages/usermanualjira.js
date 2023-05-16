import { Container, Heading , Text} from '@chakra-ui/react'
import { Imagesection } from '../imagesection'
import img8 from '../../Image/8.jpg'
import img9 from '../../Image/9.jpg'
import img10 from '../../Image/10.jpg'

export const Usermanualjira = () => {
    return(
        <div>
            <Container maxW="container.lg" mb={10}>
                <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>Jira Plugin</Heading>
                <Text m={5} textAlign={'left'}>Jira Plugin is a plugin to predict story points for a given user story in Jira.</Text>

                <Text m={5} textAlign={'left'}>The 'SP Genie' plugin provides a widget in JIRA, allowing users to select a pre-trained model for prediction.</Text>
                <Text m={5} textAlign={'left'}>Insert the user story into the text area and click the 'Predict' button</Text>

                <Imagesection url={img8}/>

                <Text m={5} textAlign={'left'}>The predicted story points will be displayed as a popup message</Text>

                <Imagesection url={img9}/>

                <Text m={5} textAlign={'left'}>After the prediction it enables the option to figure out the explanation of the prediction.</Text>

                <Imagesection url={img10}/>

                
            </Container>
        </div>
    )
}