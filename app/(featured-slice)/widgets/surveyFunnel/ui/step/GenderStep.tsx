import { StepProps } from "../../types";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/(featured-slice)/shared/Input/Input";
import { MainButton } from "@/app/(featured-slice)/shared/Button/ui";

type Gender = { gender: string };

export const GenderStep = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<Gender>();

  const onSubmit: SubmitHandler<Gender> = ({ gender }) => {
    setState((data) => {
      data.gender = gender;
      return data;
    });
    goNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.gender}>
        <FormLabel htmlFor="gender">성별을 입력해주세요.</FormLabel>
        <Input
          id="gender"
          type="text"
          placeholder="나이를 입력해주세요."
          register={{
            ...register("gender", {
              required: { value: true, message: "성별을 선택해주세요!" },
              minLength: { value: 1, message: "숫자를 입력해주세요!" },
              min: { value: 10, message: "10세이상 가입가능합니다." },
            }),
          }}
        />
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
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
  );
};
