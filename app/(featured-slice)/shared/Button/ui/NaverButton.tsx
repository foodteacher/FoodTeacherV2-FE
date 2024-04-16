"use client";
import { Button } from "@chakra-ui/react";
import { useSocialToken } from "../model/hooks";

export const NaverButton = () => {
  const { signUpNaverHandler } = useSocialToken();

  return <Button onClick={() => signUpNaverHandler()}>네이버 로그인</Button>;
};
