import React from "react";
import { StepProps } from "../../types";
import { Button } from "@/app/(featured-slice)/shared/ui";
import { Text } from "@chakra-ui/react";

export const GenderStep = ({ goNextStep }: StepProps) => {
  return (
    <>
      <Text>성별</Text>
      <Button onClick={goNextStep}>다음</Button>
    </>
  );
};
