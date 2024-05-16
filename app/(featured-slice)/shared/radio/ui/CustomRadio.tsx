"use client";

import { PropsWithChildren } from "react";
import {
  Box,
  Flex,
  FlexProps,
  Radio,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";

type RadioCardType = UseRadioProps & FlexProps;

export const RadioCard = ({
  w,
  h,
  padding,
  ...props
}: PropsWithChildren<RadioCardType>) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w={"100%"} left={0} h={h}>
      {/* <input {...input} /> */}
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth={"1px"}
        borderRadius={"8px"}
        borderColor={"#EAEAEA"}
        alignItems={"flex-start"}
        bg={"#F6F4F1"}
        _checked={{
          bg: "#FAF7FC",
          fontWeight: "bold",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        padding={padding}
        justifyContent={"center"}
        flexDir={"column"}
        gap={"30px"}
      >
        {/* {props.children} */}
        <Radio
          {...props}
          // {...checkbox}
          size={"lg"}
          flexDir={"row"}
          bg={"white"}
          borderColor={"#E1E1E1"}
          color={"#D0CECB"}
          // _checked={{ bg: "red", borderColor: "#8F00FF", color: "#8F00FF" }}
        />
      </Flex>
    </Box>
  );
};

interface CustomRadioProps extends FlexProps {
  options: (string | number)[];
  name: string;
  control?: any;
}

export const CustomRadio = ({
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

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });

  const group = getRootProps();

  return (
    <Flex {...group} {...props} padding={"0"}>
      {options.map((value: string | number) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio} {...props}>
            {value}
          </RadioCard>
        );
      })}
    </Flex>
  );
};
