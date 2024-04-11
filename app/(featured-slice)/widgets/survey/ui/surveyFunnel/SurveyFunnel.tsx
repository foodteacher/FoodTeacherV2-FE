"use client";
import Funnel from "@/app/(featured-slice)/shared/ui/Funnel/Funnel";
import { AgeStep, GenderStep, WeightStep } from "../step";
import { useFunnel } from "@/app/(featured-slice)/shared/ui/Funnel/hook";
import { useState } from "react";
import { SurveyState } from "../../types";

export const SurveyFunnel = () => {
  const { onChangeNextStep, onChangePrevStep, currentStep } = useFunnel([
    "age",
    "gender",
    "weight",
  ]);

  const [surveyState, setSurveyState] = useState<SurveyState>({
    age: 0,
    weight: "",
    gender: "",
  });

  return (
    <Funnel currentStep={currentStep} funnelState={surveyState}>
      <Funnel.Step name="age">
        <AgeStep goNextStep={onChangeNextStep} />
      </Funnel.Step>
      <Funnel.Step name="gender">
        <GenderStep goNextStep={onChangeNextStep} />
      </Funnel.Step>
      <Funnel.Step name="weight">
        <WeightStep />
      </Funnel.Step>
    </Funnel>
  );
};
