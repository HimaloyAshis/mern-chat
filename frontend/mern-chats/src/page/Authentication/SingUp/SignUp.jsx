import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState(false)

    const handleClick =()=> setShow(!show)

    const postDetails =(pic)=> {
        ''
    }


    const submitHandler =()=>{
        ''
    }

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
                <InputGroup>
                    <Input type={show? 'text': 'password'} placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                    <InputRightElement width={'4.5rem'}>
                    <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                        {show? "Hide": 'Show'}
                    </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='ConfirmPassword' isRequired>
                <FormLabel >Password</FormLabel>
                <InputGroup>
                    <Input type={show? 'text': 'password'} placeholder='Enter your ConfirmPassword'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Input>
                    <InputRightElement width={'4.5rem'}>
                    <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                        {show? "Hide": 'Show'}
                    </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            
            <FormControl id='photo' isRequired>
                <FormLabel >Upload your Photo</FormLabel>
                <Input placeholder='Enter your Photo url'
                    onChange={(e) => postDetails(e.target.file[0])}
                    type='file'
                    p={'1.5'}
                    accept='image/*'
                ></Input>
            </FormControl>
            <Button
            colorScheme='blue'
            width={'100%'} 
            style={{marginTop:15}}
            onClick={submitHandler}
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default SignUp;