"use client";
import Funnel from "@/app/(featured-slice)/shared/Funnel/Funnel";
import { AgeStep, GenderStep, WeightStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/Funnel/hook";
import { useState } from "react";
import { SurveyState } from "../../types";

export const SurveyFunnel = () => {
  const { onChangeNextStep, initializeStep, currentStep, progress } = useFunnel(
    ["age", "gender", "weight"]
  );

  const [surveyState, setSurveyState] = useState<SurveyState>({
    age: 0,
    weight: 0,
    gender: "",
  });

  return (
    <Funnel
      currentStep={currentStep}
      funnelState={surveyState}
      progress={progress}
    >
      <Funnel.Step name="age">
        <AgeStep goNextStep={onChangeNextStep} setState={setSurveyState} />
      </Funnel.Step>
      <Funnel.Step name="gender">
        <GenderStep goNextStep={onChangeNextStep} setState={setSurveyState} />
      </Funnel.Step>
      <Funnel.Step name="weight">
        <WeightStep goNextStep={onChangeNextStep} setState={setSurveyState} />
      </Funnel.Step>
    </Funnel>
  );
};
