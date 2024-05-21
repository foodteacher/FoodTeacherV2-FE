import { Button, ButtonProps } from "@chakra-ui/react";

export const MainButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
