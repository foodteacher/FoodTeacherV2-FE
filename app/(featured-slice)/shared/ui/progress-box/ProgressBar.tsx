import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React from "react";

interface ProgressBarProps {
  stepArr: string[];
  currentStep: string;
  boxWidth?: string;
}

interface ProgressBoxProps extends BoxProps {
  focus: string;
  currentStep: string;
  stepArr: string[];
}

const ProgressBox = ({ focus, currentStep, stepArr, w }: ProgressBoxProps) => {
  const targetIdx = stepArr.indexOf(focus);
  const currentIdx = stepArr.indexOf(currentStep);

  const progressColor =
    targetIdx === currentIdx
      ? "#8F00FF"
      : targetIdx < currentIdx
        ? "#D49EFF"
        : "#E7E5E2";

  return <Box bg={progressColor} w={w} h={"5px"} borderRadius={"4px"} />;
};

export const ProgressBar = ({
  stepArr,
  boxWidth,
  currentStep,
}: ProgressBarProps) => {
  return (
    <Flex
      gap={"3px"}
      margin={"0px auto 28px auto"}
      w={"300px"}
      justifyContent={"center"}
    >
      {stepArr.map((ele: string) => {
        return (
          <ProgressBox
            key={ele}
            focus={ele}
            w={boxWidth}
            stepArr={stepArr}
            currentStep={currentStep}
          />
        );
      })}
    </Flex>
  );
};
