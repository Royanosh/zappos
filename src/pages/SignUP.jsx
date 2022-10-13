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
const SignUP = () => {
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
          <Box p="10px" border="1px solid grey" borderRadius={"5px"}>
            <FormControl>
              <Text fontSize="3xl">Create account</Text>
              <FormLabel>Your name</FormLabel>
              <Input placeholder="First and last name" />
              <FormLabel>Email</FormLabel>
              <Input type="email" />
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="At least 6 characters" />
              <FormHelperText>
                Passwords must be at least 6 characters.
              </FormHelperText>
              <FormLabel>Re-enter password</FormLabel>
              <Input type="password" />
              <Button
                mt={"5px"}
                bg="#003953"
                color="white"
                w="100%"
                colorScheme="grey"
                variant="outline"
              >
                CREATE YOUR ZAPPOS ACCOUNT
              </Button>

              <Text>
                Don't have an email address or need additional help? Don't
                worry! Give us a call at{" "}
                <Link color="#003953">(800) 927-7671</Link>
              </Text>
              <Text>
                Registering means you agree to the Zappos{" "}
                <Link color="#003953">terms of use</Link> and{" "}
                <Link color="#003953">privacy policy</Link>
              </Text>
              <Divider />

              <Text>
                Already have an account?<Link color="#003953">Sign in</Link>
              </Text>
            </FormControl>
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default SignUP;
