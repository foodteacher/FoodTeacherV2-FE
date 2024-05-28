import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const RevertButton = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <Button
      bg={"#F6F4EB"}
      color={"#807F7A"}
      fontSize={"18px"}
      fontWeight={"bold"}
      {...props}
    >
      {children}
    </Button>
  );
};
