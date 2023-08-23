import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()

    return (
        <VStack>
            <FormControl id='first-name' isRequired>
                <FormLabel >Name</FormLabel>
                <Input placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                ></Input>
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel >Email</FormLabel>
                <Input placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel >Password</FormLabel>
                <Input placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                ></Input>
            </FormControl>
        </VStack>
    );
};

export default SignUp;