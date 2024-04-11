import { Button } from "@/app/(featured-slice)/shared/ui";
import { Text } from "@chakra-ui/react";
import React from "react";
import { StepProps } from "../../types";
import Input from "@/app/(featured-slice)/shared/ui/Input/Input";

export const AgeStep = ({ goNextStep }: StepProps) => {
  return (
    <>
      <Text>나이를 입력해주세요.</Text>
      <Input />
      <Button onClick={goNextStep}>다음</Button>
    </>
  );
};
