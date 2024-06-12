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
import { UseFormRegisterReturn, useController } from "react-hook-form";
import { TextValueOptionType } from "@/app/(featured-slice)/widgets/signup-funnel/const/const";

type RadioCardType = UseRadioProps & FlexProps;

const RadioCard = ({
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
          borderColor="#E1E1E1"
          _before={{
            content: "''",
            display: "inline-block",
            pos: "relative",
            w: "10px",
            h: "10px",
            borderRadius: "50%",
            bg: "#D0CECB",
          }}
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
  options: TextValueOptionType[];
  name: string;
  register?: UseFormRegisterReturn;
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
      {options?.map((value: TextValueOptionType) => {
        const radio = getRadioProps({ value: value.optionId });
        return (
          <RadioCard key={value.optionId} {...radio} {...props}>
            {value.text}
          </RadioCard>
        );
      })}
    </Flex>
  );
};
