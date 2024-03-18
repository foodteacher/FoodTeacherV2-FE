"use client";
import { KaKaoButtonIcon } from "@/app/(featured-slice)/shared/UI";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import React from "react";
import { useSocialToken } from "../../../features/auth/hooks";

const LoginForm = () => {
  const { signUpKakaoHandler, signUpNaverHandler } = useSocialToken();

  return (
    <Flex as={"form"}>
      <ButtonGroup>
        <Box onClick={() => signUpKakaoHandler()}>
          <KaKaoButtonIcon />
        </Box>
        <Button onClick={() => signUpNaverHandler()}>네이버 로그인</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default LoginForm;
