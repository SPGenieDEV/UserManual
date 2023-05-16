import { Container, Heading , Text} from '@chakra-ui/react'
import { Imagesection } from '../imagesection'
import img11 from '../../Image/11.png'
import img12 from '../../Image/12.png'

export const Usermanualchrome = () => {
    return(
        <div>
            <Container maxW="container.lg" mb={10}>
                <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>Chrome Extension</Heading>
                <Text m={5} textAlign={'left'}>Chrome Extension to predict story points for a given user story</Text>

                <Text m={5} textAlign={'left'}>Google Chrome plugin specifically designed for the purpose of story point estimation.</Text>
                <Text m={5} textAlign={'left'}>It offers the flexibility to select its models according to the user's preferences.</Text>

                <Imagesection url={img11}/>

                <Text m={5} textAlign={'left'}>The user can select the desired model from the drop-down menu.</Text>
                <Text m={5} textAlign={'left'}>Upon selecting text with the computer mouse, this program automatically predicts the corresponding story point value of the selected text. The predicted value is then displayed for the user's convenience.</Text>

                <Imagesection url={img12}/>

                
            </Container>
        </div>
    )
}