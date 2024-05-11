import { Input as ChakraInput } from "@chakra-ui/react";
import { InputProp } from "./type";

const Input = ({ ...props }: InputProp) => {
  const register = props.register;
  return <ChakraInput {...props} {...register} />;
};

export default Input;
