import { Box, Center, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import PopularCarousel from "./PopularCarousel";


const PopularCategory = () => {


    return (
        <Box>
            <Text
            mt={{base:'300px', sm:'300px', md:'10px', lg:'25px', xl:'25px'}}
            fontWeight='bold' fontSize='30px' mb='20px' ml='2%'
            >Shop Popular Categories</Text>


            <Grid templateColumns='repeat(6, 1fr)' gap={2} w='95%' m='auto'
            display={{base:'none', sm:'none', md:'grid', lg:'grid', xl:'grid'}}
            >
                <GridItem w='100%' h='350px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/71CNa3Q3lTL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/61+on0q5FHL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/71XNQyih6WL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/71ARoYPrJ6L._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/61Jq4k1kyyL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/91ZXKHtVTcL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

            </Grid>
            {/* display={{base:'block', sm:'block', md:'none', lg:'none', xl:'none'}} */}
            <Box display={{base:'block', sm:'block', md:'none', lg:'none', xl:'none'}}>
            <PopularCarousel/>
            </Box>
        </Box>
    )
}

export default PopularCategory;