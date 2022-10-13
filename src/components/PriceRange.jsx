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
const url = `http://localhost:3000/priceRange`;
const PriceRange = (props) => {
  const [data, setData] = useState([]);
  // const { value, getCheckboxProps } = useCheckboxGroup();
  const { scrollStyle, getCheckboxProps, setPriceRange } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    setLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
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
            Price
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h4>
      <AccordionPanel pb={4} h="120px" sx={scrollStyle}>
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
              {data.map((elem, i) => (
                <Checkbox
                  key={elem.name}
                  spacing="0.8rem"
                  {...getCheckboxProps({ value: elem.name })}
                >
                  <Text
                    onClick={() => {
                      if (i == 0) {
                        setPriceRange([0, 50]);
                      } else if (i == 1) {
                        setPriceRange([0, 100]);
                      } else if (i == 2) {
                        setPriceRange([0, 200]);
                      } else {
                        setPriceRange([200, 100000]);
                      }
                    }}
                    fontSize={"sm"}
                    fontWeight="500"
                  >
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

export default PriceRange;
