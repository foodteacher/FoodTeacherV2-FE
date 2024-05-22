"use client";

import { PropsWithChildren } from "react";
import {
  Box,
  Flex,
  FlexProps,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { UseFormRegisterReturn, useController } from "react-hook-form";

type RadioCardType = UseRadioProps & FlexProps;

const CheckRadioCard = ({ h, ...props }: PropsWithChildren<RadioCardType>) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w={"100%"} left={0} h={h}>
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth={"1px"}
        borderRadius={"12px"}
        borderColor={"#EAEAEA"}
        alignItems={"flex-start"}
        bg={"#FFFFFF"}
        h={"60px"}
        fontSize={"18px"}
        fontWeight={"bold"}
        boxShadow={"0 0px 8px 0px rgba(28,0,51,0.08)"}
        _checked={{
          bg: "#FCF8FF",
          fontWeight: "bold",
          color: "#6D00A3",
          border: "2px solid #8A00FF",
          boxShadow: "0 0 12px 1px rgba(90,0,161,0.32)",
        }}
        padding={"20px 24px"}
        justifyContent={"center"}
        flexDir={"column"}
        gap={"30px"}
      >
        {props.children}
      </Flex>
    </Box>
  );
};

interface CustomRadioProps extends FlexProps {
  options: (string | number)[];
  name: string;
  register?: UseFormRegisterReturn;
  control?: any;
}

export const CheckRadio = ({
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
    <Flex {...group} {...props} padding={"0"} gap={"16px"}>
      {options.map((value: string | number) => {
        const radio = getRadioProps({ value });
        return (
          <CheckRadioCard key={value} {...radio} {...props}>
            {value}
          </CheckRadioCard>
        );
      })}
    </Flex>
  );
};
