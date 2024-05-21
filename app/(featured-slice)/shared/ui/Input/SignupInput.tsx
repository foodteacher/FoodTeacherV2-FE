import { Input } from "@chakra-ui/react";
import React from "react";
import { FormInputProp } from "./type";

const SignupInput = ({ ...props }: FormInputProp) => {
  return (
    <Input
      {...props}
      {...props.register}
      borderColor={"gray.200"}
      bgColor={"#FFFFFF"}
      fontWeight={"semibold"}
      padding={"16px"}
      h={"53px"}
      _placeholder={{ color: "#D1D1D1" }}
    />
  );
};

export default SignupInput;
