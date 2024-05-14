import { Input } from "@chakra-ui/react";
import React from "react";
import { FormInputProp } from "../type";

const SignupInput = ({ ...props }: FormInputProp) => {
  return (
    <Input
      {...props}
      {...props.register}
      h={"53px"}
      _placeholder={{ color: "#D1D1D1" }}
    />
  );
};

export default SignupInput;
