import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Circle,
  Collapse,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
  Spacer,
  Spinner,
  Square,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useCheckboxGroup,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GoComment } from "react-icons/go";
import { AiOutlineCloseCircle, AiOutlineHeart } from "react-icons/ai";

import { ChevronDownIcon, PhoneIcon, StarIcon } from "@chakra-ui/icons";
import Product from "../components/Product";
import Brands from "../components/Brands";
import PriceRange from "../components/PriceRange";
import Colors from "../components/Colors";
import Gender from "../components/Gender";
import { NavLink, useParams } from "react-router-dom";
const url = `http://localhost:3000`;

const Products = () => {
  const { value, getCheckboxProps } = useCheckboxGroup();
  const [data, setData] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [loading, setLoading] = useState(false);
  let { cat } = useParams();
  console.log("PriceRange", priceRange);
  const priceRangeUrl =
    priceRange[0] >= 0
      ? `&price_gte=${priceRange[0]}&price_lte=${priceRange[1]}`
      : "";
  const [sortPrice, setSortPrice] = useState("");
  const sortPriceUrl =
    sortPrice === "" ? "" : `&_sort=price&_order=${sortPrice}`;

  useEffect(() => {
    fetchData();
  }, [sortPrice, priceRangeUrl]);
  const fetchData = () => {
    setLoading(true);
    const gender = cat;
    fetch(`${url}/${gender}?_limit=100&_page=1${sortPriceUrl}${priceRangeUrl}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (event) => {
    setSortPrice(event.target.value);
  };
  const scrollStyle = {
    overflow: "auto",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "0.3em",
      height: "1em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      height: "1em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
      height: "1em",
    },
  };
  console.log("Value", value);

  return (
    <>
      <Center>
        <Flex w="95%">
          <Box p="4">
            <Heading size="lg">
              {
                cat==="menscloths" ? "Men's Clothings" : cat==="womencloths" ? "Women's Clothings" : cat==="menssneakers" ? "Men's Sneakers & Shoes" : "Women's Sneakers & Shoes"

              }
            </Heading>
            <Text fontSize="xl">5099 items found</Text>
            <Flex>
              <Box marginRight="5px">
                <Text fontSize="sm">Have Feedback?</Text>
              </Box>
              <Center>
                <Box>
                  <GoComment />
                </Box>
              </Center>
            </Flex>
          </Box>
          <Spacer />
          <Box p="4">
            <Flex>
              <Center>
                <Box marginRight="10px" verticalAlign="Center">
                  <Text fontSize="xl">Sort By:</Text>
                </Box>
              </Center>
              <Box>
                <Select placeholder="Relevance" onChange={handleChange}>
                  <option value="relevance">Relevance</option>
                  <option value="newArrivals">New Arrivals</option>
                  <option value="customerRating">Customer Rating</option>
                  <option value="bestSeller">Best Sellers</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                  <option value="brandName">Brand Name</option>
                </Select>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Center>
      <Center>
        <Flex w="95%" spacing="10px" m={"8px"}>
          <Box
            mr={3}
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
          >
            <Box w={"17rem"} bg="#fff" flexDirection="0 0 280px">
              <VStack align="stretch">
                <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
                  <Gender getCheckboxProps={getCheckboxProps} />
                  <Brands
                    getCheckboxProps={getCheckboxProps}
                    scrollStyle={scrollStyle}
                  />
                  <PriceRange
                    setPriceRange={setPriceRange}
                    getCheckboxProps={getCheckboxProps}
                  />
                  <Colors
                    getCheckboxProps={getCheckboxProps}
                    scrollStyle={scrollStyle}
                  />
                </Accordion>
              </VStack>
            </Box>
          </Box>
          <Box
            w="90vw"
            maxW={{
              base: "full",
              md: "container.xl",
              xl: "container.2xl",
            }}
          >
            <Text fontSize={"2xl"}>Your Selection</Text>
            <HStack mt="10px">
              {value.map((el, i) => (
                <Button
                  key={Date.now() + Math.random() + el}
                  alignItems="center"
                  borderRadius={50}
                  bg="#e5f1f8"
                  color="#0076bd"
                >
                  {el}
                  <Center ml="4px" mt="4px">
                    <AiOutlineCloseCircle />
                  </Center>
                </Button>
              ))}

              {/* <Button
                alignItems="center"
                borderRadius={50}
                bg="#e5f1f8"
                color="#0076bd"
              >
                Women's
                <Center ml="4px" mt="4px">
                  <AiOutlineCloseCircle />
                </Center>
              </Button>
              <Button
                alignItems="center"
                borderRadius={50}
                bg="#e5f1f8"
                color="#0076bd"
              >
                Girls
                <Center ml="4px" mt="4px">
                  <AiOutlineCloseCircle />
                </Center>
              </Button>

              <Button
                alignItems="center"
                borderRadius={50}
                bg="transparent"
                border="1px solid #ddd"
                color="#003953"
              >
                Girls
              </Button>
              <Button
                alignItems="center"
                borderRadius={50}
                bg="transparent"
                border="1px solid #ddd"
                color="#003953"
              >
                Girls
              </Button>
              <Button
                alignItems="center"
                borderRadius={50}
                bg="transparent"
                border="1px solid #ddd"
                color="#003953"
              >
                Girls
              </Button> */}
            </HStack>
            <Box mt={"5px"}>
              {loading ? (
                <Center>
                  <Spinner
                    mt="100px"
                    w="100px"
                    h="100px"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Center>
              ) : (
                <SimpleGrid minChildWidth="220px" spacing="10px" m={5}>
                  {data.map((elem, i) => (
                    <NavLink to={`/category/${cat}/${elem.id}`}>
                    <Product key={i} elem={elem} i={i} />
                    </NavLink>
                  ))}
                </SimpleGrid>
              )}
            </Box>
            {/* <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
              "2xl": "repeat(4,1fr)",
            }}
            gap={6}
            m="10px"
          >
            <GridItem>
              <Box maxW="sm" overflow="hidden">
                <Flex pos="relative">
                  <Image src={property.imageUrl} alt={property.imageAlt} />
                  <Flex
                    pos="absolute"
                    w="40px"
                    zIndex={4}
                    bg="white"
                    right="0"
                    justifyContent="space-around"
                    borderEndStartRadius="5px"
                  >
                    <Box as="button">
                      <AiOutlineHeart />
                    </Box>

                    <Box>
                      <Text>7</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Box p="1">
                  <Link>
                    <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
                      {property.brandName}
                    </Box>
                    <Box as="p" noOfLines={1}>
                      {property.title}
                    </Box>
                  </Link>

                  <Box>{property.formattedPrice}</Box>

                  <Box display="flex" mt="1" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      ({property.reviewCount})
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW="sm" overflow="hidden">
                <Flex pos="relative">
                  <Image src={property.imageUrl} alt={property.imageAlt} />
                  <Flex
                    pos="absolute"
                    w="40px"
                    zIndex={4}
                    bg="white"
                    right="0"
                    justifyContent="space-around"
                    borderEndStartRadius="5px"
                  >
                    <Box as="button">
                      <AiOutlineHeart />
                    </Box>

                    <Box>
                      <Text>7</Text>
                    </Box>
                  </Flex>
                </Flex>

                <Box p="1">
                  <Link>
                    <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
                      {property.brandName}
                    </Box>
                    <Box as="p" noOfLines={1}>
                      {property.title}
                    </Box>
                  </Link>

                  <Box>{property.formattedPrice}</Box>

                  <Box display="flex" mt="1" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      ({property.reviewCount})
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW="sm" overflow="hidden">
                <Flex pos="relative">
                  <Image src={property.imageUrl} alt={property.imageAlt} />
                  <Flex
                    pos="absolute"
                    w="40px"
                    zIndex={4}
                    bg="white"
                    right="0"
                    justifyContent="space-around"
                    borderEndStartRadius="5px"
                  >
                    <Box as="button">
                      <AiOutlineHeart />
                    </Box>

                    <Box>
                      <Text>7</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Box p="1">
                  <Link>
                    <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
                      {property.brandName}
                    </Box>
                    <Box as="p" noOfLines={1}>
                      {property.title}
                    </Box>
                  </Link>

                  <Box>{property.formattedPrice}</Box>

                  <Box display="flex" mt="1" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      ({property.reviewCount})
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW="sm" overflow="hidden">
                <Flex pos="relative">
                  <Image src={property.imageUrl} alt={property.imageAlt} />
                  <Flex
                    pos="absolute"
                    w="40px"
                    zIndex={4}
                    bg="white"
                    right="0"
                    justifyContent="space-around"
                    borderEndStartRadius="5px"
                  >
                    <Box as="button">
                      <AiOutlineHeart />
                    </Box>

                    <Box>
                      <Text>7</Text>
                    </Box>
                  </Flex>
                </Flex>

                <Box p="1">
                  <Link>
                    <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
                      {property.brandName}
                    </Box>
                    <Box as="p" noOfLines={1}>
                      {property.title}
                    </Box>
                  </Link>

                  <Box>{property.formattedPrice}</Box>

                  <Box display="flex" mt="1" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      ({property.reviewCount})
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW="sm" overflow="hidden">
                <Flex pos="relative">
                  <Image src={property.imageUrl} alt={property.imageAlt} />
                  <Flex
                    pos="absolute"
                    w="40px"
                    zIndex={4}
                    bg="white"
                    right="0"
                    justifyContent="space-around"
                    borderEndStartRadius="5px"
                  >
                    <Box as="button">
                      <AiOutlineHeart />
                    </Box>

                    <Box>
                      <Text>7</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Box p="1">
                  <Link>
                    <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
                      {property.brandName}
                    </Box>
                    <Box as="p" noOfLines={1}>
                      {property.title}
                    </Box>
                  </Link>

                  <Box>{property.formattedPrice}</Box>

                  <Box display="flex" mt="1" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      ({property.reviewCount})
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW="sm" overflow="hidden">
                <Flex pos="relative">
                  <Image src={property.imageUrl} alt={property.imageAlt} />
                  <Flex
                    pos="absolute"
                    w="40px"
                    zIndex={4}
                    bg="white"
                    right="0"
                    justifyContent="space-around"
                    borderEndStartRadius="5px"
                  >
                    <Box as="button">
                      <AiOutlineHeart />
                    </Box>

                    <Box>
                      <Text>7</Text>
                    </Box>
                  </Flex>
                </Flex>

                <Box p="1">
                  <Link>
                    <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
                      {property.brandName}
                    </Box>
                    <Box as="p" noOfLines={1}>
                      {property.title}
                    </Box>
                  </Link>

                  <Box>{property.formattedPrice}</Box>

                  <Box display="flex" mt="1" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      ({property.reviewCount})
                    </Box>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid> */}{" "}
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default Products;
