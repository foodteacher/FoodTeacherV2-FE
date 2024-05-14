import { FormLabel, FormLabelProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const SignupLabel = ({
  children,
  htmlFor,
}: PropsWithChildren<FormLabelProps>) => {
  return (
    <FormLabel htmlFor={htmlFor} fontSize={"16px"} fontWeight={"bold"}>
      {children}
    </FormLabel>
  );
};

export default SignupLabel;
