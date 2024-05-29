"use client";

import { useSurveyById } from "@/app/(featured-slice)/entities/survey/hooks";

export const HealthGoalStep = () => {
  const { data } = useSurveyById(1);

  console.log(data);
  return <div>123</div>;
};
