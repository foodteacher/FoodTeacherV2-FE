import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Radio,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { StepProps } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomRadio } from "@/app/(featured-slice)/shared/radio/ui/CustomRadio";
import SignupLabel from "@/app/(featured-slice)/shared/label/ui/SignupLabel";
import SignupInput from "@/app/(featured-slice)/shared/Input/ui/SignupInput";
import { SignupButton } from "@/app/(featured-slice)/shared/Button/ui";
import { GENDER_OPTIONS } from "../../const/const";

interface UserInfo {
  name: string;
  birth: number;
  gender: string;
}

export const UserInfo = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<UserInfo>();

  const onSubmit: SubmitHandler<UserInfo> = (formInfo) => {
    setState((data) => {
      return data;
    });
    goNextStep();
  };

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir={"column"}>
      <Heading fontSize={"24px"} fontWeight={"bold"}>
        기본 정보를 입력해주세요
      </Heading>
      <VStack spacing={"24px"} marginTop={"32px"}>
        <FormControl isInvalid={!!errors.name}>
          <SignupLabel htmlFor="name">이름</SignupLabel>
          <SignupInput
            id="name"
            placeholder="이름"
            register={{
              ...register("name", {
                required: { value: true, message: "이름을 입력해주세요." },
              }),
            }}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.birth}>
          <SignupLabel>생년월일</SignupLabel>
          <SignupInput
            id="birth"
            placeholder="YYYY/MM/DD"
            register={{
              ...register("birth", {
                required: { value: true, message: "생년월일을 입력해주세요." },
              }),
            }}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.gender}>
          <SignupLabel htmlFor="gender">성별</SignupLabel>
          <CustomRadio
            options={GENDER_OPTIONS}
            name={"gender"}
            control={control}
            w={"100%"}
            h={"56px"}
            gap={"16px"}
            padding={"12px 16px"}
          />
          <FormErrorMessage>
            {errors.gender && errors.gender.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      <Box pos={"fixed"} right={0} bottom={0} left={0} padding={"10px"}>
        <SignupButton type={"submit"}>다음</SignupButton>
      </Box>
    </Flex>
  );
};
