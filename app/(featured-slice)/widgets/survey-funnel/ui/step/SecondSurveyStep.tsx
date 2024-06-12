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
import {
  RevertButton,
  SignupButton,
} from "@/app/(featured-slice)/shared/ui/button";
import {
  BackArrowIcon,
  WarningIcon,
} from "@/app/(featured-slice)/shared/ui/Icons";
import { useSurveyListByPage } from "@/app/(featured-slice)/entities/survey/hooks";

interface SecondOption {
  healthCheck: string;
  smokeAware: string;
}

export const SecondSurveyStep = ({
  goNextStep,
  goPrevStep = () => {},
}: StepProps) => {
  const { data: surveyData = [] } = useSurveyListByPage(2);
  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<SecondOption>();

  const onSubmit: SubmitHandler<SecondOption> = (option) => {
    goNextStep();
  };

  const heathCheckOption = surveyData[0]?.options ?? [];

  const smokeAwareOption = surveyData[1]?.options ?? [];

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} w={"100%"}>
        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Heading fontSize={"24px"} fontWeight={"bold"}>
            건강 검진을 정기적으로 받으시나요?
          </Heading>
          <FormControl isInvalid={!!errors.healthCheck}>
            <CheckRadio
              options={heathCheckOption}
              name="healthCheck"
              control={control}
              w={"100%"}
              padding={"12px 16px"}
              gap={"10px"}
              flexDir={"column"}
            />

            <FormErrorMessage>
              {errors.healthCheck && (
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
              흡연을 하시나요?
            </Heading>
            <Text color={"#807F7A"}>최근 3개월 기준으로 답변해주세요.</Text>
          </Flex>
          <FormControl isInvalid={!!errors.smokeAware}>
            <CheckRadio
              options={smokeAwareOption}
              name="smokeAware"
              control={control}
              w={"100%"}
              padding={"12px 16px"}
              gap={"10px"}
              flexDir={"column"}
            />

            <FormErrorMessage>
              {errors.smokeAware && (
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
          <RevertButton h={"52px"} w={"52px"} onClick={() => goPrevStep()}>
            <BackArrowIcon />
          </RevertButton>
          <SignupButton type={"submit"}>다음</SignupButton>
        </Box>
      </Flex>
    </Flex>
  );
};
