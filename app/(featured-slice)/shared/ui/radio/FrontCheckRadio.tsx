"use client";

import { PropsWithChildren } from "react";
import {
  Box,
  CheckboxProps,
  Flex,
  FlexProps,
  Text,
  UseRadioProps,
  useCheckbox,
  useCheckboxGroup,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";

type RadioCardType = UseRadioProps & CheckboxProps;

const CheckRadioCard = ({ h, ...props }: PropsWithChildren<RadioCardType>) => {
  //   const { getInputProps, getRadioProps } = useRadio(props);

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    // <Box as="label" w={"100%"} left={0} h={h}>
    //   <input {...input} />
    //   <Flex
    //     {...checkbox}
    //     cursor="pointer"
    //     borderWidth={"1px"}
    //     borderRadius={"12px"}
    //     borderColor={"#EAEAEA"}
    //     alignItems={"flex-start"}
    //     bg={"#FFFFFF"}
    //     h={"60px"}
    //     fontSize={"18px"}
    //     fontWeight={"bold"}
    //     boxShadow={"0 0px 8px 0px rgba(28,0,51,0.08)"}
    //     _checked={{
    //       bg: "#FCF8FF",
    //       fontWeight: "bold",
    //       color: "#6D00A3",
    //       border: "2px solid #8A00FF",
    //       boxShadow: "0 0 12px 1px rgba(90,0,161,0.32)",
    //     }}
    //     padding={"20px 24px"}
    //     justifyContent={"center"}
    //     flexDir={"column"}
    //     gap={"30px"}
    //   >
    //     {props.children}
    //   </Flex>
    // </Box>

    <Text
      as={"label"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="36"
      bg="green.50"
      border="1px solid"
      borderColor="green.500"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>
        {props.children}
      </Text>
    </Text>
  );
};

interface CustomRadioProps extends FlexProps {
  options: (string | number)[];
  name: string;
  control?: any;
}

export const FrontCheckRadio = ({
  options,
  name,
  control,
  ...props
}: CustomRadioProps) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  const { getCheckboxProps } = useCheckboxGroup({
    ...field,
  });

  return (
    <Flex {...props} padding={"0"} gap={"16px"}>
      {options.map((value: string | number) => {
        const radio = getCheckboxProps({ value });
        return (
          <CheckRadioCard key={value} {...radio}>
            {value}
          </CheckRadioCard>
        );
      })}
    </Flex>
  );
};
