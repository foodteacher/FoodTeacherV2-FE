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

export const ThirdSurveyStep = ({ goNextStep, setState }: StepProps) => {
  const { data: surveyData = [], isLoading } = useSurveyListByPage(3);
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
          <FormControl isInvalid={!!errors.goal}>
            <FrontCheckBox
              options={diseaseOption}
              control={control}
              name="disease"
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
        </Flex>

        <Box w={"100%"} bg={"#F2F1E9"} h={"12px"} margin={"16px 0"} />

        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Flex flexDir={"column"} gap={"10px"}>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              직계 가족 중에 가지고 계신 질병을 선택해주세요
            </Heading>
            <Text color={"#807F7A"}>한 가지 이상 선택해주세요</Text>
          </Flex>
          <FormControl isInvalid={!!errors.goal}>
            <FrontCheckBox
              options={familyHistoryOption}
              control={control}
              name="familyHistory"
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
