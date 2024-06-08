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
  Textarea,
  TextareaProps,
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
import { FrontCheckBox } from "@/app/(featured-slice)/shared/ui/checkbox";
import SignupInput from "@/app/(featured-slice)/shared/ui/Input/SignupInput";
import { BottomSheetSelect } from "@/app/(featured-slice)/shared/ui/select";
import { ChangeEvent, useRef, useState } from "react";
import { Target } from "framer-motion";

const DOSING_FREQUENCY = ["주 1회 이하", "주 2~3회", "주 4~6회", "매일"];

export const FifthSurveyStep = ({ goNextStep, setState }: StepProps) => {
  const { data: surveyData = [], isLoading } = useSurveyListByPage(5);
  const [textLength, setTextLength] = useState(0);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextLength(value.length);
  };

  const dosingReasonQuestion = surveyData[0]?.text ?? "";
  const dosingReasonOption = surveyData[0]?.options ?? [];

  const dosingFrequencyQuestion = surveyData[1]?.text ?? "";

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex flexDir={"column"} w={"100%"} paddingBottom={"150px"}>
        <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Box>
            <Text fontSize={"24px"}>(선택)</Text>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              {dosingReasonQuestion} || "과거에 "
            </Heading>
          </Box>
          <Box pos={"relative"}>
            <Textarea
              onChange={handleInputChange}
              placeholder="과거에 정기적으로 복용하셨던 약의 이름과 복용을 중단한 이유를 써주세요(선택)"
              resize={"none"}
              maxLength={200}
              minH={"160px"}
            />
            <Text
              pos={"absolute"}
              right={"20px"}
              bottom={"15px"}
              color={"#B2B1AB"}
            >
              {textLength} / 200
            </Text>
          </Box>
        </Flex>
        {/* <Flex flexDir={"column"} gap={"32px"} padding={["16px", "16px", "10%"]}>
          <Flex flexDir={"column"} gap={"10px"}>
            <Heading fontSize={"24px"} fontWeight={"bold"}>
              {dosingReasonQuestion}
            </Heading>
            <Text color={"#807F7A"}>한 가지 이상 선택해주세요</Text>
          </Flex>
          <FormControl isInvalid={!!errors.goal}>
            <FrontCheckBox
              options={dosingReasonOption}
              name="dosingReason"
              control={control}
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
              {dosingFrequencyQuestion}
            </Heading>
            <Text color={"#807F7A"}>ex : 당뇨약, 고혈압약,비타민 등등</Text>
          </Flex>
          <FormControl isInvalid={!!errors.goal}>
            <Flex w={"100%"} flexDir={"column"} gap={"16px"}>
              {Array.from({ length: 3 }, (_, idx) => idx).map((key) => {
                return (
                  <Flex gap={"12px"} key={key}>
                    <SignupInput id="name" placeholder="약 이름" />
                    <BottomSheetSelect
                      id="dosing"
                      initialText="횟수"
                      sheetHeader="복용 횟수"
                      list={DOSING_FREQUENCY}
                    />
                  </Flex>
                );
              })}
            </Flex>

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
        </Flex> */}

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
