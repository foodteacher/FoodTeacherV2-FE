"use client";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React from "react";
import { StepProps } from "../../types";
import Input from "@/app/(featured-slice)/shared/ui/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { MainButton } from "@/app/(featured-slice)/shared/ui/Button";

type Age = { age: number };

export const AgeStep = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<Age>();

  const onSubmit: SubmitHandler<Age> = (ageInfo) => {
    setState((data) => {
      data.age = ageInfo.age;
      return data;
    });
    goNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.age}>
        <FormLabel htmlFor="age">나이를 입력해주세요.</FormLabel>
        <Input
          id="age"
          type="number"
          placeholder="나이를 입력해주세요."
          register={{
            ...register("age", {
              required: { value: true, message: "나이를 입력해주세요!" },
              minLength: { value: 1, message: "숫자를 입력해주세요!" },
              min: { value: 10, message: "10세이상 가입가능합니다." },
            }),
          }}
        />
        <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage>
      </FormControl>
      <MainButton
        type={"submit"}
        _disabled={{
          bgColor: "#D2D2D2",
          color: "#FFFFFF",
        }}
        isDisabled={!isValid}
      >
        다음
      </MainButton>
    </form>
  );
};
