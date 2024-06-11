"use client";

import { CheckRadio } from "@/app/(featured-slice)/shared/ui/radio";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StepProps } from "../../../signup-funnel/types";
import { SignupButton } from "@/app/(featured-slice)/shared/ui/button";
import { WarningIcon } from "@/app/(featured-slice)/shared/ui/Icons";
import {
  useRegisterSurveyByPage,
  useSurveyListByPage,
} from "@/app/(featured-slice)/entities/survey/hooks";

export const FirstSurveyStep = ({ goNextStep }: StepProps) => {
  const { data: surveyData = [], isLoading } = useSurveyListByPage(1);
  const { mutateAsync: surveyMutation } = useRegisterSurveyByPage();
  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<{ goal: string }>();

  const onSubmit: SubmitHandler<{ goal: string }> = ({ goal }) => {
    const formState = [
      {
        questionId: 1,
        optionList: [goal],
      },
    ];

    console.log(formState);
    // goNextStep();
  };

  const healthGoalQuestion = surveyData[0]?.text ?? "";
  const healthGoalOption = surveyData[0]?.options ?? [];

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} w={"100%"} paddingBottom={"150px"}>
        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Heading fontSize={"24px"} fontWeight={"bold"}>
            {healthGoalQuestion}
          </Heading>
          <FormControl isInvalid={!!errors.goal}>
            <CheckRadio
              options={healthGoalOption}
              name={"goal"}
              control={control}
              w={"100%"}
              padding={"12px 16px"}
              gap={"10px"}
              flexDir={"column"}
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

          <Box
            pos={"fixed"}
            right={0}
            bottom={0}
            left={0}
            w={["100%", "100%", "740px"]}
            margin={"0 auto"}
            bg={"#FDFBF8"}
            justifySelf={"flex-end"}
            alignSelf={"flex-end"}
            padding={[" 16px", "16px", "16px 120px"]}
          >
            <SignupButton type={"submit"}>다음</SignupButton>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
