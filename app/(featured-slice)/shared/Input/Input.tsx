import { InputProps } from "@chakra-ui/react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProp extends InputProps {
  register: UseFormRegisterReturn;
}

const Input = ({ ...props }: InputProp) => {
  const register = props.register;
  return <ChakraInput {...props} {...register} />;
};

export default Input;
