"use client";

import { PropsWithChildren } from "react";
import {
  Box,
  Flex,
  FlexProps,
  HStack,
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
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          //   borderColor: "red",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        w={w}
        h={h}
        padding={padding}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={"16px"}
      >
        <svg
          width="43"
          height="46"
          viewBox="0 0 43 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="10" r="10" fill="#D9D9D9" />
          <path
            d="M0 35C0 28.3726 5.37258 23 12 23H31C37.6274 23 43 28.3726 43 35V44C43 45.1046 42.1046 46 41 46H2C0.895431 46 0 45.1046 0 44V35Z"
            fill="#D9D9D9"
          />
        </svg>
        {props.children}
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

  console.log(field);

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value: string | number) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio} {...props}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
