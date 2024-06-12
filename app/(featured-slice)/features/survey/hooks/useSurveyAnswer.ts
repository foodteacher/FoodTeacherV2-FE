import { useMutation } from "@tanstack/react-query";
import { postSurveyByPage } from "../api";

export const useSurveyAnswer = () => {
  return useMutation({
    mutationFn: (surveyAnswer: any) => postSurveyByPage(surveyAnswer),
  });
};
