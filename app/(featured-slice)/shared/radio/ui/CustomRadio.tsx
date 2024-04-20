"use client";

import { PropsWithChildren } from "react";
import {
  Box,
  HStack,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";

export const RadioCard = (props: PropsWithChildren<UseRadioProps>) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
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
        // _focus={{
        //   boxShadow: "outline",
        // }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

interface CustomRadioProps {
  options: (string | number)[];
  name: string;
  control?: any;
}

export const CustomRadio = ({ options, name, control }: CustomRadioProps) => {
  const { field } = useController({
    name,
    control,
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value: string | number) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
