import { Button } from "@/app/(featured-slice)/shared/ui";
import { Text } from "@chakra-ui/react";
import React from "react";
import { StepProps } from "../../types";

export const AgeStep = ({ goNextStep }: StepProps) => {
  return (
    <>
      <Text>나이</Text>
      <Button onClick={goNextStep}>다음</Button>
    </>
  );
};
