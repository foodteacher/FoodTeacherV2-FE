"use client";

import { useSurveyById } from "@/app/(featured-slice)/entities/survey/hooks";
import SignupLabel from "@/app/(featured-slice)/shared/ui/label/SignupLabel";
import { CheckRadio } from "@/app/(featured-slice)/shared/ui/radio";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BLOOD_TYPE_OTPIONS } from "../../../signup-funnel/const/const";
import { SubmitHandler, useForm } from "react-hook-form";
import { StepProps } from "../../../signup-funnel/types";
import { SignupButton } from "@/app/(featured-slice)/shared/ui/button";
import { WarningIcon } from "@/app/(featured-slice)/shared/ui/Icons";

export const HealthGoalStep = ({ goNextStep, setState }: StepProps) => {
  const { data } = useSurveyById(1);
  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<{ goal: string }>();

  const onSubmit: SubmitHandler<{ goal: string }> = (goal) => {
    console.log(goal);
    setState((data) => {
      return { ...data, ...goal };
    });
    // goNextStep();
  };

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} gap={"32px"} w={"100%"} paddingBottom={"150px"}>
        <Heading fontSize={"24px"} fontWeight={"bold"}>
          바라시는 건강 목표를 알려주세요
        </Heading>
        <FormControl isInvalid={!!errors.goal}>
          <CheckRadio
            options={BLOOD_TYPE_OTPIONS}
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
  );
};
