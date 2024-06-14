"use client";

import { PropsWithChildren, useState } from "react";
import {
  Box,
  CheckboxProps,
  Flex,
  FlexProps,
  Text,
  Textarea,
  UseRadioProps,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { CheckBoxCheckIcon, CheckBoxIcon } from "../Icons";
import { TextValueOptionType } from "@/app/(featured-slice)/widgets/signup-funnel/const/const";

type RadioCardType = UseRadioProps & CheckboxProps;

interface CheckBoxCard extends RadioCardType {
  text?: string | number;
  getText?: (text: string) => void;
}

const CheckBoxCard = ({ h, ...props }: PropsWithChildren<CheckBoxCard>) => {
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

const OptionalCheckboxCard = ({
  h,
  text,
  getText,
  ...props
}: PropsWithChildren<CheckBoxCard>) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);
  const [textLength, setTextLength] = useState(0);

  const isChecked = props.isChecked;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextLength(value.length);
    if (getText) {
      getText(value);
    }
  };

  return (
    <Box
      as={"label"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      w={"100%"}
      border={isChecked ? "2px solid #8A00FF" : "1px solid #EAEAEA"}
      rounded="lg"
      cursor="pointer"
      bg={isChecked ? "#FCF8FF" : "#FFFFFF"}
      h={isChecked ? "179px" : "60px"}
      fontSize={"18px"}
      fontWeight={isChecked ? "bold" : "normal"}
      boxShadow={
        isChecked
          ? "0 0 12px 1px rgba(90,0,161,0.32)"
          : "0 0px 8px 0px rgba(28,0,51,0.08)"
      }
      padding={isChecked ? "20px 16px " : "20px 24px"}
      flexDir={"column"}
      gap={"10px"}
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />

      <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gridColumnGap={2} alignItems="center" lineHeight={1}>
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
            직접 입력할래요
          </Text>
        </Flex>
      </Flex>

      {isChecked && (
        <Box
          pos={"relative"}
          fontSize={"18px"}
          w={"95%"}
          minW={"296px"}
          h={"106px"}
        >
          <Textarea
            padding={"16px"}
            onChange={handleInputChange}
            placeholder="바라시는 건강목표를 입력해주세요."
            resize={"none"}
            maxLength={200}
            name={""}
            w={"100%"}
            h={"106px"}
            bg={"#FFFFFF"}
            color={"#000000"}
            defaultValue={text}
          />
          <Text
            pos={"absolute"}
            right={"20px"}
            bottom={"10px"}
            color={"#B2B1AB"}
            zIndex={100}
          >
            {textLength} / 50
          </Text>
        </Box>
      )}
    </Box>
  );
};

interface CustomRadioProps extends FlexProps {
  options: any;
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
      {options?.map(({ optionId, text, isCostom }: TextValueOptionType) => {
        const checkbox = getCheckboxProps({ value: optionId.toString() });

        return (
          <Box key={optionId}>
            {!isCostom ? (
              <CheckBoxCard {...checkbox}>{text}</CheckBoxCard>
            ) : (
              <OptionalCheckboxCard {...checkbox}>{text}</OptionalCheckboxCard>
            )}
          </Box>
        );
      })}
    </Flex>
  );
};
