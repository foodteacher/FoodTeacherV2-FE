"use client";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { PhysicalInfo, StepProps } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import SignupLabel from "@/app/(featured-slice)/shared/ui/label/SignupLabel";
import { SignupButton } from "@/app/(featured-slice)/shared/ui/button";
import { BLOOD_TYPE_OTPIONS } from "../../const/const";
import SignupInput from "@/app/(featured-slice)/shared/ui/Input/SignupInput";
import { useRouter } from "next/navigation";
import { CheckRadio } from "@/app/(featured-slice)/shared/ui/radio";
import { WarningIcon } from "@/app/(featured-slice)/shared/ui/Icons";

export const UserPysicalStep = ({ goNextStep, setState }: StepProps) => {
  const router = useRouter();
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<PhysicalInfo>({
    defaultValues: {
      bloodType: "",
    },
  });

  /**최종 회원가입 */
  const onSubmit: SubmitHandler<PhysicalInfo> = (physicalInfo) => {
    if (setState) {
      setState((data) => {
        return { ...data, ...physicalInfo };
      });
    }
    goNextStep();
    router.push("/signup-complete");
  };

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Flex
        flexDir={"column"}
        gap={"32px"}
        w={"100%"}
        h={"100%"}
        paddingBottom={"50%"}
      >
        <Heading fontSize={"24px"} fontWeight={"bold"}>
          신체 정보를 입력해주세요
        </Heading>
        <FormControl isInvalid={!!errors.height}>
          <SignupLabel htmlFor="height">키</SignupLabel>
          <InputGroup>
            <SignupInput
              id="height"
              placeholder="키"
              register={{
                ...register("height", {
                  required: { value: true, message: "키를 입력해주세요." },
                  pattern: {
                    value: /^\d{2,3}$/,
                    message: "올바른 키를 입력해주세요.",
                  },
                }),
              }}
            />
            <InputRightElement h={"53px"} paddingRight={"16px"}>
              cm
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage color={"#FF0000"} fontSize={"16px"}>
            {errors.height?.message && (
              <Flex gap={"4px"}>
                <WarningIcon /> {errors.height?.message}
              </Flex>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.weight}>
          <SignupLabel>몸무게</SignupLabel>
          <InputGroup>
            <SignupInput
              id="weight"
              placeholder="몸무게"
              register={{
                ...register("weight", {
                  required: {
                    value: true,
                    message: "몸무게를 입력해 주세요.",
                  },
                  pattern: {
                    value: /^\d{2,3}$/,
                    message: "올바른 몸무게를 입력해주세요.",
                  },
                }),
              }}
            />
            <InputRightElement h={"53px"} paddingRight={"16px"}>
              kg
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage color={"#FF0000"} fontSize={"16px"}>
            {errors.weight?.message && (
              <Flex gap={"4px"}>
                <WarningIcon /> {errors.weight?.message}
              </Flex>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.targetWeight}>
          <SignupLabel htmlFor="targetWeight">목표 몸무게</SignupLabel>
          <InputGroup>
            <SignupInput
              id="targetWeight"
              placeholder="목표 몸무게"
              register={{
                ...register("targetWeight", {
                  required: {
                    value: true,
                    message: "목표 몸무게를 입력해 주세요.",
                  },
                  pattern: {
                    value: /^\d{2,3}$/,
                    message: "올바른 몸무게를 입력해주세요.",
                  },
                }),
              }}
            />
            <InputRightElement h={"53px"} paddingRight={"16px"}>
              kg
            </InputRightElement>
          </InputGroup>

          <FormErrorMessage color={"#FF0000"} fontSize={"16px"}>
            {errors.targetWeight?.message && (
              <Flex gap={"4px"}>
                <WarningIcon /> {errors.targetWeight?.message}
              </Flex>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.bloodType}>
          <SignupLabel htmlFor="bloodType">혈액형</SignupLabel>
          <CheckRadio
            options={BLOOD_TYPE_OTPIONS}
            name={"bloodType"}
            control={control}
            w={"100%"}
            padding={"12px 16px"}
            gap={"10px"}
            flexDir={"column"}
          />

          <FormErrorMessage color={"#FF0000"} fontSize={"16px"}>
            {errors.bloodType && (
              <Flex gap={"4px"}>
                <WarningIcon /> 혈액형을 선택해 주세요.
              </Flex>
            )}
          </FormErrorMessage>
        </FormControl>
      </Flex>

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
  );
};
