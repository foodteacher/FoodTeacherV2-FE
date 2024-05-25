"use client";
import { StepProps } from "../../../signup-funnel/types";
import { useRouter } from "next/navigation";
import {
  Box,
  CheckboxGroup,
  Flex,
  FlexProps,
  Text,
  UseCheckboxProps,
  useRadioGroup,
} from "@chakra-ui/react";
import { useController, useForm } from "react-hook-form";
import { FrontCheckRadio } from "@/app/(featured-slice)/shared/ui/radio";
import { BLOOD_TYPE_OTPIONS } from "../../../signup-funnel/const/const";

interface TestStep extends UseCheckboxProps, StepProps {}

export const TestStep = ({ goNextStep, setState, ...props }: any) => {
  const router = useRouter();
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<any>();

  return (
    <Box>
      <FrontCheckRadio
        options={BLOOD_TYPE_OTPIONS}
        name={"bloodType"}
        control={control}
        w={"100%"}
        padding={"12px 16px"}
        gap={"10px"}
        flexDir={"column"}
      />
    </Box>
  );
};
