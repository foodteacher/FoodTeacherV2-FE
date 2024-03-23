import { useMutation } from "@tanstack/react-query";
import { postKakaoLogin, postNaverLogin } from "../api/api";

export const useKakaoLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => postKakaoLogin(""),
  });

  return { kakaoLoginHandler: mutateAsync, isPending };
};

export const useNaverLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => postNaverLogin(""),
  });

  return { naverLoginHandler: mutateAsync, isPending };
};
