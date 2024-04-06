import { Button as ChakraButton } from "@chakra-ui/button";
import { ButtonProps } from "@chakra-ui/react";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};
