import { useQuery } from "@tanstack/react-query";
import { getSurveyById } from "../api/survey";

const useSurveyById = (id: number) => {
  return useQuery({
    queryKey: ["survey", { pageNum: id }],
    queryFn: () => getSurveyById({ pageNum: id }),
  });
};

export { useSurveyById };
