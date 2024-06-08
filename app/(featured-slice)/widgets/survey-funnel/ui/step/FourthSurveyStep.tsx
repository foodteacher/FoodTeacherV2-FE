"use client";

import { useSurveyListByPage } from "@/app/(featured-slice)/entities/survey/hooks";
import { StepProps } from "../../../signup-funnel/types";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  BackArrowIcon,
  WarningIcon,
} from "@/app/(featured-slice)/shared/ui/Icons";
import {
  RevertButton,
  SignupButton,
} from "@/app/(featured-slice)/shared/ui/button";
import { BoxRadio } from "@/app/(featured-slice)/shared/ui/radio";

export const FourthSurveyStep = ({ goNextStep, setState }: StepProps) => {
  const { data: surveyData = [], isLoading } = useSurveyListByPage(4);
  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<{ goal: string }>();

  const onSubmit: SubmitHandler<{ goal: string }> = (goal) => {
    setState((data) => {
      return { ...data, ...goal };
    });
    // goNextStep();
  };

  const dosingQuestion = surveyData[0]?.text ?? "";
  const dosingOption = surveyData[0]?.options ?? [];

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} w={"100%"} paddingBottom={"150px"}>
        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Flex flexDir={"column"} gap={"10px"}>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              {dosingQuestion}
            </Heading>
          </Flex>
          <FormControl isInvalid={!!errors.goal}>
            <BoxRadio
              options={dosingOption}
              name="dosing"
              control={control}
              h={"124px"}
            />

            <FormErrorMessage>
              {errors.goal && (
                <Flex gap={"4px"}>
                  <WarningIcon />
                  <Text color={"#FF0000"} fontSize={"16px"}>
                    답변을 선택해주세요.
                  </Text>
                </Flex>
              )}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Box
          pos={"fixed"}
          display={"flex"}
          right={0}
          bottom={0}
          left={0}
          w={["100%", "100%", "740px"]}
          margin={"0 auto"}
          bg={"#FDFBF8"}
          justifySelf={"flex-end"}
          alignSelf={"flex-end"}
          padding={[" 16px", "16px", "16px 120px"]}
          gap={"16px"}
        >
          <RevertButton h={"52px"} w={"52px"}>
            <BackArrowIcon />
          </RevertButton>
          <SignupButton type={"submit"}>다음</SignupButton>
        </Box>
      </Flex>
    </Flex>
  );
};
