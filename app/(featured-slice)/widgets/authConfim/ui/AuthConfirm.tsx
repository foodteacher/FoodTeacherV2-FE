"use client";
import { postKakaoLogin } from "@/app/(featured-slice)/features/auth/api";
import { postNaverLogin } from "@/app/(featured-slice)/features/auth/api/api";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

const AuthConfirm = ({ accessToken }: { accessToken: string }) => {
  const router = useRouter();
  const toast = useToast();

  useLayoutEffect(() => {
    const postLogin = async (token: string) => {
      console.log(token);
      if (accessToken) {
        localStorage.setItem("accessToken", token);
        return router.push("/survey");
      } else {
        router.replace("/");
        toast({
          title: "로그인에 실패했습니다!",
          id: "login",
          status: "error",
        });
      }
    };
    postLogin(accessToken);
  }, []);

  return (
    <>
      <div>Loading</div>
    </>
  );
};

export default AuthConfirm;
