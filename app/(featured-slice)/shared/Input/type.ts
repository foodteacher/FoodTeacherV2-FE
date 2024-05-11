import { InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

/**회원가입 / 설문조사 Props */
export interface InputProp extends InputProps {
  register: UseFormRegisterReturn;
}
