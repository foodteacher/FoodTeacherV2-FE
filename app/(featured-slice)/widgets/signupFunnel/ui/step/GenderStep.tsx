import { StepProps } from "../../types";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomRadio } from "@/app/(featured-slice)/shared/radio/ui/CustomRadio";
import { genderOptions } from "../../const/const";
import { MainButton } from "@/app/(featured-slice)/features/auth/ui";

type Gender = { gender: string };

export const GenderStep = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm<Gender>();

  const onSubmit: SubmitHandler<Gender> = ({ gender }) => {
    setState((data) => {
      return { ...data, gender: gender };
    });
    goNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.gender}>
        <FormLabel htmlFor="gender">성별을 입력해주세요.</FormLabel>
        <CustomRadio
          options={genderOptions}
          name={"gender"}
          control={control}
          w={"154px"}
          h={"148px"}
          padding={"12px 16px"}
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
