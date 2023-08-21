import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const SignUp = () => {
    return (
        <VStack>
            <FormControl>
                <FormLabel></FormLabel>
                <Input placeholder='Enter your name'
                    onChange={() => ''}
                ></Input>
            </FormControl>
        </VStack>
    );
};

export default SignUp;