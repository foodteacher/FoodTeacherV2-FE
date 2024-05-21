import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { PhysicalInfo, StepProps } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomRadio } from "@/app/(featured-slice)/shared/radio/ui/CustomRadio";
import SignupLabel from "@/app/(featured-slice)/shared/label/ui/SignupLabel";
import SignupInput from "@/app/(featured-slice)/shared/Input/ui/SignupInput";
import { SignupButton } from "@/app/(featured-slice)/shared/Button/ui";
import { BLOOD_TYPE_OTPIONS } from "../../const/const";

export const UserPysicalStep = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
  } = useForm<PhysicalInfo>();

  const onSubmit: SubmitHandler<PhysicalInfo> = (physicalInfo) => {
    setState((data) => {
      return { ...data, ...physicalInfo };
    });
    goNextStep();
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDir={"column"}
      paddingBottom={"90px"}
    >
      <Heading fontSize={"24px"} fontWeight={"bold"}>
        신체 정보를 입력해주세요
      </Heading>
      <VStack spacing={"24px"} marginTop={"32px"}>
        <FormControl isInvalid={!!errors.height}>
          <SignupLabel htmlFor="height">키</SignupLabel>
          <InputGroup>
            <SignupInput
              id="height"
              placeholder="키"
              register={{
                ...register("height", {
                  required: { value: true, message: "이름을 입력해주세요." },
                }),
              }}
            />
            <InputRightElement h={"53px"}>cm</InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.height && errors.height.message}
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
                    message: "생년월일을 입력해주세요.",
                  },
                }),
              }}
            />
            <InputRightElement h={"53px"}>kg</InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.height && errors.height.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.targetWeight}>
          <SignupLabel htmlFor="targetWeight">목표 몸무게</SignupLabel>
          <InputGroup>
            <SignupInput
              id="targetWeight"
              placeholder="목표 몸무게"
              register={{
                ...register("weight", {
                  required: {
                    value: true,
                    message: "생년월일을 입력해주세요.",
                  },
                }),
              }}
            />
            <InputRightElement h={"53px"}>kg</InputRightElement>
          </InputGroup>

          <FormErrorMessage>
            {errors.targetWeight && errors.targetWeight.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.bloodType}>
          <SignupLabel htmlFor="bloodType">혈액형</SignupLabel>
          <CustomRadio
            options={BLOOD_TYPE_OTPIONS}
            name={"bloodType"}
            control={control}
            w={"100%"}
            padding={"12px 16px"}
            gap={"10px"}
            flexDir={"column"}
          />
          <FormErrorMessage>
            {errors.bloodType && errors.bloodType.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

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
