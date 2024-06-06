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
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { CheckBoxCheckIcon, CheckBoxIcon } from "../Icons";

type RadioCardType = UseRadioProps & CheckboxProps;

const CheckBoxCard = ({ h, ...props }: PropsWithChildren<RadioCardType>) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  const isChecked = state.isChecked;

  return (
    <Text
      as={"label"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      w={"100%"}
      border={isChecked ? "2px solid #8A00FF" : "1px solid #EAEAEA"}
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      bg={isChecked ? "#FCF8FF" : "#FFFFFF"}
      h={"60px"}
      fontSize={"18px"}
      fontWeight={isChecked ? "bold" : "normal"}
      boxShadow={
        isChecked
          ? "0 0 12px 1px rgba(90,0,161,0.32)"
          : "0 0px 8px 0px rgba(28,0,51,0.08)"
      }
      padding={"20px 24px"}
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      {isChecked ? (
        <Flex marginLeft={"-2px"}>
          <CheckBoxCheckIcon />
        </Flex>
      ) : (
        <Flex {...getCheckboxProps()}>
          <CheckBoxIcon />
        </Flex>
      )}
      <Text color={isChecked ? "#6D00A3" : "black"} {...getLabelProps()}>
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

export const FrontCheckBox = ({
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
        const checkbox = getCheckboxProps({ value });

        return (
          <CheckBoxCard key={value} {...checkbox}>
            {value}
          </CheckBoxCard>
        );
      })}
    </Flex>
  );
};
