import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        My Cart
      </Button>
      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody m={0} p={0}>
            <Box p="5px" bg={"#e5f1f8"}>
              <Center>
                <BsStars color="#28AFBD" />
                <Text ml={"5px"}>
                  Check out to earn up to <b>$0.57</b> in VIP points
                </Text>
              </Center>
            </Box>
            <Box>
              <Flex p={2}>
                <Flex>
                  <Box borderRadius={2} boxShadow={"md"} position={"relative"}>
                    <Box
                      padding={"4px 6px"}
                      boxShadow="sm"
                      borderEndStartRadius={"10px"}
                      bg={"white"}
                      position={"absolute"}
                      right="0"
                      top={0}
                    >
                      <AiOutlineHeart />
                    </Box>
                    <Image
                      w={"150px"}
                      h="200px"
                      src="https://m.media-amazon.com/images/I/71CNa3Q3lTL._SR255,340__FMwebp_.jpg"
                      alt="https://m.media-amazon.com/images/I/71CNa3Q3lTL._SR255,340__FMwebp_.jpg"
                    />
                  </Box>
                  <Box pl="10px">
                    <Text>ASICS</Text>
                    <Text>
                      <b>GEL-Sonoma 6</b>
                    </Text>
                    <Text>Color: French Blue/Black</Text>
                    <Text>Size: 7</Text>
                    <Text>Width: B - Medium</Text>
                  </Box>
                </Flex>

                <Box ml="40px">
                  <Text color={"red"}>$56.31</Text>
                  <Text as={"del"}>$56.31</Text>
                  <Select mt={"5px"} mb={"5px"} w={"80px"}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Select>
                  <Button
                    bg={"initial"}
                    borderWidth="0"
                    borderBottom={"1px solid #003953"}
                    color="#003953"
                    borderRadius={0}
                    textDecoration="none"
                    padding="0"
                    _hover={{
                      bg: "white",
                      color: "teal",
                      borderBottom: "1px solid teal",
                    }}
                  >
                    REMOVE
                  </Button>
                </Box>
              </Flex>
            </Box>
          </DrawerBody>

          <DrawerFooter display={"block"} bg={"#f5f5f5"}>
            <Text mb={"5px"} textAlign={"right"}>
              Cart Subtotal (1 Item)$56.31
            </Text>
            <Flex>
              <Box>
                <Button
                  border={"2px solid #003953"}
                  color="#003953"
                  _hover={{
                    bg: "#003953",
                    color: "white",
                  }}
                >
                  {" "}
                  VIEW CART
                </Button>
              </Box>
              <Spacer />
              <Box>
                <Button bg="#a7e688" color="#003953">
                  PROCEED T0 CHECKOUT
                </Button>
              </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyCart;
