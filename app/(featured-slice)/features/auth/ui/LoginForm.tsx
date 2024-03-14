"use client";
import { KaKaoButtonIcon } from "@/app/(featured-slice)/shared/UI";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useSocialToken } from "../hooks";
import { getData } from "@/app/(featured-slice)/shared/api/SharedApi";

const LoginForm = () => {
  const { signUpKakaoHandler, signUpNaverHandler } = useSocialToken();

  return (
    <ButtonGroup>
      <Box onClick={() => signUpKakaoHandler()}>
        <KaKaoButtonIcon />
      </Box>
      <Button onClick={() => signUpNaverHandler()}>네이버 로그인</Button>
      <Button onClick={() => getData()}>test</Button>
    </ButtonGroup>
  );
};

export default LoginForm;
