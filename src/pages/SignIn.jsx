import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <Center>
        <VStack w="25vw" m="20px">
          <Box m={3}>
            <Image
              src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
              alt="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
            />
          </Box>
          <Box p="25px" border="1px solid grey" borderRadius={"5px"}>
            <FormControl>
              <Text fontSize="3xl">Sign-In</Text>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter Email"/>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="At least 6 characters" />
              <Button
                mt={"20px"}
                bg="#003953"
                color="white"
                w="100%"
                colorScheme="grey"
                variant="outline"
              >
                Sign in
              </Button>

              <NavLink to="/signup">
              <Button
                mt={"20px"}
                color="#003953"
                border={"1px solid #003953"}
                w="100%"
                colorScheme="grey"
                variant="outline"
              >
                CREATE YOUR ZAPPOS ACCOUNT
              </Button>
              </NavLink>
            </FormControl>
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default SignIn;
