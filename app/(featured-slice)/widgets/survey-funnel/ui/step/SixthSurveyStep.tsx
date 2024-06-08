"use client";

import { useSurveyListByPage } from "@/app/(featured-slice)/entities/survey/hooks";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StepProps } from "../../../signup-funnel/types";
import {
  BackArrowIcon,
  WarningIcon,
} from "@/app/(featured-slice)/shared/ui/Icons";
import {
  RevertButton,
  SignupButton,
} from "@/app/(featured-slice)/shared/ui/button";
import { LevelRadioGroup } from "@/app/(featured-slice)/shared/ui/radio";
import { FAVORITE_OPTIONS } from "../../consts/const";

export const SixthSurveyStep = ({ goNextStep, setState }: StepProps) => {
  const { data: surveyData = [], isLoading } = useSurveyListByPage(6);
  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<{ goal: string }>();

  const onSubmit: SubmitHandler<{ goal: string }> = (goal) => {
    // goNextStep();
  };
  const stressQuestion = surveyData[0]?.text ?? "";
  const healthCareQeustion = surveyData[1]?.text ?? "";

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} w={"100%"} paddingBottom={"150px"}>
        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Flex flexDir={"column"} gap={"10px"}>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              {stressQuestion}
            </Heading>
          </Flex>
          <FormControl isInvalid={!!errors.goal}>
            <LevelRadioGroup option={FAVORITE_OPTIONS} />

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
              {healthCareQeustion}
            </Heading>
          </Flex>
          <FormControl isInvalid={!!errors.goal}>
            <LevelRadioGroup option={FAVORITE_OPTIONS} />

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
