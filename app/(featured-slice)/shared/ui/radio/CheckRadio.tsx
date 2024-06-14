"use client";

import { PropsWithChildren, useState } from "react";
import {
  Box,
  Flex,
  FlexProps,
  Text,
  Textarea,
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
  getText?: (text: string) => void;
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
        {text}
        {isChecked && <CheckIcon />}
      </Flex>
    </Box>
  );
};

const OptionalRadioCard = ({
  h,
  text,
  getText,
  ...props
}: PropsWithChildren<CheckRadioCard>) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const [textLength, setTextLength] = useState(0);
  const input = getInputProps();
  const checkbox = getRadioProps();

  const isChecked = props.isChecked;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextLength(value.length);
    if (getText) {
      getText(value);
    }
  };

  return (
    <Box as="label" w={"100%"} left={0} h={isChecked ? "179px" : h}>
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth={"1px"}
        borderRadius={"12px"}
        borderColor={"#EAEAEA"}
        bg={"#FFFFFF"}
        h={isChecked ? "179px" : h}
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
        flexDir={"column"}
        gap={"8px"}
        padding={isChecked ? "20px 16px" : "20px 24px"}
      >
        <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          직접 입력할래요
          {isChecked && <CheckIcon />}
        </Flex>

        {isChecked && (
          <Box pos={"relative"} fontSize={"18px"}>
            <Textarea
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
              {textLength} / 200
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

interface CustomRadioProps extends FlexProps {
  options: TextValueOptionType[];
  name: string;
  control?: any;
  getCustomText?: (text: string) => void;
}

export const CheckRadio = ({
  options,
  name,
  control,
  getCustomText,
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

  const getText = (text: string) => {
    if (getCustomText) {
      getCustomText(text);
    }
  };

  return (
    <Flex {...group} {...props} padding={"0"} gap={"16px"}>
      {options?.map(({ optionId, text, isCostom }: TextValueOptionType) => {
        const radio = getRadioProps({ value: optionId.toString() });

        return (
          <Box key={optionId}>
            {!isCostom ? (
              <CheckRadioCard {...props} {...radio} text={text} />
            ) : (
              <OptionalRadioCard
                {...props}
                {...radio}
                text={text}
                getText={getText}
              />
            )}
          </Box>
        );
      })}
    </Flex>
  );
};
