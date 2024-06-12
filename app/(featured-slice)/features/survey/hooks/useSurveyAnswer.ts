import { useMutation } from "@tanstack/react-query";
import { postSurveyByPage } from "../api";

export const useSurveyAnswer = () => {
  return useMutation({
    mutationFn: (surveyAnswer: any) => {
      return postSurveyByPage(surveyAnswer);
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
      console.log("succeess");
    },
  });
};
