"use client";

import { PropsWithChildren } from "react";
import {
  Box,
  Flex,
  FlexProps,
  Input,
  Radio,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";

type RadioCardType = UseRadioProps & FlexProps;

const RadioCard = ({
  w,
  h,
  padding,
  ...props
}: PropsWithChildren<RadioCardType>) => {
  const { getInputProps, getRadioProps, getLabelProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  const label = getLabelProps();
  return (
    <Box as="label" w={"100%"} left={0} h={h}>
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth={"1px"}
        borderRadius={"8px"}
        borderColor={"#EAEAEA"}
        alignItems={"flex-start"}
        h={"80px"}
        bg={"#FFFFFF"}
        _checked={{
          bg: "#FAF7FC",
          fontWeight: "bold",
        }}
        _focus={{
          boxShadow: "none",
        }}
        padding={padding}
        justifyContent={"center"}
        flexDir={"column"}
        gap={"30px"}
      >
        <Radio
          {...props}
          size={"lg"}
          flexDir={"row"}
          gap={"0px"}
          _checked={{
            bg: "white",
            borderColor: "#8F00FF",
            color: "#8F00FF",
            _before: {
              content: "''",
              display: "inline-block",
              pos: "relative",
              w: "10px",
              h: "10px",
              borderRadius: "50%",
              bg: "currentColor",
            },
          }}
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

export const FrontRadio = ({
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
    <Flex {...group} {...props} padding={"0"} h={"80px"}>
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
