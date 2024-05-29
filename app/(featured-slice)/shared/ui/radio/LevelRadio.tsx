"use client";

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

export const LevelRadioGroup = () => {
  const radioOption = [
    {
      name: "1",
      icon: "./img/verybad.png",
      colorIcon: "./img/verybad-color.png",
      text: "매우 많음",
      w: "52px",
    },
    {
      name: "2",
      icon: "./img/bad.png",
      colorIcon: "./img/bad-color.png",
      text: "많음",
      w: "32px",
    },
    {
      name: "3",
      icon: "./img/soso.png",
      colorIcon: "./img/soso-color.png",
      text: "보통",
      w: "32px",
    },
    {
      name: "4",
      icon: "./img/good.png",
      colorIcon: "./img/good-color.png",
      text: "적음",
      w: "32px",
    },
    {
      name: "5",
      icon: "./img/sogood.png",
      colorIcon: "./img/sogood-color.png",
      text: "매우 적음",
      w: "52px",
    },
  ];

  const handleChange = (value: any) => {
    // toast({
    //   title: `The value got changed to ${value}!`,
    //   status: "success",
    //   duration: 2000,
    // });
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Kevin",
    onChange: handleChange,
  });

  return (
    <Stack {...getRootProps()}>
      <Text> {value}</Text>
      <HStack
        pos={"relative"}
        spacing={"15px"}
        w={"296px"}
        justifyContent={"space-between"}
      >
        <Divider pos={"absolute"} top={"36%"} w={"85%"} left={"10%"} />
        {radioOption.map((avatar) => {
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
