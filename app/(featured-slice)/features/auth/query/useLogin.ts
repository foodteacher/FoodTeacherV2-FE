import { useMutation } from "@tanstack/react-query";
import { postKakaoLogin, postNaverLogin } from "../api";

export const useKakaoLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (kakaoCode: any) => postKakaoLogin(kakaoCode),
  });

  return { kakaoLoginHandler: mutateAsync, isPending };
};

export const useNaverLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    // mutationFn: () => postNaverLogin(""),
  });

  return { naverLoginHandler: mutateAsync, isPending };
};
