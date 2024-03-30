"use client";
import { postKakaoLogin } from "@/app/(featured-slice)/features/auth/api";
import { postNaverLogin } from "@/app/(featured-slice)/features/auth/api/api";
import { Code } from "@/app/(featured-slice)/shared/type";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

const AuthConfirm = ({ codeInfo }: { codeInfo: Code }) => {
  const router = useRouter();
  const toast = useToast();

  useLayoutEffect(() => {
    const postLogin = async (code: Code) => {
      let accessToken;
      if (code?.state) {
        const data = await postNaverLogin(code);
        accessToken = data;
      } else {
        const data = await postKakaoLogin(code);
        accessToken = data;
      }

      if (accessToken) {
      } else {
        router.replace("/");
        toast({
          title: "로그인에 실패했습니다!",
          id: "login",
          status: "error",
        });
      }
    };
    postLogin(codeInfo);
  }, []);

  return (
    <>
      <div>Loading</div>
    </>
  );
};

export default AuthConfirm;
