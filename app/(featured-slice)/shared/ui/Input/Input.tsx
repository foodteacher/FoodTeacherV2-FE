import { InputProps } from "@chakra-ui/react";
import { Input as ChakraInput } from "@chakra-ui/react";

const Input = ({ ...props }: InputProps) => {
  return <ChakraInput {...props} />;
};

export default Input;
