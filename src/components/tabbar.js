import React from "react";
import { Tabs, TabList, TabPanels, Tab} from '@chakra-ui/react';
import TabpanelComponent from "./tabpanel";

const Tabbar = () => {

    return (
        <Tabs isFitted variant='enclosed' colorScheme='green'>
            <TabList mb='1em'>
                <Tab>Installation</Tab>
                <Tab>User Manual</Tab>
            </TabList>
            <TabPanels>
                <TabpanelComponent type="installation"/>
                <TabpanelComponent type="user-manual"/>
            </TabPanels>
        </Tabs>
    )
}

export default Tabbar;