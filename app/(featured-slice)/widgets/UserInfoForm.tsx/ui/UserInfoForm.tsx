"use client";

import { UserInfo } from "@/app/(featured-slice)/features/auth/types";
import SttItem from "@/app/(featured-slice)/features/stt/ui/SttFormItem";
import { Button } from "@/app/(featured-slice)/shared/UI";
import { ButtonGroup, Flex, FormErrorMessage, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
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
      <SttItem isInvalid={!!errors.name}>
        <Flex>
          <SttItem.Label htmlFor="name">이름</SttItem.Label>
          <SttItem.SttButton />
        </Flex>
        <SttItem.sttInput
          id="name"
          placeholder="이름을 입력해주세요."
          register={register("name", {
            required: "필수 입력 값입니다!",
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </SttItem>

      <SttItem isInvalid={!!errors.gender}>
        <Flex>
          <SttItem.Label htmlFor="gender">성별</SttItem.Label>
          <SttItem.SttButton />
        </Flex>
        <SttItem.sttInput
          id="gender"
          placeholder="성별을 입력해주세요."
          register={register("gender", {
            required: "필수 입력 값입니다!",
          })}
        />
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
        </FormErrorMessage>
      </SttItem>
      <ButtonGroup>
        <Button>뒤로가기</Button>
        <Button type="submit">등록하기</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default UserInfoForm;
