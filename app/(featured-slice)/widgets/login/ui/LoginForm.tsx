"use client";
import { ButtonGroup, Flex } from "@chakra-ui/react";
import {
  KakaoButton,
  NaverButton,
} from "@/app/(featured-slice)/shared/Button/ui";

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
