"use client";
import { Button } from "@chakra-ui/react";
import { useSocialToken } from "../model/useSocialLogin";

export const NaverButton = () => {
  const { signUpNaver } = useSocialToken();

  return <Button onClick={() => signUpNaver()}>네이버 로그인</Button>;
};
