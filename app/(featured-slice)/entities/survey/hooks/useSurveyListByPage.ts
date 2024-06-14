import { useQuery } from "@tanstack/react-query";
import { getSurveyByPage } from "../api/survey";

const useSurveyListByPage = (id: number) => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["survey", { pageNum: id }],
    queryFn: () => getSurveyByPage({ pageNum: id }),
  });

  return { data, isLoading };
};

export { useSurveyListByPage };
