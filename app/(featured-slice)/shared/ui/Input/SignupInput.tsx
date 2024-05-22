import { Input } from "@chakra-ui/react";
import React from "react";
import { FormInputProp } from "./type";

const SignupInput = ({ register, ...props }: FormInputProp) => {
  return (
    <Input
      {...props}
      {...register}
      borderColor={"gray.200"}
      bgColor={"#FFFFFF"}
      fontWeight={"semibold"}
      padding={"16px"}
      h={"53px"}
      _placeholder={{ color: "#D1D1D1" }}
      focusBorderColor={"#282828"}
      _focus={{ border: "2px" }}
      _invalid={{ border: "2px solid #282828" }}
    />
  );
};

export default SignupInput;
