"use client";

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
import {
  RevertButton,
  SignupButton,
} from "@/app/(featured-slice)/shared/ui/button";
import {
  BackArrowIcon,
  WarningIcon,
} from "@/app/(featured-slice)/shared/ui/Icons";
import { useSurveyListByPage } from "@/app/(featured-slice)/entities/survey/hooks";
import { FrontCheckBox } from "@/app/(featured-slice)/shared/ui/checkbox";
import { useSurveyAnswer } from "@/app/(featured-slice)/features/survey/hooks/useSurveyAnswer";
import { FormData } from "../../types";
import { useState } from "react";

interface ThirdOption {
  disease: string[];
  familyHistory: string[];
}

export const ThirdSurveyStep = ({ goNextStep }: StepProps) => {
  const { data: surveyData = [] } = useSurveyListByPage(3);

  const { mutateAsync: mutationSurveyAnswer, isPending } = useSurveyAnswer();

  const [customOptionText, setCustomOptionText] = useState<string>("");

  const getCustomText = (text: string) => {
    setCustomOptionText(text);
  };

  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<ThirdOption>();

  const onSubmit: SubmitHandler<ThirdOption> = async ({
    disease,
    familyHistory,
  }) => {
    const formState: FormData[] = [
      {
        questionId: surveyData[0].questionId,
        optionIdList: disease.map((ele) => Number(ele)),
      },
      {
        questionId: surveyData[1].questionId,
        optionIdList: familyHistory.map((ele) => Number(ele)),
      },
    ];

    if (disease.includes("14")) {
      const textAnswer = {
        optionId: Number(14),
        answer: customOptionText,
      };

      const copyFormState = formState.slice();
      // copyFormState.push(textAnswer);

      mutationSurveyAnswer(formState);
      goNextStep();

      return;
    }

    await mutationSurveyAnswer(formState);

    goNextStep();
  };

  const diseaseQuestion = surveyData[0]?.text ?? "";
  const diseaseOption = surveyData[0]?.options ?? [];

  const familyHistoryOption = surveyData[1]?.options ?? [];

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} w={"100%"} paddingBottom={"150px"}>
        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Flex flexDir={"column"} gap={"10px"}>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              {diseaseQuestion}
            </Heading>
            <Text color={"#807F7A"}>한 가지 이상 선택해주세요</Text>
          </Flex>
          <FormControl isInvalid={!!errors.disease}>
            <FrontCheckBox
              options={diseaseOption}
              control={control}
              name="disease"
              flexDir={"column"}
            />

            <FormErrorMessage>
              {errors.disease && (
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

        <Box w={"100%"} bg={"#F2F1E9"} h={"12px"} margin={"16px 0"} />

        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Flex flexDir={"column"} gap={"10px"}>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              직계 가족 중에 가지고 계신 질병을 선택해주세요
            </Heading>
            <Text color={"#807F7A"}>한 가지 이상 선택해주세요</Text>
          </Flex>
          <FormControl isInvalid={!!errors.familyHistory}>
            <FrontCheckBox
              options={familyHistoryOption}
              control={control}
              name="familyHistory"
              flexDir={"column"}
              getCustomText={getCustomText}
            />

            <FormErrorMessage>
              {errors.familyHistory && (
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
          <SignupButton isLoading={isPending} type={"submit"}>
            다음
          </SignupButton>
        </Box>
      </Flex>
    </Flex>
  );
};
