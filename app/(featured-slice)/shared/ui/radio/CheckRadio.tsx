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
import { CheckIcon } from "../Icons";
import { TextValueOptionType } from "@/app/(featured-slice)/widgets/signup-funnel/const/const";

type RadioCardType = UseRadioProps & FlexProps;

interface CheckRadioCard extends RadioCardType {
  text: string | number;
}

const CheckRadioCard = ({
  h,
  text,
  ...props
}: PropsWithChildren<CheckRadioCard>) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  const isChecked = props.isChecked;

  return (
    <Box as="label" w={"100%"} left={0} h={h}>
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth={"1px"}
        borderRadius={"12px"}
        borderColor={"#EAEAEA"}
        alignItems={"center"}
        bg={"#FFFFFF"}
        h={"60px"}
        fontSize={"18px"}
        fontWeight={"bold"}
        boxShadow={"0 0px 8px 0px rgba(28,0,51,0.08)"}
        _checked={{
          bg: "#FAF4FF",
          fontWeight: "bold",
          color: "#6D00A3",
          border: "2px solid #8A00FF",
          boxShadow: "0 0 12px 1px rgba(90,0,161,0.32)",
        }}
        padding={"20px 24px"}
        justifyContent={"space-between"}
        gap={"30px"}
      >
        {/* {props.children} */}
        {text}
        {isChecked && <CheckIcon />}
      </Flex>
    </Box>
  );
};

interface CustomRadioProps extends FlexProps {
  options: any;
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
      {options?.map((value: TextValueOptionType) => {
        const radio = getRadioProps({ value: value.optionId });

        return (
          <CheckRadioCard
            key={value.optionId}
            {...props}
            {...radio}
            text={value.text}
          />
        );
      })}
    </Flex>
  );
};
