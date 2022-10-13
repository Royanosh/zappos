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
const url = `http://localhost:3001/gender`;
const Gender = (props) => {
  const [gender, setGender] = useState([]);
  // const { value, getCheckboxProps } = useCheckboxGroup();
  const { getCheckboxProps } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    setLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => {
        setGender(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlechange = (name) => {
    // let chk = e.target.value;
    console.log("gaurav---> ", name);
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
            Gender
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h4>
      <AccordionPanel pb={4} h="120px">
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
              {gender.map((elem) => (
                <Checkbox
                  key={elem.name}
                  spacing="0.8rem"
                  {...getCheckboxProps({ value: elem.name })}
                >
                  <Text fontSize={"sm"} fontWeight="500">
                    {elem.name}
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

export default Gender;
