import { useQuery } from "@tanstack/react-query";
import { getSurveyByPage } from "../api/survey";

const useSurveyListByPage = (id: number) => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["survey", { pageNum: id }],
    queryFn: () => getSurveyByPage({ pageNum: id }),
  });
  const preSelectedValue = data[0]?.options
    .filter((ele) => ele.selected)[0]
    .optionId.toString();

  return { data, preSelectedValue, isLoading };
};

export { useSurveyListByPage };
