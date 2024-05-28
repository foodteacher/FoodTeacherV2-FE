"use client";
import { StepProps } from "../../../signup-funnel/types";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  HStack,
  Highlight,
  Text,
  UseCheckboxProps,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BLOOD_TYPE_OTPIONS } from "../../../signup-funnel/const/const";
import { FrontCheckBox } from "@/app/(featured-slice)/shared/ui/checkbox";
import { SurveyResultCard } from "@/app/(featured-slice)/shared/ui/card";

interface TestStep extends UseCheckboxProps, StepProps {}
interface FormType {
  bloodType: string;
}

export const TestStep = ({ goNextStep, setState, ...props }: any) => {
  const router = useRouter();
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<FormType>();

  const submitFormHandler: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(submitFormHandler)} gap={"100px"}>
      <FrontCheckBox
        options={BLOOD_TYPE_OTPIONS}
        name={"bloodType"}
        control={control}
        w={"100%"}
        padding={"12px 16px"}
        gap={"10px"}
        flexDir={"column"}
      />

      <SurveyResultCard>
        <HStack spacing={"16px"} w={"100%"}>
          <Box
            bg={"#D9D9D9"}
            h={"25px"}
            aspectRatio={"1"}
            borderRadius={"50%"}
            textAlign={"center"}
            fontSize={"16px"}
            fontWeight={"bold"}
          >
            1
          </Box>
          <Text color={"#333331"} fontWeight={"bold"} fontSize={"16px"}>
            건강 목표는
            <Highlight
              query={"건강 유지"}
              styles={{
                border: "1px solid #961AFF",
                padding: "4px 8px",
                margin: "0px 8px",
                borderRadius: "5px",
                color: "#6D00A3",
              }}
            >
              건강 유지
            </Highlight>
            입니다.
          </Text>
        </HStack>
      </SurveyResultCard>

      <Button type={"submit"}>click</Button>
    </VStack>
  );
};
