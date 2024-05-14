import { Input } from "@chakra-ui/react";
import React from "react";
import { InputProp } from "./type";

const SignupInput = ({ ...props }: InputProp) => {
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
