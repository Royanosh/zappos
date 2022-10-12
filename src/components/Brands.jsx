import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Input,
  Spinner,
  Stack,
  Text,
  useCheckboxGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const url = `http://localhost:3001/brands`;
const Brands = (props) => {
  const [brands, setBrands] = useState([]);
  // const { value, getCheckboxProps } = useCheckboxGroup();
  const [loading, setLoading] = useState(false);
  const { scrollStyle, getCheckboxProps } = props;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    setLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => {
        setBrands(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <AccordionItem p={"5px"}>
      <h4>
        <AccordionButton>
          <Box
            flex="1"
            textAlign="left"
            fontWeight="bold"
            fontSize="small"
            textTransform={"uppercase"}
          >
            Brand
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h4>
      <AccordionPanel pb={4} h="200px" sx={scrollStyle}>
        <Input mb="8px" placeholder="Search Brand" />
        <CheckboxGroup defaultValue={[""]}>
          {loading ? (
            <Center>
              <Spinner
                mt="40px"
                w="50px"
                h="50px"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : (
            <Stack spacing={[1]} direction={["column"]}>
              {brands.map((elem) => (
                <Checkbox
                  key={elem.name}
                  spacing="0.8rem"
                  {...getCheckboxProps({ value: elem.name })}
                >
                  <Text fontSize={"sm"} fontWeight="500">
                    {elem.name} ({elem.count})
                  </Text>
                </Checkbox>
              ))}
            </Stack>
          )}
        </CheckboxGroup>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Brands;
