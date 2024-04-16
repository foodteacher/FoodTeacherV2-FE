"use client";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { useSocialToken } from "../../../features/auth/hooks";
import { KakaoButton } from "@/app/(featured-slice)/shared/ui/Button";

const LoginForm = () => {
  const { signUpKakaoHandler, signUpNaverHandler } = useSocialToken();

  return (
    <Flex as={"form"}>
      <ButtonGroup>
        <KakaoButton />
        <Button onClick={() => signUpNaverHandler()}>네이버 로그인</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default LoginForm;
