import { KAKAO_URL, NAVER_URL } from "../consts/consts";

interface UseSocialLogin {
  signUpKakao: () => void;
  signUpNaver: () => void;
}

export const useSocialToken = (): UseSocialLogin => {
  const redirect_uri = "https://api2.foodteacher.xyz/login/kakao/auth/callback";
  const redirect_naver =
    "https://api2.foodteacher.xyz/login/naver/auth/callback";

  const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";

  const signUpKakao = () => {
    window.location.href = KAKAO_URL(redirect_uri, mode);
  };

  const signUpNaver = () => {
    window.location.href = NAVER_URL(redirect_naver, mode);
  };

  return { signUpKakao, signUpNaver };
};
