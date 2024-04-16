import { KAKAO_URL, NAVER_URL } from "../consts/consts";

interface UseSocialLogin {
  signUpKakaoHandler: () => void;
  signUpNaverHandler: () => void;
}

export const useSocialToken = (): UseSocialLogin => {
  const redirect_uri = "https://api2.foodteacher.xyz/login/kakao/auth/callback";

  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000/oauth"
  //   : "https://v2.foodteacher.xyz/oauth";

  const signUpKakaoHandler = () => {
    window.location.href = KAKAO_URL(redirect_uri);
  };

  const signUpNaverHandler = () => {
    window.location.href = NAVER_URL(redirect_uri);
  };

  return { signUpKakaoHandler, signUpNaverHandler };
};
