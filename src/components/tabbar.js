import React from "react";
import { Tabs, TabList, TabPanels, Tab} from '@chakra-ui/react';
import TabpanelComponent from "./tabpanel";

const Tabbar = () => {
    return (
        <Tabs isFitted variant='enclosed' colorScheme='green.700'>
            <TabList mb='1em'>
                <Tab color={"green.600"} fontWeight={"bold"}>Installation</Tab>
                <Tab color={"blue.600"} fontWeight={"bold"}>User Manual</Tab>
            </TabList>
            <TabPanels>
                <TabpanelComponent type="installation"/>
                <TabpanelComponent type="user-manual"/>
            </TabPanels>
        </Tabs>
    )
}

export default Tabbar;