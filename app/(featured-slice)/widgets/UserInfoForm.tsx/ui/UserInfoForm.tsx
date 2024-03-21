"use client";

import { UserInfo } from "@/app/(featured-slice)/features/auth/types";
import SttFormItem from "@/app/(featured-slice)/features/stt/ui/SttFormItem";
import { Button } from "@/app/(featured-slice)/shared/UI";
import { ButtonGroup, Flex, FormErrorMessage, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit: SubmitHandler<UserInfo> = (formData) => {
    console.log(formData);
  };

  return (
    <VStack
      as={"form"}
      w={"80%"}
      margin={"0 auto"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SttFormItem isInvalid={!!errors.name}>
        <Flex>
          <SttFormItem.Label htmlFor="name">이름</SttFormItem.Label>
          <SttFormItem.SttButton />
        </Flex>
        <SttFormItem.sttInput
          id="name"
          placeholder="이름을 입력해주세요."
          register={register("name", {
            required: "필수 입력 값입니다!",
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </SttFormItem>

      <SttFormItem isInvalid={!!errors.gender}>
        <Flex>
          <SttFormItem.Label htmlFor="gender">성별</SttFormItem.Label>
          <SttFormItem.SttButton />
        </Flex>
        <SttFormItem.sttInput
          id="gender"
          placeholder="성별을 입력해주세요."
          register={register("gender", {
            required: "필수 입력 값입니다!",
          })}
        />
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
        </FormErrorMessage>
      </SttFormItem>

      <ButtonGroup>
        <Button>뒤로가기</Button>
        <Button type="submit">등록하기</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default UserInfoForm;
