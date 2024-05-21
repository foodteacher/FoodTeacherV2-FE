import { useFunnel } from "@/app/(featured-slice)/shared/hooks/useFunnel";
import Funnel from "@/app/(featured-slice)/shared/ui/funnel/Funnel";
import React, { useState } from "react";

const surveyFunnel = () => {
  const { changeNextStep, initializeStep, currentStep, progress, steps } =
    useFunnel([""]);

  const [surveyState, setSurveyState] = useState<any>({
    name: "",
    height: 0,
    weight: 0,
    birthday: "",
    gender: "",
    targetWeight: 0,
    bloodType: "A",
  });
  return <Funnel currentStep={currentStep} funnelState={surveyState}></Funnel>;
};

export default surveyFunnel;