import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Circle,
  Flex,
  Grid,
  HStack,
  Image,
  Select,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillLock,
  AiOutlineHeart,
  AiOutlineLeft,
  AiOutlineLock,
  AiOutlineRight,
} from "react-icons/ai";
import { BsArrow90DegLeft, BsStars } from "react-icons/bs";
import { IoIosAirplane } from "react-icons/io";

const Cart = () => {
  return (
    <>
      <Box p="5px" bg={"#e5f1f8"}>
        <Flex
          fontSize={{ base: "xs", sm: "sm", md: "md", xl: "md" }}
          justifyContent={"space-between"}
          w={{ sm: "90vw", md: "80vw", xl: "80vw" }}
          m="auto"
        >
          <Box>
            <Button bg="#e5f1f8" _hover={{ bg: "#e5f1f8" }}>
              <AiOutlineLeft />
            </Button>
          </Box>
          <Box>
            <Text>
              <b>FREE 365 Day Returns and Exchanges! </b>
            </Text>
          </Box>
          <Box>
            <Button bg="#e5f1f8" _hover={{ bg: "#e5f1f8" }}>
              <AiOutlineRight />
            </Button>
          </Box>
        </Flex>
        <Center fontSize={{ base: "xs", sm: "sm", md: "md", xl: "md" }}>
          <BsStars color="#28AFBD" />
          <Text ml={"5px"}>
            Check out to earn Zappos VIP points worth up to <b>$6.00</b> in VIP
            codes.
            <Text ml="3px" as={"u"}>
              Join today to start earning!
            </Text>
          </Text>
        </Center>
      </Box>
      <Box w="90vw" m="auto" mt={"10px"}>
        <Flex>
          <Center>
            <AiOutlineLeft />
            <Box
              color={"#003953"}
              borderBottom={"1px solid #003953"}
              textTransform="uppercase"
              fontWeight={"700"}
              ml="1px"
            >
              <a href="#">Continue Shopping</a>
            </Box>
          </Center>
        </Flex>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
          }}
          gap={3}
          mt="10px"
        >
          <HStack
            w={{ sm: "90vw", md: "44vw", xl: "44vw" }}
            bg={"#f5f5f5"}
            p="10px"
          >
            <Circle
              transform="rotate(-30deg)"
              size="30px"
              bg="blue.600"
              color="white"
              mt={-8}
            >
              <IoIosAirplane size={"20px"} />
            </Circle>
            <Box>
              <Text>Free Shipping and Returns</Text>
              <Text fontSize={"xs"}>
                365 days to return items for a refund!
              </Text>
              <Box
                color={"#003953"}
                borderBottom={"1px solid #003953"}
                textTransform="uppercase"
                fontWeight={"700"}
                ml="1px"
                w={"fit-content"}
              >
                <a href="#">SHIPPING AND RETURN POLICY</a>
              </Box>
            </Box>
          </HStack>

          <HStack
            w={{ sm: "90vw", md: "44vw", xl: "44vw" }}
            bg={"#f5f5f5"}
            padding="10px"
          >
            <Circle size="30px" bg="red.800" color="white" mt={-8}>
              <AiFillLock size={"20px"} />
            </Circle>
            <Box>
              <Text>Privacy Policy</Text>
              <Text fontSize={"xs"}>
                We don’t rent or sell your personal information to anyone.
              </Text>
              <Box
                color={"#003953"}
                borderBottom={"1px solid #003953"}
                textTransform="uppercase"
                fontWeight={"700"}
                ml="1px"
                w={"fit-content"}
              >
                <a href="#">READ OUR PRIVACY POLICY</a>
              </Box>
            </Box>
          </HStack>
        </Grid>
        <Text mt={2} fontSize={"2xl"} fontWeight="400">
          2 items in My Cart Item
        </Text>
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
          }}
          gap={6}
          // justifyContent={"space-between"}
          mt="10px"
          mb="10px"
        >
          <Box
            border={"1px solid grey"}
            w={{ sm: "90vw", md: "60vw", xl: "60vw" }}
          >
            <Flex
              ml={0}
              p={"5px 10px"}
              bg={"#003953"}
              color="white"
              justifyContent={"space-between"}
            >
              <Box>
                <Text>Item</Text>
              </Box>
              <Box>
                <Text>Price/Quantity</Text>
              </Box>
            </Flex>
            <Box>
              <Flex p={2} w="90%" justifyContent="space-between">
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

                <Box>
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
            <Box>
              <Flex p={2} w="90%" justifyContent="space-between">
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

                <Box>
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
          </Box>
          <Box w={{ sm: "90vw", md: "28vw", xl: "28vw" }}>
            <Box
              border={"1px solid grey"}
              bg="#f9f9f9"
              w={{ sm: "90vw", md: "28vw", xl: "28vw" }}
              p={"20px"}
              h="-webkit-fit-content"
            >
              <Box>
                <Button
                  fontSize={{ base: "md", sm: "md", md: "sm", xl: "md" }}
                  w={"100%"}
                  bg="#a7e688"
                  color="#003953"
                >
                  PROCEED T0 CHECKOUT
                </Button>
              </Box>
              <Text fontSize={"xs"} mt="10px">
                Have a Promotional Code? Proceed to checkout to redeem it.
              </Text>
              <Text
                fontWeight={"500"}
                fontSize={{ base: "xl", sm: "xl", md: "md", xl: "xl" }}
              >
                Cart Summary (2 Items)
              </Text>
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Text
                    fontWeight={"500"}
                    fontSize={{ base: "xl", sm: "xl", md: "md", xl: "xl" }}
                  >
                    Subtotal (2 items)
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight={"500"}
                    fontSize={{ base: "xl", sm: "xl", md: "md", xl: "xl" }}
                  >
                    $299.90
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Text mt={"10px"} fontSize={"xs"}>
              Zappos.com LLC is required by law to collect sales tax on orders
              shipped to specific states. Appropriate charges will be added to
              your merchandise total and displayed for your review at checkout.
            </Text>
            <Text mt={"10px"} fontSize={"xs"}>
              Unless otherwise noted, all products are sold by Zappos.com LLC.
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Cart;
