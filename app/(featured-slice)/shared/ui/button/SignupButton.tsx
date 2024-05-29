"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const SignupButton = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      bgColor={"#8800CC"}
      color={"#FFFFFF"}
      marginInlineStart={"0px"}
      fontWeight={"bold"}
      {...props}
      w={"100%"}
      h={"53px"}
      borderRadius={"32px"}
      _hover={{
        bg: "#7800B4",
      }}
      _pressed={{ bg: "#6D00A3" }}
    >
      {children}
    </Button>
  );
};
