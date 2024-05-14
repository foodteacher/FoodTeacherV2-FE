"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { StepProps } from "../../types";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import Input from "@/app/(featured-slice)/shared/Input/Input";
import { MainButton } from "@/app/(featured-slice)/features/auth/ui";

interface WeightStep extends StepProps {
  initializeStep: () => void;
}

type Weight = { weight: number };

export const WeightStep = ({ setState, goNextStep }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<Weight>();

  const onSubmit: SubmitHandler<Weight> = ({ weight }) => {
    setState((data) => {
      data.weight = weight;
      return data;
    });
    // goNextStep();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.weight}>
          <FormLabel htmlFor="weight">몸무게를 입력해주세요!</FormLabel>
          <Input
            id="weight"
            type="number"
            placeholder="몸무게를 입력해주세요."
            register={{
              ...register("weight", {
                required: { value: true, message: "몸무게를 입력해주세요!" },
                minLength: { value: 1, message: "숫자를 입력해주세요!" },
              }),
            }}
          />
          <FormErrorMessage>
            {errors.weight && errors.weight.message}
          </FormErrorMessage>
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
    </>
  );
};
