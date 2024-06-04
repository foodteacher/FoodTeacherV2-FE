"use client";

import { RadioOption } from "@/app/(featured-slice)/widgets/survey-funnel/types";
import {
  Box,
  Divider,
  HStack,
  Image,
  RadioProps,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

interface LevelRadioGroupProps {
  option: RadioOption[];
}

export const LevelRadioGroup = ({ option }: LevelRadioGroupProps) => {
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    // onChange: handleChange,
  });

  return (
    <Stack {...getRootProps()}>
      <HStack
        pos={"relative"}
        spacing={"15px"}
        w={"296px"}
        justifyContent={"space-between"}
      >
        <Divider pos={"absolute"} top={"36%"} w={"85%"} left={"10%"} />
        {option.map((avatar) => {
          return (
            <LevelRadio
              key={avatar.name}
              icon={avatar.icon}
              colorIcon={avatar.colorIcon}
              text={avatar.text}
              w={avatar.w}
              {...getRadioProps({ value: avatar.name })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
};

interface LevelRadioProps extends RadioProps {
  icon: string;
  colorIcon: string;
  text: string;
  w: string;
}

const LevelRadio = ({
  icon,
  colorIcon,
  text,
  w,
  ...radioProps
}: LevelRadioProps) => {
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  const isChecked = state.isChecked;

  return (
    <Text as={"label"} {...htmlProps} cursor="pointer" zIndex={"300"}>
      <input {...getInputProps({})} hidden />
      <Box
        {...getRadioProps()}
        w={w}
        // p={1}
        rounded="full"
        bg={"transparent"}
      >
        {state.isChecked ? (
          <Image
            zIndex={"400"}
            w={"100%"}
            src={colorIcon}
            {...getLabelProps()}
          />
        ) : (
          <Image zIndex={"400"} w={"100%"} src={icon} {...getLabelProps()} />
        )}
        <Text
          w={"100%"}
          fontSize={"13px"}
          fontWeight={isChecked ? "bold" : "normal"}
          textAlign={"center"}
        >
          {text}
        </Text>
      </Box>
    </Text>
  );
};
