"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { Box } from "@chakra-ui/layout";
import { Button, KaKaoButtonIcon } from "@/app/(featured-slice)/shared/UI";
import { useSocialLogin } from "./(featured-slice)/features/auth/hooks";

export default function Home() {
  const { signUpKakaoHandler, signUpNaverHandler } = useSocialLogin();
  return (
    <main>
      <Box>mainPage</Box>

      <Box onClick={() => signUpKakaoHandler()}>
        <KaKaoButtonIcon />
      </Box>

      <Button onClick={() => signUpNaverHandler()}>네이버 로그인</Button>
    </main>
  );
}
