import { KAKAO_URL, NAVER_URL } from "../consts/consts";

interface UseSocialLogin {
  signUpKakaoHandler: () => void;
  signUpNaverHandler: () => void;
}

export const useSocialToken = (): UseSocialLogin => {
  const redirect_uri = "https://api2.foodteacher.xyz/login/kakao/auth/callback";

  const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";

  const signUpKakaoHandler = () => {
    window.location.href = KAKAO_URL(redirect_uri, mode);
  };

  const signUpNaverHandler = () => {
    window.location.href = NAVER_URL(redirect_uri, mode);
  };

  return { signUpKakaoHandler, signUpNaverHandler };
};
