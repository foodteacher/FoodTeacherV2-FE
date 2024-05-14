import { useMutation } from "@tanstack/react-query";
import { postSpeechToText } from "../api/api";

export const useTTS = () => {
  return useMutation({
    mutationFn: (text: string) => postSpeechToText(text),
  });
};
