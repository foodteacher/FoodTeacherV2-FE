"use client";
import { KaKaoButtonIcon } from "@/app/(featured-slice)/shared/UI";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useSocialToken } from "../hooks";

const LoginForm = () => {
  const { signUpKakaoHandler, signUpNaverHandler } = useSocialToken();
  return (
    <ButtonGroup>
      <Box onClick={() => signUpKakaoHandler()}>
        <KaKaoButtonIcon />
      </Box>
      <Button onClick={() => signUpNaverHandler()}>네이버 로그인</Button>
    </ButtonGroup>
  );
};

export default LoginForm;
