"use client";

import { MainButton } from "@/app/(featured-slice)/features/auth/ui";
import SttFormItem from "@/app/(featured-slice)/shared/stt/ui/SttFormItem";
import { ButtonGroup, Flex, FormErrorMessage, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

interface UserInfo {
  name: string;
  gender: string;
}

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit: SubmitHandler<UserInfo> = (formData) => {};

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
        <SttFormItem.SttInput
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
        <SttFormItem.SttInput
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
        <MainButton>뒤로가기</MainButton>
        <MainButton type="submit">등록하기</MainButton>
      </ButtonGroup>
    </VStack>
  );
};

export default UserInfoForm;
