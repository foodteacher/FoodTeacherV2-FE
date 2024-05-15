"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const SignupButton = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      bgColor={"#6F00DE"}
      color={"#FFFFFF"}
      {...props}
      w={"100%"}
      h={"53px"}
      borderRadius={"32px"}
    >
      {children}
    </Button>
  );
};
