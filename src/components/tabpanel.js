import React from "react";
import {TabPanel,Flex } from '@chakra-ui/react';
import BoxComponent from './box';

const TabpanelComponent = ({ type }) => {
    return (
        <TabPanel>
                <Flex>
                    {type === 'installation' &&
                        <BoxComponent
                        w="50%"
                        headingText="SPGenie Tool - Frontend"
                        bodyText="SPGenie Tool is a tool to predict story points for a given user story."
                        type={type}
                        to='spgenie-tool-frontend'
                        />
                    }
                    
                    {type === 'user-manual' &&
                        <BoxComponent
                        w="100%"
                        headingText="SPGenie Tool - Frontend"
                        bodyText="SPGenie Tool is a tool to predict story points for a given user story."
                        type={type}
                        to='spgenie-tool-frontend'
                        />
                    }

                    {type === 'installation' && 
                        <BoxComponent
                            w="50%"
                            headingText="SPGenie Tool - Backend"
                            bodyText="SPGenie Tool is a tool to predict story points for a given user story."
                            type={type}
                            to='spgenie-tool-backend'
                        />
                    
                    }
                    
                </Flex>
                <Flex>
                    <BoxComponent
                        w="50%"
                        headingText="Jira Plugin"
                        bodyText="Jira Plugin is a plugin to predict story points for a given user story in Jira."
                        type={type}
                        to='jira-plugin'
                    />
                    <BoxComponent
                        w="50%"
                        headingText="Chrome Extension"
                        bodyText="Chrome Extension to predict story points for a given user story"
                        type={type}
                        to='chrome-extension'
                    />
                </Flex>
        </TabPanel>
    )
}

export default TabpanelComponent;