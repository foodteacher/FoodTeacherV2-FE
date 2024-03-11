"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { Box } from "@chakra-ui/layout";
import {
  Button,
  KaKaoButtonIcon,
} from "@/app/(featured-slice)/shared/component";

export default function Home() {
  const redirect_uri =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/oauth"
      : "https://foodteacher.xyz/oauth";

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

  const state = false;
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_REST_ID}&state=${state}&redirect_uri=${redirect_uri}`;

  const signUpKakaoHandler = () => {
    window.location.href = kakaoURL;
  };

  const signUpNaverHandler = () => {
    window.location.href = naverURL;
  };

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
