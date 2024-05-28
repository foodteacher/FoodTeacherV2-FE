"use client";

import {
  Box,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { ColoredVeryBadIcon } from "../Icons";

const LevelRadio = (props: any) => {
  const { icon, colorIcon, ...radioProps } = props;
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);
  return (
    <Text as={"label"} {...htmlProps} cursor="pointer" zIndex={"300"}>
      <input {...getInputProps({})} hidden />
      <Box
        {...getRadioProps()}
        // bg={state.isChecked ? "green.200" : "transparent"}
        // w={12}
        // p={1}
        // rounded="full"
        bg={"transparent"}
      >
        {/* {state.isChecked ? colorIcon : icon} */}
        <Image
          zIndex={"400"}
          src={icon}
          {...getLabelProps()}
          //   w={"40px"}
          //   aspectRatio={"40px"}
          aspectRatio={"1/1"}
          //   w={"100%"}
        />
      </Box>
    </Text>
  );
};

export const LevelRadioGroup = () => {
  const toast = useToast();
  const avatars = [
    { name: "1", icon: "./img/verybad.png", colorIcon: <ColoredVeryBadIcon /> },
    { name: "2", icon: "./img/bad.png" },
    { name: "3", icon: "./img/soso.png" },
    { name: "4", icon: "./img/good.png" },
    { name: "5", icon: "./img/emotion.png" },
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
      <HStack pos={"relative"}>
        <Divider pos={"absolute"} top={"50%"} w={"85%"} left={"10%"} />
        {avatars.map((avatar) => {
          return (
            <LevelRadio
              key={avatar.name}
              icon={avatar.icon}
              colorIcon={avatar.colorIcon}
              {...getRadioProps({ value: avatar.name })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
};
