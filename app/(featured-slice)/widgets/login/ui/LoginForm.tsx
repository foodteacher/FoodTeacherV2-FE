"use client";
import {
  KakaoButton,
  NaverButton,
} from "@/app/(featured-slice)/features/auth/ui";
import { ButtonGroup, Flex } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Flex as={"form"}>
      <ButtonGroup>
        <KakaoButton />
        <NaverButton />
      </ButtonGroup>
    </Flex>
  );
};

export default LoginForm;
