import { useQuery } from "@tanstack/react-query";
import { getSurveyByPage } from "../api/survey";

const useSurveyListByPage = (id: number) => {
  return useQuery({
    queryKey: ["survey", { pageNum: id }],
    queryFn: () => getSurveyByPage({ pageNum: id }),
  });
};

export { useSurveyListByPage };
