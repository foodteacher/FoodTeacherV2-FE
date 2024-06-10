import { useMutation } from "@tanstack/react-query";
import { postSurveyByPage } from "../api/survey";

export const useRegisterSurveyByPage = () => {
  return useMutation({
    mutationFn: () => postSurveyByPage(),
  });
};
