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
import { useSurveyListByPage } from "@/app/(featured-slice)/entities/survey/hooks";
import { useSurveyAnswer } from "@/app/(featured-slice)/features/survey/hooks/useSurveyAnswer";
import { useState } from "react";
import { FormData } from "../../types";
import { getSurveyByPage } from "@/app/(featured-slice)/entities/survey/api/survey";

export const FirstSurveyStep = ({ goNextStep }: StepProps) => {
  const { data: surveyData } = useSurveyListByPage(1);

  const { mutateAsync: mutateSurveyAnswer, isPending } = useSurveyAnswer();

  const [customOptionText, setCustomOptionText] = useState<string>("");

  const {
    formState: { errors, isValid, isLoading },
    control,
    handleSubmit,
  } = useForm<{ goal: string }>({
    defaultValues: async () => {
      const data = await getSurveyByPage({ pageNum: 1 });

      const preSelectedValue = data[0]?.options
        .filter((ele) => ele.selected)[0]
        .optionId.toString();

      return {
        goal: preSelectedValue,
      };
    },
  });

  const getCustomText = (text: string) => {
    setCustomOptionText(text);
  };

  const onSubmit: SubmitHandler<{ goal: string }> = async ({ goal }) => {
    const optionIdList = [Number(goal)];
    const formState: FormData = {
      questionId: surveyData[0].questionId,
      optionIdList,
    };
    if (Number(goal) === 37) {
      const textAnswer = {
        optionId: Number(goal),
        answer: customOptionText,
      };

      const copyFormState = { ...formState };
      copyFormState.textAnswer = textAnswer;

      return await mutateSurveyAnswer([copyFormState]);
    }
    await mutateSurveyAnswer([formState]);

    goNextStep();
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
              getCustomText={getCustomText}
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
