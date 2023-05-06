import { Container, Heading , Text, ListItem, UnorderedList} from '@chakra-ui/react'
import { Imagesection } from '../imagesection'

export const Usermanualfront = () => {
    return(
        <div>
            <Container maxW="container.lg" mb={10}>
            <Heading as='h4' size='lg' m={5} color={'green.400'} textAlign={'left'}>SPGenie Tool - Frontend</Heading>
            <Text m={5} textAlign={'left'}>SP GENIE, offers a user-friendly interface for utilizing our software effort estimation models.</Text>

            <Imagesection />

            <Text m={5} textAlign={'left'}>Select the desired model from "Top Models" or "GPT Models" in the sidebar</Text>
            
            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Top Models</Heading>
            <Text m={5} textAlign={'left'}>Under the "Top Models" tab there are three models:</Text>

            <UnorderedList ml={10} textAlign={'left'}>
                <ListItem>Traditional Method</ListItem>
                <ListItem>Deep-SE</ListItem>
                <ListItem>RNN-CNN</ListItem>
            </UnorderedList>

            <Imagesection />

            <Text m={5} textAlign={'left'}>Enter the user story in the given text box and click "Predict" button. System will display predicted value.</Text>


            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>GPT Models</Heading>
            <Text m={5} textAlign={'left'}>Under the "GPT Models" tab there are two models:</Text>

            <UnorderedList ml={10} textAlign={'left'}>
                <ListItem>GPT2</ListItem>
                <ListItem>GPT2 - Medium</ListItem>
            </UnorderedList>

            <Imagesection />

            <Text m={5} textAlign={'left'}>Enter the user story in the given text box and click "Predict" button. System will display predicted value.</Text>

            <Text m={5} textAlign={'left'}>After predict the Story Point value, "Explain Value" button appears below the "Predict" button.</Text>
            
            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Explain Value</Heading>
            <Text m={5} textAlign={'left'}>Clicking on this button enables the user to access an explanation of how the model predict Story Point value for their user story.</Text>

            <Imagesection />

            <Heading as='h5' size='md' ml={5} mt={10} color={'black.400'} textAlign={'left'}>Bulk Prediction</Heading>
            <Text m={5} textAlign={'left'}>Under the "Bulk Prediction" tab there is:</Text>

            <UnorderedList ml={10} textAlign={'left'}>
                <ListItem>CSV Mode</ListItem>
            </UnorderedList>

            <Text m={5} textAlign={'left'}>User can upload a CSV file with user stories and predict the Story Point values for all the user stories in the CSV file. When selecting the csv file ensure that your csv file include the following columns : 'ISSUE KEY', 'TITLE', 'DESCRIPTION'</Text>

            <Imagesection />

            <Text m={5} textAlign={'left'}>Once the file is successfully imported, the desired model can be selected for prediction. Then click the "Predict" button on the table corresponding to the user story to estimate the Story Point value.</Text>

            <Imagesection />

            <Text m={5} textAlign={'left'}>After predict the Story Point value, CSV file can be downloaded with predicted value.</Text>
            
            <Imagesection />
            
            </Container>
        </div>
    )
}