import {
  Box,
  FormControl,
  FormErrorMessage,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { StepProps } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import SignupInput from "@/app/(featured-slice)/shared/Input/SignupInput";
import SignupLabel from "@/app/(featured-slice)/shared/label/SignupLabel";
import { CustomRadio } from "@/app/(featured-slice)/shared/radio/ui/CustomRadio";
import { genderOptions } from "../../const/const";

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

  const onSubmit: SubmitHandler<UserInfo> = (ageInfo) => {
    setState((data) => {
      // data.age = ageInfo.age;
      return data;
    });
    goNextStep();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
                // minLength: { value: 1, message: "숫자를 입력해주세요!" },
                // min: { value: 10, message: "10세이상 가입가능합니다." },
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
                // minLength: { value: 1, message: "숫자를 입력해주세요!" },
                // min: { value: 10, message: "10세이상 가입가능합니다." },
              }),
            }}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.gender}>
          <FormLabel htmlFor="gender">성별을 입력해주세요.</FormLabel>
          <CustomRadio
            options={genderOptions}
            name={"gender"}
            control={control}
            w={"50%"}
            h={"56px"}
            padding={"12px 16px"}
          />
          <FormErrorMessage>
            {errors.gender && errors.gender.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      {/* <MainButton
        type={"submit"}
        _disabled={{
          bgColor: "#D2D2D2",
          color: "#FFFFFF",
        }}
        isDisabled={!isValid}
      >
        다음
      </MainButton> */}
    </Box>
  );
};
