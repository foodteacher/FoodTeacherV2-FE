import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { StepProps, UserInfoType } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import SignupLabel from "@/app/(featured-slice)/shared/ui/label/SignupLabel";
import { GENDER_OPTIONS } from "../../const/const";
import SignupInput from "@/app/(featured-slice)/shared/ui/Input/SignupInput";
import { SignupButton } from "@/app/(featured-slice)/shared/ui/button";
import { FrontRadio } from "@/app/(featured-slice)/shared/ui/radio";

export const UserInfo = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<UserInfoType>();

  const onSubmit: SubmitHandler<UserInfoType> = (formInfo) => {
    setState((data) => {
      return { ...data, ...formInfo };
    });
    goNextStep();
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDir={"column"}
      gap={"32px"}
    >
      <Heading fontSize={"24px"} fontWeight={"bold"}>
        기본 정보를 입력해주세요
      </Heading>
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

      <FormControl isInvalid={!!errors.birthday}>
        <SignupLabel>생년월일</SignupLabel>
        <SignupInput
          id="birth"
          placeholder="YYYY/MM/DD"
          register={{
            ...register("birthday", {
              required: { value: true, message: "생년월일을 입력해주세요." },
              pattern: /^\d{4}\/\d{2}\/\d{2}$/,
            }),
          }}
        />
        <FormErrorMessage>
          {errors.birthday && errors.birthday.message}
          {errors?.birthday?.type === "pattern" && (
            <p>형식에 맞게 입력해주세요.</p>
          )}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.gender}>
        <SignupLabel htmlFor="gender">성별</SignupLabel>
        <FrontRadio
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

      <Box
        pos={"fixed"}
        right={0}
        bottom={0}
        left={0}
        padding={"20px 10px"}
        w={["100%", "100%", "740px"]}
        margin={"0 auto"}
      >
        <SignupButton type={"submit"}>다음</SignupButton>
      </Box>
    </Flex>
  );
};
