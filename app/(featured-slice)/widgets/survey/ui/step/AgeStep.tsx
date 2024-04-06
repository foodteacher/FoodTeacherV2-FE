import { Button } from "@/app/(featured-slice)/shared/ui";
import { Text } from "@chakra-ui/react";
import React from "react";

interface AgeStepProps {
  nextStep: () => void;
}

export const AgeStep = ({ nextStep }: AgeStepProps) => {
  return (
    <>
      <Text>나이</Text>
      <Button onClick={nextStep}>다음</Button>
    </>
  );
};
