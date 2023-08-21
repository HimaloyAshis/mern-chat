import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react';
import SignUp from '../Authentication/SingUp/SignUp';
import Login from '../Authentication/Login/Login';

const Home = () => {
    return (
        <Container maxW={'xl'} centerContent>
            <Box
                d={'flex'}
                justifyContent={'center'}
                bg={'white'}
                w={'100%'}
                borderRadius={'lg'}
                borderWidth={'1px'}
                m={'40px 0 15px 0'}
                p={'1rem'}
            >

                <Text fontSize={'4xl'}>Chat with your</Text>

            </Box>

            <Box
                bg={'white'}
                w={'100%'}
                borderRadius={'lg'}
                borderWidth={'1px'}
                p={'1rem'}>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Sign Up</Tab>
                        <Tab>Login</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                           <SignUp></SignUp>
                        </TabPanel>
                        <TabPanel>
                            <Login></Login>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>

        </Container>
    );
};

export default Home;