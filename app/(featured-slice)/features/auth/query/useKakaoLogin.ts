import { useMutation } from "@tanstack/react-query";
import { postKakaoLogin } from "../api/api";

export const useKakaoLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => postKakaoLogin(""),
  });

  return { useKakaoLogin: mutateAsync, isPending };
};
